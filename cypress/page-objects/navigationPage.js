function selectGroupMenuItem(menuItem) {
  cy.contains('a', menuItem).invoke('attr', 'aria-expanded').then( attr => {
    if (attr.includes('false')) {
      cy.contains('a', menuItem).click();
    }
  });
}

class NavigationPage {

  formLayoutsPage() {
    selectGroupMenuItem('Forms');
    cy.contains('Form Layouts').click();

  }

  datePickerPage() {
    selectGroupMenuItem('Forms');
    cy.contains('Date Picker').click();
  }

  toastrPage() {
    selectGroupMenuItem('Modal & Overlays');
    cy.contains('Toastr').click();
  }

  tooltipPage(){
    selectGroupMenuItem('Modal & Overlays');
    cy.contains('Tooltip').click();
  }

}

export const navigateTo = new NavigationPage();
