/// <reference types="cypress" />
/// <reference types="vite/client" />

import { frontUrl, backUrl, testingUser} from "../support/constants";

Cypress.Commands.add("loginByApi", () => {

    // Visitamos la app para inicializar el navegador de cypress
    cy.visit(`${frontUrl}/`);

    //Hacemos el login a través de la API directamente
    cy.request({
        method: "POST",
        url: `${backUrl}auth/login`,
        body: {
            email: testingUser.email,
            password: testingUser.password,
        },
    })
        // Metemos el token recibido en localStorage
        .then((response) => {
            cy.window().then((win) => {
                win.localStorage.setItem("AUTH_TOKEN", response.body);
            });
        });
});

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace Cypress {
        interface Chainable {
            loginByApi(): Chainable<void>;
        }
    }
}

export {};
