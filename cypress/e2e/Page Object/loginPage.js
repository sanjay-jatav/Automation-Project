class Login {
    visit() {
        cy.visit('https://practicesoftwaretesting.com/');
        cy.contains('Sign in').click();
    }

    getEmailInput() {
        return cy.get('#email', { timeout: 10000 });
    }

    getPasswordInput() {
        return cy.get('#password', { timeout: 10000 });
    }

    getLoginButton() {
        return cy.get('.btnSubmit', { timeout: 10000 });
    }

    getErrorMessage() {
        return cy.get('.alert', { timeout: 10000 });
    }

    login(email, password) {
        this.getEmailInput().clear().type(email);
        this.getPasswordInput().clear().type(password);
        this.getLoginButton().click();
    }
    loginEmpty(){
        this.getLoginButton().click();
        
    }
}

export default Login;