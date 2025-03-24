class SignUp{
    visit(){
        cy.visit('https://practicesoftwaretesting.com/auth/register');
        cy.wait(5000);
    }

    getFirstNameInput(){
        return cy.get('[data-test="first-name"]');
    }

    getLastNameInput(){
        return cy.get('[data-test="last-name"]');
    }

    getDateOfBirthInput(){
        return cy.get('[data-test="dob"]');
    }

    getAddressInput(){
        return cy.get('[data-test="street"]');
    }

    getPinCodeInput(){
        return cy.get('[data-test="postal_code"]');
    }

    getCityInput(){
        return cy.get('[data-test="city"]');
    }

    getStateInput(){
        return cy.get('[data-test="state"]');
    }

    getCountryInput(){
        return cy.get('[data-test="country"]');
    }
    getPhoneNumber(){
        return cy.get('[data-test="phone"]');
    }

    getEmailInput(){
        return cy.get('[data-test="email"]');
    }
    getPasswordInput(){
        return cy.get('[data-test="password"]');
    }

    getPasswordStrengthIndicator() {
        return cy.get('.fill');
    }

    getRegisterButton(){
        return cy.get('[data-test="register-submit"]');
    }

    getErrorMessage(){
        return cy.get('.alert')
    }

    fillForm(data){
        if(data.firstName) this.getFirstNameInput().type(data.firstName);
        if(data.lastName) this.getLastNameInput().type(data.lastName);
        if(data.dateOfBirth) this.getDateOfBirthInput().type(data.dateOfBirth);
        if(data.address) this.getAddressInput().type(data.address);
        if(data.pinCode) this.getPinCodeInput().type(data.pinCode);
        if(data.city) this.getCityInput().type(data.city);
        if(data.state) this.getStateInput().type(data.state);
        if(data.country) this.getCountryInput().select(data.country);
        if(data.mobileNumber) this.getPhoneNumber().type(data.mobileNumber);
        if(data.email) this.getEmailInput().type(data.email);
        if(data.password) this.getPasswordInput().type(data.password);
    }

    checkPasswordStrength(expectedStrength) {
        const strengthClasses = {
          weak: 'weak',
          moderate: 'moderate',
          strong: 'strong',
          veryStrong: 'very-strong',
          excellent: 'excellent'
        };
    
        this.getPasswordStrengthIndicator().should('have.class', strengthClasses[expectedStrength]);
    }

    submitForm(){
        this.getRegisterButton().click();
    }
}
export default SignUp;