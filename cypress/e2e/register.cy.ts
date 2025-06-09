import { frontUrl, testingUser} from "../support/constants";

describe('Registrar un nuevo usuario', () => {
    it('Deberá crear al usuario y llevar a la página de login', () => {
        // Visitar la página del login
        cy.visit(`${frontUrl}auth/register`);

        // Escribimos los datos en el formulario
        cy.get('#name').type(testingUser.name);
        cy.get('#email').type(testingUser.email);
        cy.get('#username').type(testingUser.username);
        cy.get('#password').type(testingUser.password);
        cy.get('#password_confirmation').type(testingUser.password);

        // Enviamos los datos
        cy.get('input[type="submit"]').click();

        // Debe aparecer el toast de confirmación de creación del usuario
        cy.contains('Registro creado correctamente').should('exist');

        // Comprobar que se redirige a la página de /auth/login
        cy.url().should('include', '/auth/login');
        
    })

})