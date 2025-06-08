const url = Cypress.env('frontUrl');

describe('Login a través de la API', () => {
    it('Debería guardar el token en localStorage', () => {
        cy.loginByApi().then((response) => {
            cy.log(response.body)
            window.localStorage.setItem('AUTH_TOKEN', response.body)
        }).then(() => {
            cy.visit('http://localhost:5173/admin')
        });

        
    })
})