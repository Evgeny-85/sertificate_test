describe('Категорія field', () => {
    before(() => {
        cy.visit('/order/create?usa=1')
    })
    it('field should be visisble', () => {
        cy.get('#form')
            .find('.left_text')
            .contains('Категорія')
            .parent()
            .should('be.visible')
            .find('span .select2-selection__arrow')
            .click()
        cy.intercept('POST', '**/autocomplete-declarant')
        cy.get('#form > div > div:nth-child(1) > div > div.row > div:nth-child(7) > div').type('M1')
        cy.get('[id^=select2-category_id-] > li').first().click()
    })
})