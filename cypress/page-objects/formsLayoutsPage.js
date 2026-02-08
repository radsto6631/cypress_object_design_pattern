class FormLayoutsPage {

    submitUsingTheGrid(email, password, optionIndex) {
      cy.get('nb-card', 'Using the Grid').then(form =>{
        cy.wrap(form).find('[placeholder="Email"]').type(email);
        cy.wrap(form).find('[placeholder="Password"]').type(password);
        cy.wrap(form).find('[type="radio"]').eq(optionIndex).check({force: true});
        cy.wrap(form).contains('Sign In').click();
      })
    }

    submitBasicForm(email, password, isCheckedboxSelected) {
      cy.get('nb-card', 'Basic form').then(form =>{
        cy.wrap(form).find('[placeholder="Email"]').type(email);
        cy.wrap(form).find('[placeholder="Password"]').type(password);
        if (isCheckedboxSelected) {
          cy.wrap(form).find('[type="checkbox"]').check({force: true});
        }
        cy.wrap(form).contains('Submit').click();
      })
  }

}

export const onFormLayoutsPage = new FormLayoutsPage();