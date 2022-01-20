describe('New User Test', () => {
  it('Adds a new user to DB', () => {
    cy.clearCookies();

    cy.visit('http://localhost:8080/');

    cy.contains('Login').click();

    cy.url().should('include', '/login');

    cy.contains('here').click();

    cy.url().should('include', '/signup');

    const email = 'test4@email.com';

    cy.get('#email-field')
      .type(email)
      .should('have.value', email)
      .get('#password-field')
      .type('123')
      .should('have.value', '123')
      .get('#firstName-field')
      .type('Joe')
      .should('have.value', 'Joe')
      .get('#lastName-field')
      .type('Smith')
      .should('have.value', 'Smith')
      .get('#accessCode-field')
      .type('987')
      .should('have.value', '987')
      .get('#address-field')
      .type('123 Seasame St')
      .should('have.value', '123 Seasame St')
      .get('#phone-field')
      .type('555-555-1234')
      .should('have.value', '555-555-1234');

    cy.contains('Submit').click();

    cy.url().should('include', '/login');
  });
});
