describe('Заявник field', () => {
    before(() => {
        cy.visit('/order/create?usa=1')
    })
    it('field should be visisble', () => {
        cy.get('#form')
            .find('.left_text')
            .contains('Заявник')
            .parent()
            .should('be.visible')
    })
    it('data should be fetched on dropdown', () => {
        cy.intercept('POST', '**/autocomplete-declarant', cy.spy()
            .as('requestSpy'))
        cy.intercept('POST', '**/set-type-np')
            .as('huijna')
        cy.get('@requestSpy')
            .should('not.have.been.called')
        cy.get('#form')
            .find('.left_text')
            .contains('Заявник')
            .parent()
            .find('span .select2-selection__arrow')
            .click()
        cy.get('@requestSpy')
            .should('be.calledOnce')
    })
    it('http response is correct', () => {
        cy.intercept('POST', '**/autocomplete-declarant')
            .as('request')
        cy.get('#form')
            .find('.left_text')
            .contains('Заявник')
            .parent()
            .find('span .select2-selection__arrow').click()
        cy.wait('@request').then(result => {
            expect(result.response.statusCode).to.equal(200)
            const data: any[] = JSON.parse(result.response.body)
            expect(data).to.be.instanceOf(Array)
            data.map(i => {
                expect(i).to.have.all.keys('id')
            })
        })
    })

    it('options should be aviailiable', () => {
        cy.get('#form > div > div > div > div > div > label')
            .contains('Марка виробника')
            .parent()
            .should('be.visible')
        cy.get('#form > div > div:nth-child(2) > div.np-loader_data > div > div:nth-child(5) > label')
            .contains('Телефон отримувача')
            .parent()
            .should('be.visible')
    })
    it('Выбрать объект из списка', () => {
        cy.get('[id^=select2-declarant_id-] > li').eq(0).click()


    })
   
})
