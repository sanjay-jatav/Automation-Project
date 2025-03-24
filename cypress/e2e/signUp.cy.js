import SignUp from "./Page Object/signUp";

describe('Registration Workflow with Password Strength Testing', () => {
    const signUp = new SignUp();

    beforeEach(() => {
        signUp.visit();
    });

    // Helper function to fill the form with specific data
    const fillForm = (data) => {
        signUp.fillForm(data);
    };

    // Test valid data with different password strengths
    describe('Valid Data Tests', () => {
        it('should successfully register with an "excellent" strength password', () => {
            cy.fixture('registerData.json').then((data) => {
                const validData = { ...data.validData, password: data.passwordTestCases.excellent };
                fillForm(validData);

                // Check password strength
                signUp.checkPasswordStrength('excellent');

                // Submit the form
                signUp.submitForm();

                // Assert successful registration
                // cy.url().should('include', '/account'); // Adjust URL as per your application
                signUp.getErrorMessage().should('not.exist');
            });
        });

        it('should show an error for a "weak" strength password with valid data', () => {
            cy.fixture('registerData.json').then((data) => {
                const validData = { ...data.validData, password: data.passwordTestCases.weak };
                fillForm(validData);

                // Check password strength
                signUp.checkPasswordStrength('weak');

                // Submit the form
                signUp.submitForm();

                // Assert error message for weak password
                signUp.getErrorMessage().should('contain', 'Password must be minimal 6 characters long.');
                signUp.getErrorMessage().should('contain', 'Password can not include invalid characters.');
            });
        });
    });

    // Test invalid data
    describe('Invalid Data Tests', () => {
        it('should show errors for invalid data and prevent form submission', () => {
            cy.fixture('registerData.json').then((data) => {
                fillForm(data.invalidData);

                // Submit the form
                signUp.submitForm();

                // Assert error messages for invalid data
                signUp.getErrorMessage().should('contain', 'Invalid first name');
                signUp.getErrorMessage().should('contain', 'Invalid last name');
                signUp.getErrorMessage().should('contain', 'Invalid date of birth');
                signUp.getErrorMessage().should('contain', 'Invalid address');
                signUp.getErrorMessage().should('contain', 'Invalid pincode');
                signUp.getErrorMessage().should('contain', 'Invalid city');
                signUp.getErrorMessage().should('contain', 'Invalid state');
                signUp.getErrorMessage().should('contain', 'Invalid email');
                signUp.getErrorMessage().should('contain', 'Password is too weak');

                // Ensure form is not submitted (URL should not change)
                cy.url().should('eq', 'https://practicesoftwaretesting.com/auth/register'); // Adjust URL as per your application
            });
        });
    });

    // Test empty data
    describe('Empty Data Tests', () => {
        it('should show errors for empty fields', () => {
            cy.fixture('registerData.json').then((data) => {
                fillForm(data.emptyData);

                // Submit the form
                signUp.submitForm();

                // Assert error messages for empty fields
                signUp.getErrorMessage().should('contain', 'First name is required');
                signUp.getErrorMessage().should('contain', 'fields.last-name.required');
                signUp.getErrorMessage().should('contain', 'Date of Birth is required');
                signUp.getErrorMessage().should('contain', 'Street is required');
                signUp.getErrorMessage().should('contain', 'Postcode is required');
                signUp.getErrorMessage().should('contain', 'City is required');
                signUp.getErrorMessage().should('contain', 'State is required');
                signUp.getErrorMessage().should('contain', 'Country is required');
                signUp.getErrorMessage().should('contain', 'Phone is required');
                signUp.getErrorMessage().should('contain', 'Email is required');
                signUp.getErrorMessage().should('contain', 'Password is required');
            });
        });
    });

    // Test password strength with empty data
    describe('Password Strength with Empty Data', () => {
        it('should show no strength for an empty password', () => {
            cy.fixture('registerData.json').then((data) => {
                fillForm(data.emptyData);

                // Check password strength (should not exist for empty password)
                signUp.getPasswordStrengthIndicator().should('not.exist');

                // Submit the form
                signUp.submitForm();

                // Assert error messages for empty fields
                signUp.getErrorMessage().should('contain', 'Password is required');
            });
        });
    });
});