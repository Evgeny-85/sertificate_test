describe('Представник заявителя field', () => {
    before(() => {
        cy.visit('/order/create?usa=1')
    })
    it('field should be visisble', () => {
        cy.get('#form')
            .find('.left_text')
            .contains('Представник заявителя')
            .parent()
            .should('be.visible')
            .find('span .select2-selection__arrow')
            .click()
        cy.intercept('POST', '**/autocomplete-declarant')
            .as('request')
        cy.get('#form > div > div:nth-child(1) > div > div.row > div:nth-child(6) > div').type('Ширін Ігор Миколайович')
        cy.wait('@request')
        cy.get('[id^=select2-declarant_] > li').as('bla')
        cy.get('@bla').first().click()
        // cy.get('#form > div > div:nth-child(1) > div > div.row > div:nth-child(6) > div > a').click()

    })
})