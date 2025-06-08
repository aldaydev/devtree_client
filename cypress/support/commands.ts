/// <reference types="cypress" />
/// <reference types="vite/client" />

Cypress.Commands.add('loginByApi', () => {
    cy.request({
        method: 'POST',
        url: 'http://localhost:4000/auth/login',
        body: {
            email: 'testing@user.es',
            password: '12345678'
        },
    }).then((response) => {
        const {token} = response.body;
        window.localStorage.setItem('AUTH_TOKEN', token)
    })
})

declare global {
    namespace Cypress {
        interface Chainable {
            loginByApi(): Chainable<void>
        }
    }
}

export {}
