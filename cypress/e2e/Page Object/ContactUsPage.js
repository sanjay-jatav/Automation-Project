class ContactUsPage {
    elements = {
      firstNameInput: () => cy.get('#firstName'), 
      lastNameInput: () => cy.get('#lastName'), 
      emailInput: () => cy.get('#email'), 
      subjectDropdown: () => cy.get('#subject'), 
      messageInput: () => cy.get('#message'), 
      submitButton: () => cy.get('button[type="submit"]'),
      successMessage: () => cy.get('.success-message') 
    };
  
    fillForm(firstName, lastName, email, subject, message) {
      this.elements.firstNameInput().type(firstName);
      this.elements.lastNameInput().type(lastName);
      this.elements.emailInput().type(email);
      this.elements.subjectDropdown().select(subject); 
      this.elements.messageInput().type(message);
    }
  
    submitForm() {
      this.elements.submitButton().click();
    }
  
    validateSuccessMessage() {
      this.elements.successMessage().should('be.visible').and('contain', 'Your message has been sent successfully.');
    }
  
    validateValidationErrors() {
      // Add assertions for validation errors
      cy.get('.error-message').should('be.visible'); 
    }
  }
  
  export default ContactUsPage;