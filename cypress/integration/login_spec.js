describe('Log in', function () {
  it('Logs in from the home page', function () {
    cy.clearCookies();

    cy.visit('http://localhost:8080/');

    cy.contains('Login').click();

    cy.url().should('include', '/login');

    // cy.pause()

    cy.get('[data-cy="login-email"]')
      .type('dan@gmail.com')
      .should('have.value', 'dan@gmail.com');

    cy.get('[data-cy="login-password"]')
      .type('123')
      .should('have.value', '123');

    cy.contains('Log In').click();

    cy.url().should('include', '/dashboard');
  });
});
