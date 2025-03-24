class FiltersPage {
    applyPriceFilter(minPrice, maxPrice) {
        cy.get('input[name="minPrice"]').clear().type(minPrice);
        cy.get('input[name="maxPrice"]').clear().type(maxPrice);
        cy.get('button').contains('Apply').click();
    }

    verifyPriceFilter(minPrice, maxPrice) {
        cy.get('.product-item').each(($el) => {
            const price = parseFloat($el.find('.price').text().replace('$', ''));
            expect(price).to.be.gte(minPrice).and.to.be.lte(maxPrice);
        });
    }

    applyBrandFilter(brandName) {
        cy.get('input[value="${brandName}"]').check();
        cy.get('button').contains('Apply').click();
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
        cy.get('input[name="minPrice"]').should('have.value', '');
        cy.get('input[name="maxPrice"]').should('have.value', '');
        cy.get('.product-item').should('have.length.gt', 0);
    }
}

export default FiltersPage;