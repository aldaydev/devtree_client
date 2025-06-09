import { frontUrl, testingUser} from "../support/constants";

describe('Agregar un enlace', () => {
    it('Añadirá el enlace al preview y la página pública del usuario', () => {

        // Hacemos login desde la API y metemos el token en localstorage
        cy.loginByApi();

        //Navegamos a la ruta protegida /admin
        cy.visit(`${frontUrl}admin`);

        // Encontramos el input y escribimos en él
        cy.get('input[name="spotify"]').type(testingUser.links[0].url);

        // Encontramos el switch para activarlo y hacemos click
        cy.get(`input[name="${testingUser.links[0].name}"] + button[role="switch"]`).click();

        // Buscamos el botón de guardar cambios y pulsamos
        cy.contains('button', 'GUARDAR CAMBIOS').click();

        // Debería aparecer el toas con la confirmación
        cy.contains('li', 'Actualizado correctamente');

        // Deberá estar el enlace del preview actualizado
        cy.contains('li > p', testingUser.links[0].name.toUpperCase());

        // Como comprobación extra, encontramos el botón para ir a la vista pública
        cy.get(`a[href="/${testingUser.username}"]`)
            .invoke('removeAttr', 'target')
            .click();

        // En la vista pública debe estar la nueva descipción
        cy.contains(testingUser.links[0].name.toUpperCase()).should('exist');

    })
})