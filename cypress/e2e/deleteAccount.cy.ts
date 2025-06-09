import { frontUrl, testingUser} from "../support/constants";

describe('Eliminar una cuenta', () => {

    it('Debería eliminar la cuenta y ya no poder acceder a ella', () => {

        // Hacemos login desde la API y metemos el token en localstorage
        cy.loginByApi();

        //Navegamos a la ruta protegida /admin
        cy.visit(`${frontUrl}admin/account`);

        // Si el acceso es correcto deberá aparecer el nombre de usuario
        cy.contains(testingUser.username).should('exist');

        //Pulsamos el botón de eleminar cuenta
        cy.get('button[id="deleteAccount"').click();

        // Pulsamos en el botón de confirmar eliminación
        cy.get('button[id="confirmDeletion"').click();

        // Deberá aparecer el toast de confirmación de la eliminación
        cy.contains("La cuenta ha sido eliminada correctamente").should('exist');
        
        // La url deberá cambiar a /auth/login
        cy.url().should('include', '/auth/login');

        // Escribimos los datos en el formulario
        cy.get('#email').type(testingUser.email);
        cy.get('#password').type(testingUser.changedPassword);

        // Pulsar el borón de "submit"
        cy.get('input[type="submit"]').click();

        //Comprobar que le nombre del usuario aparece en la página
        cy.contains('Cuenta o contraseña incorrectas').should('exist');

    })

})