/// <reference types="cypress" />

import { onDatePickerPage } from "../page-objects/dataPickerPage";
import { onFormLayoutsPage } from "../page-objects/formsLayoutsPage";
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

it.only('form layouts test', () => {
  navigateTo.formLayoutsPage();
  onFormLayoutsPage.submitUsingTheGrid('test@example.com', 'password123', 0);
  onFormLayoutsPage.submitBasicForm('test@example.com', 'password123', true);
  navigateTo.datePickerPage();
  onDatePickerPage.selectCommonandDateFromToday(5);
  onDatePickerPage.selectRangePickerDateFromToday(5, 10);
  
})