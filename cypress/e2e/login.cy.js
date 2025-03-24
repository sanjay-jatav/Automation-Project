import Login from "./Page Object/loginPage";
describe('Login Test', () => {
    let loginPage;

    beforeEach(() => {
        loginPage = new Login();
        loginPage.visit();
    });

    it('should login with valid data', () => {
        cy.fixture('loginTestData').then((data) => {
            const { email, password } = data.validData;
            loginPage.login(email, password);
            cy.url().should('include', '/account');
        });
    });

    it('should show error message with invalid data', () => {
        cy.fixture('loginTestData').then((data) => {
            const { email, password } = data.invalidData;
            loginPage.login(email, password);
            loginPage.getErrorMessage().should('be.visible').and('contain', 'Invalid email or password');
        });
    });

    it('should show error message with empty data', () => {
        loginPage.loginEmpty();
        loginPage.getErrorMessage().should('be.visible').and('contain', 'Email is required');
        loginPage.getErrorMessage().should('be.visible').and('contain', 'Password is required');
    });
});