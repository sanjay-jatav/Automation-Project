import CategoriesPage from "./Page Object/CategoriesPage";

describe('Categories Filters Test', () => {
    const categoriesPage = new CategoriesPage();

    beforeEach(() => {
        categoriesPage.visit();
        categoriesPage.openCategoriesMenu();
        categoriesPage.selectCategory('Hand Tools');
    });

    it('should apply brand filter and verify results', () => {
        categoriesPage.applyBrandFilter('ForgeFlex Tools');
        categoriesPage.verifyBrandFilter('Bosch');
    });

    it('should clear filters and verify results', () => {
        categoriesPage.applyBrandFilter('Bosch');
        categoriesPage.clearFilters();
        categoriesPage.verifyFiltersCleared();
    });
});