class NavigationPage {
    elements = {
      // Menu Links
      menuLinks: () => cy.get('.menu-link'), 
      // Footer Links
      footerLinks: () => cy.get('.footer-link'), 
      // Breadcrumbs
      breadcrumbs: () => cy.get('.breadcrumbs') 
    };
  
    // Navigate using a menu link
    clickMenuLink(linkText) {
      this.elements.menuLinks().contains(linkText).click();
    }
  
    // Navigate using a footer link
    clickFooterLink(linkText) {
      this.elements.footerLinks().contains(linkText).click();
    }
  
    // Verify breadcrumbs
    verifyBreadcrumbs(expectedBreadcrumbs) {
      this.elements.breadcrumbs().should('contain', expectedBreadcrumbs);
    }
  }
  
  export default NavigationPage;