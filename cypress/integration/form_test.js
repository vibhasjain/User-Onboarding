
describe('User Onboarding App', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    const textInput = () => cy.get('input[name=name]')
    const emailInput = () => cy.get('input[name=email]')
    const passwordInput = () => cy.get('input[name=password]')
    const tosInput = () => cy.get('input[name=tos]')
    const submitButton = () => cy.get('button[id=submit]')

    it('Type Name in Name input and check it', () => {
        textInput()
            .type('Vibhas')
            .should('have.value', 'Vibhas')
    })

    it('Type Email', () => {
        emailInput()
            .type('vibhas111@gmail.com')
    })

    it('Type Password', () => {
        passwordInput()
            .type('topsecretpassword')
    })

    it('Check checkbox and check that its checked', () => {
        tosInput()
            .check()
            .should('be.checked')
    })

    it('Check to see if a user can submit valid data', () => {
        textInput().type('Tester')
        emailInput().type('tester@testy.com')
        passwordInput().type('password')
        tosInput().check()
        submitButton().click()
        cy.contains('tester@testy.com').should('exist')

    })

    it('Ensure name cant be left empty', () => {
        emailInput().type('tester@testy.com')
        passwordInput().type('password')
        tosInput().check()
        submitButton().should('be.disabled')
    })

    it('Ensure email cant be left empty',() => {
        textInput().type('Tester')
        passwordInput().type('password')
        tosInput().check()
        submitButton().should('be.disabled')
    })

    it('Ensure password cant be left empty',() => {
        textInput().type('Tester')
        emailInput().type('tester@testy.com')
        tosInput().check()
        submitButton().should('be.disabled')
    })

    it('Ensure Terms of Service have to be agreed to',() => {
        textInput().type('Tester')
        emailInput().type('tester@testy.com')
        passwordInput().type('password')
        submitButton().should('be.disabled')
    })


})