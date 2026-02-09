declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to open the home page of the application.
     */
    openHomePage(): Chainable<void>;
  }
}