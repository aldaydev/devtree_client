import { frontUrl, testingUser} from "../support/constants";

describe('Cambiar contraseña', () => {

    it('Debería cambiar la contraseña y mostrarnos el toast de éxito', () => {

        // Hacemos login desde la API y metemos el token en localstorage
        cy.loginByApi();

        //Navegamos a la ruta protegida /admin
        cy.visit(`${frontUrl}admin/account`);

        // Si el acceso es correcto deberá aparecer el nombre de usuario
        cy.contains(testingUser.username).should('exist');

        // Localizamos el text area de la descipción , escribimos y hacemos submit
        cy.get('input[name="password"]').type(testingUser.changedPassword);
        cy.get('input[name="password_confirmation"]').type(testingUser.changedPassword);
        cy.get('input[type="submit"][value= "Guardar Cambios"]').click();

        //Debe aparecer el toast confirmando la actualización
        cy.contains("Cuenta actualizada correctamente").should('exist');

        // Encontramos y pulsamos el botón para cerrar sesión
        cy.get('button[id="closeSession"').click();

        // Si se cierra sesión, la url debería contener /auth/login
        cy.url().should('include', '/auth/login');

        // Escribimos los datos en el formulario
        cy.get('#email').type(testingUser.email);
        cy.get('#password').type(testingUser.changedPassword);

        // Pulsar el borón de "submit"
        cy.get('input[type="submit"]').click();

        // Comprobar que se redirige a la página de /admin
        cy.url().should('include', '/admin');

        //Comprobar que le nombre del usuario aparece en la página
        cy.contains(testingUser.username).should('exist');

    })

})