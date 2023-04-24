it('Login', () => {
    cy.visit('https://juice-shop.herokuapp.com')
    cy.get('.close-dialog > .mat-button-wrapper').click()

    cy.get('#navbarAccount > .mat-button-wrapper').click()
    cy.get('.cc-btn').click()
    cy.get('#navbarLoginButton').click()
    cy.get('#email').type('burpikxdkngyaynylv@bbitq.com')
    cy.get('#password').type('12345')
    cy.get('#loginButton > .mat-button-wrapper').click()
})