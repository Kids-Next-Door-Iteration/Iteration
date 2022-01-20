describe('Create New Event', () => {
  it('Logins in as a user then creates a new event on the dashboard', () => {
    const today = new Date();
    const newEventDate = Number(String(today.getDate()).padStart(2, '0')) + 3;

    // Login
    cy.visit('http://localhost:8080/');

    cy.clearCookies();

    // Check to see if the applicaiton is logged in, if so, log out
    if (cy.get('#logout-button').contains('Log Out')) {
      cy.contains('Log Out').click();
    }

    cy.contains('Login').click();

    cy.url().should('include', '/login');

    // cy.pause()

    cy.get('[data-cy="login-email"]').should('have.value', '');

    cy.get('[data-cy="login-email"]')
      .type('dan@gmail.com')
      .should('have.value', 'dan@gmail.com');

    cy.get('[data-cy="login-password"]')
      .type('123')
      .should('have.value', '123');

    cy.contains('Log In').click();

    cy.url().should('include', '/dashboard');

    // Logged in

    cy.contains('Add a new post').click();
    // Data Attributes did not work for any of the following:
    // cy.get('[data-cy="newEvent-datePicker"]').click();
    // cy.get(`.react-datepicker__day--0${newEventDate}`).click();
    // cy.get('[data-cy="newEvent-datePicker"]').should('have.value', `01/${newEventDate}/2022`);
    // Must use IDs
    cy.get('#newEvent-datePicker').click();
    cy.get(`.react-datepicker__day--0${newEventDate}`).click();
    cy.get('#newEvent-datePicker').should(
      'have.value',
      `01/${newEventDate}/2022`
    );

    cy.get('#newEvent-eventName')
      .type('My First Event')
      .should('have.value', 'My First Event');
    cy.get('#newEvent-location')
      .type('Chicago, IL')
      .should('have.value', 'Chicago, IL');
    cy.get('#newEvent-message')
      .type('This is Cypress testing out a a new create_event_spec')
      .should(
        'have.value',
        'This is Cypress testing out a a new create_event_spec'
      );

    cy.contains('Create Post').click();

    cy.contains('Close').click();

    // Look for new event

    cy.contains(`Jan ${newEventDate} | My First Event`);
  });
});
