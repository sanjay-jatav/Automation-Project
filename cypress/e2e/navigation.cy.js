import NavigationPage from '../pages/NavigationPage';

describe('Navigation Tests', () => {
  const navigationPage = new NavigationPage();

  beforeEach(() => {
    cy.visit('https://practicesoftwaretesting.com/#/'); 
  });

  it('should navigate to the correct page using menu links', () => {
    // Test menu links
    navigationPage.clickMenuLink('Home');
    cy.url().should('include', '/home'); 

    navigationPage.clickMenuLink('Products');
    cy.url().should('include', '/products');

    navigationPage.clickMenuLink('Contact');
    cy.url().should('include', '/contact'); 
  });

  it('should navigate to the correct page using footer links', () => {
    // Test footer links
    navigationPage.clickFooterLink('Privacy Policy');
    cy.url().should('include', '/privacy-policy'); 

    navigationPage.clickFooterLink('Terms of Service');
    cy.url().should('include', '/terms-of-service'); 
  });

  it('should display accurate breadcrumbs while navigating through categories', () => {
    // Navigate to a category
    navigationPage.clickMenuLink('Products');
    navigationPage.clickMenuLink('Category 1'); 

    // Verify breadcrumbs
    navigationPage.verifyBreadcrumbs('Home > Products > Category 1'); 
  });
});