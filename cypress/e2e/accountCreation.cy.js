it('AccountCreation', () => {
    cy.visit('https://juice-shop.herokuapp.com')
    cy.get('.close-dialog > .mat-button-wrapper').click()

    cy.get('#navbarAccount > .mat-button-wrapper').click()
    cy.get('#navbarLoginButton').click()
    cy.get('.mat-simple-snackbar-action > .mat-focus-indicator > .mat-button-wrapper').click()
    cy.get('#newCustomerLink > .primary-link').click()
    const rndEmail = generateRandomNumber()+'test@email.com'
    cy.get('#emailControl').type(rndEmail)
    cy.get('#passwordControl').type('12345')
    cy.get('#repeatPasswordControl').type('12345')
    cy.get('.mat-select-placeholder').click()
    cy.get('#mat-option-1 > .mat-option-text').click()
    cy.get('#securityAnswerControl').type('test')
    cy.get('#registerButton').click()
})

function generateRandomNumber() {
    const min = 1000000000; // minimum 10-digit number
    const max = 9999999999; // maximum 10-digit number
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }