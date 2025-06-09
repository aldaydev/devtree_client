import { frontUrl, testingUser} from "../support/constants";

describe('Test de Login', () => {
    it('Debería permitir iniciar sesión con credenciales válidas', () => {

        // Visitar la página del login
        cy.visit(`${frontUrl}auth/login`);

        // Escribimos los datos en el formulario
        cy.get('#email').type(testingUser.email);
        cy.get('#password').type(testingUser.password);

        // Pulsar el borón de "submit"
        cy.get('input[type="submit"]').click();

        // Comprobar que se redirige a la página de /admin
        cy.url().should('include', '/admin');

        //Comprobar que le nombre del usuario aparece en la página
        cy.contains(testingUser.username).should('exist');
    })
})