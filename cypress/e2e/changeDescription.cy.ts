import { frontUrl, testingUser} from "../support/constants";

describe('Cambiar descripción de usuario', () => {
    it('Debería cambiar la descripción y reflejarse', () => {

        // Hacemos login desde la API y metemos el token en localstorage
        cy.loginByApi();

        //Navegamos a la ruta protegida /admin
        cy.visit(`${frontUrl}admin/profile`);

        cy.contains('testinguser').should('exist');
        
        cy.get('textarea[name="description"]').clear().type(testingUser.description);

        cy.get('input[type="submit"][value= "Guardar Cambios"]').click();

        cy.get(`a[href="/${testingUser.username}"]`)
            .invoke('removeAttr', 'target')
            .click();

        cy.contains(testingUser.description).should('exist');

    })
})