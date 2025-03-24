import ContactUsPage from '../pages/ContactUsPage';

describe('Contact Us Form Validation', () => {
  const contactUsPage = new ContactUsPage();

  beforeEach(() => {
    cy.visit('https://practicesoftwaretesting.com/#/contact'); 
  });

  it('should submit the form successfully with valid data', () => {
    cy.fixture('contactForm.json').then((data) => {
      const { firstName, lastName, email, subject, message } = data.validData;

      contactUsPage.fillForm(firstName, lastName, email, subject, message);
      contactUsPage.submitForm();
      contactUsPage.validateSuccessMessage();
    });
  });

  it('should display validation errors for invalid data', () => {
    cy.fixture('contactForm.json').then((data) => {
      const { firstName, lastName, email, subject, message } = data.invalidData;

      contactUsPage.fillForm(firstName, lastName, email, subject, message);
      contactUsPage.submitForm();
      contactUsPage.validateValidationErrors();
    });
  });
});