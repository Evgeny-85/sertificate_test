describe('Вид палива field', () => {
    before(() => {
      cy.visit('/order/create?usa=1')
    })
    it('field should be visisble', () => {
      cy.get('#form')
        .find('.left_text')
        .contains('Вид палива')
        .parent()
        .should('be.visible')
        .find('span .select2-selection__arrow')
        .click()
      cy.intercept('POST', '**/autocomplete-declarant')
      cy.get('#form > div > div:nth-child(1) > div > div.row > div:nth-child(8) > div').type('Бензин')
      cy.get('[id^=select2-fuel_type_id-] > li').first().click()
      cy.get('#form')
        .find('.left_text')
        .contains('Вид палива')
        .parent()
        .should('be.visible')
        .find('span .select2-selection__arrow')
        .click()
      cy.intercept('POST', '**/autocomplete-declarant')
      cy.get('#form > div > div:nth-child(1) > div > div.row > div:nth-child(8) > div')
      cy.get('[id^=select2-fuel_type_id-] > li').eq(3).click()
    })
  })