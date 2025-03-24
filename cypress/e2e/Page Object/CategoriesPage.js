class CategoriesPage {
    visit() {
        cy.visit('https://practicesoftwaretesting.com/');
    }

    openCategoriesMenu() {
        cy.get('.nav-link').contains('Categories').click();
    }

    selectCategory(categoryName) {
        cy.get('.dropdown-menu').contains(categoryName).click();
    }

    verifyCategoryPage(categoryName) {
        cy.url().should('include', `/category/${categoryName.toLowerCase().replace(' ', '-')}`);
        cy.get('h1').should('contain', categoryName);
    }

    applyBrandFilter(brandName) {
        cy.get('.checkbox').contains(brandName).click();
    }

    verifyBrandFilter(brandName) {
        cy.get('.product-item').each(($el) => {
            cy.wrap($el).find('.brand').should('contain', brandName);
        });
    }

    clearFilters() {
        cy.get('button').contains('Clear').click();
    }

    verifyFiltersCleared() {
        cy.get('.product-item').should('have.length.gt', 0);
    }
}

export default CategoriesPage;