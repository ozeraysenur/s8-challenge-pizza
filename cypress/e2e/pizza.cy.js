describe('Pizza Order Form Validation', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/orderPage/');
  });

  it('should show an error if no size is selected', () => {
    cy.get('[data-cy="button-submit"]').click();
    cy.contains('Boyut seçimi yapmalısınız.').should('be.visible');
  });

  it('should show an error if no dough is selected', () => {
    cy.get('[data-cy="input-dough"]').select('empty');
    cy.get('[data-cy="button-submit"]').click();
    cy.contains('Hamur kalınlığını seçmelisiniz.').should('be.visible');
  });

  it('should show an error if less than 4 or more than 10 ingredients are selected', () => {
    cy.get('[data-cy="checkbox-0"]').check();
    cy.get('[data-cy="checkbox-1"]').check();
    cy.get('[data-cy="checkbox-2"]').check();
    cy.get('[data-cy="button-submit"]').click();
    cy.contains('En az 4, en fazla 10 malzeme seçmelisiniz!').should('be.visible');

    // should throw error if selected more than 10 extra ingredients
    for (let i = 0; i < 11; i++) {
      cy.get(`[data-cy="checkbox-${i}"]`).check();
    }
    cy.get('[data-cy="button-submit"]').click();
    cy.contains('En az 4, en fazla 10 malzeme seçmelisiniz!').should('be.visible');
  });

  it('should submit the form successfully when all inputs are valid', () => {
    cy.get('[data-cy="input-name"]').type('Ayşe');
    cy.get('[data-cy="size-m"]').check();
    cy.get('[data-cy="input-dough"]').select('medium');
    cy.get('[data-cy="checkbox-0"]').check();
    cy.get('[data-cy="checkbox-1"]').check();
    cy.get('[data-cy="checkbox-2"]').check();
    cy.get('[data-cy="checkbox-3"]').check();
    cy.get('[data-cy="button-submit"]').click();
    cy.url().should('include', '/success');
  });
});