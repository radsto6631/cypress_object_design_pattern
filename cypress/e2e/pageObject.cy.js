/// <reference types="cypress" />

import { navigateTo } from "../support/pageObject/navigationPage"

beforeEach('Open application', () => {
  cy.visit("/");
})

it('navigation test', () => {
  navigateTo.formLayoutsPage();
  navigateTo.datePickerPage();
  navigateTo.toastrPage();
  navigateTo.tooltipPage();
})