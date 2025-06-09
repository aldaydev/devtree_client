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
        cy.get('input[name="password"]').type(testingUser.password);
        cy.get('input[name="password_confirmation"]').type(testingUser.password);
        cy.get('input[type="submit"][value= "Guardar Cambios"]').click();

        //Debe aparecer el toast confirmando la actualización
        cy.contains("Cuenta actualizada correctamente").should('exist');

    })

})