export const frontUrl = Cypress.env('frontUrl');
export const backUrl = Cypress.env('backUrl');

export const testingUser = {
    name: 'Testing User',
    username: 'testinguser',
    changedUsername: 'testinguserchanged',
    email: 'testing@user.es',
    password: '12345678',
    description: 'Description to test 1111111',
    image: 'https://res.cloudinary.com/djknqsx3s/image/upload/v1749330459/e2bc5e31-eafb-49fb-a4af-721d7aace02d.png',
    links: [
        { name: 'spotify', url: 'https://spotify.com', enabled: true },
    ]
}

export const registerTestingUser = {
    name: 'Register Testing User',
    username: 'registertestinguser',
    email: 'registertesting@user.es',
    password: '12345678',
    description: '',
    image: '',
    links: [
        { name: 'spotify', url: 'https://spotify.com', enabled: false }
    ]
}