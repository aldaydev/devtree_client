const url = Cypress.env('frontUrl');

describe('Login a través de la API', () => {
    it('Debería guardar el token en localStorage', () => {
        cy.loginByApi().then(() => {
            //Después del login se debería poder visitar /admin
            cy.visit(`${url}admin`);
            cy.contains('Ver perfil').should('exist');
        })
    })
})