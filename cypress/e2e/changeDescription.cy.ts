import { frontUrl, testingUser} from "../support/constants";

describe('Cambiar descripción de usuario', () => {
    it('Debería cambiar la descripción y reflejarse', () => {

        // Hacemos login desde la API y metemos el token en localstorage
        cy.loginByApi();

        //Navegamos a la ruta protegida /admin
        cy.visit(`${frontUrl}admin/profile`);

        // Si todo es correcto deberá aparecer el nombre de usuario
        cy.contains('testinguser').should('exist');

        // Localizamos el text area de la descipción , escribimos y hacemos submit
        cy.get('textarea[name="description"]').clear().type(testingUser.description);
        cy.get('input[type="submit"][value= "Guardar Cambios"]').click();

        // La página se debe actualizar automaticamente por lo que un <p> tendrá la nueva desacripción
        cy.get('p').contains(testingUser.description).should('exist');

        // Como comprobación extra, encontramos el botón para ir a la vista pública
        cy.get(`a[href="/${testingUser.username}"]`)
            .invoke('removeAttr', 'target')
            .click();

        // En la vista pública debe estar la nueva descipción
        cy.contains(testingUser.description).should('exist');

    })
})