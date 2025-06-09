import { frontUrl, registerTestingUser} from "../support/constants";

describe('Registrar un nuevo usuario', () => {
    it('Deberá crear al usuario y llevar a la página de login', () => {
        // Visitar la página del login
        cy.visit(`${frontUrl}auth/register`);

        // Escribimos los datos en el formulario
        cy.get('#name').type(registerTestingUser.name);
        cy.get('#email').type(registerTestingUser.email);
        cy.get('#username').type(registerTestingUser.username);
        cy.get('#password').type(registerTestingUser.password);
        cy.get('#password_confirmation').type(registerTestingUser.password);

        // Enviamos los datos
        cy.get('input[type="submit"]').click();

        // Debe aparecer el toast de confirmación de creación del usuario
        cy.contains('Registro creado correctamente').should('exist');

        // Comprobar que se redirige a la página de /auth/login
        cy.url().should('include', '/auth/login');
    })

})