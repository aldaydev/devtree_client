import { frontUrl, testingUser} from "../support/constants";

describe('Cambiar username', () => {

    it('Debería cambiar el username y reflejarse', () => {

        // Hacemos login desde la API y metemos el token en localstorage
        cy.loginByApi();

        //Navegamos a la ruta protegida /admin
        cy.visit(`${frontUrl}admin/profile`);

        // Si todo es correcto deberá aparecer el nombre de usuario
        cy.contains(testingUser.username).should('exist');

        // Localizamos el text area de la descipción , escribimos y hacemos submit
        cy.get('input[name="username"]').clear().type(testingUser.changedUsername);
        cy.get('input[type="submit"][value= "Guardar Cambios"]').click();

        //Debe aparecer el toast confirmando la actualización
        cy.contains("Perfi actualizado correctamente").should('exist');

        // La página se debe actualizar automaticamente por lo que un <p> tendrá la nueva desacripción
        cy.get('p').contains(testingUser.changedUsername).should('exist');

        // Como comprobación extra, encontramos el botón para ir a la vista pública
        //Además el path param ahora debe ser el nuevo username
        cy.get(`a[href="/${testingUser.changedUsername}"]`)
            .invoke('removeAttr', 'target')
            .click();

        // En la vista pública debe estar la nueva descipción
        cy.contains(testingUser.changedUsername).should('exist');

    })
})