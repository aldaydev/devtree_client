const url = Cypress.env('frontUrl');

describe('Test de Login', () => {
    it('Debería permitir iniciar sesión con credenciales válidas', () => {

        // Visitar la página del login
        cy.visit(`${url}auth/login`);

        // Escribimos los datos en el formulario
        cy.get('#email').type('aldaymusica@gmail.com');
        cy.get('#password').type('23456789');

        // Pulsar el borón de "submit"
        cy.get('input[type="submit"]').click();

        // Comprobar que se redirige a la página de /admin
        cy.url().should('include', '/admin');
    })
})