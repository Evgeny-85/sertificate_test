describe('Протокол field', () => {
    before(() => {
        cy.visit('/order/create?usa=1')
    })
    it('field should be visisble', () => {
        cy.get('#form')
            .get('#form > div > div:nth-child(2) > h4:nth-child(1)')
            .contains('Протокол')
            .parent()
            .should('be.visible')
    })
    it('Номер', () => {
        cy.get('#form > div > div:nth-child(2) > div.col-md-12.col-xs-12').should('be.visible')
            .contains('Номер')
            .parent()
            .should('be.visible')
            .get('#form > div > div:nth-child(2) > div.col-md-12.col-xs-12 > div:nth-child(1) > div > div').should('be.visible')
            .get('#form > div > div:nth-child(2) > div.col-md-12.col-xs-12 > div:nth-child(1) > div > div > input').should('have.attr', 'readonly')
    })
    it('Дата', () => {
        cy.get('#form > div > div:nth-child(2) > div.col-md-12.col-xs-12').should('be.visible')
            .contains('Дата')
            .parent()
            .should('be.visible')
            .get('#form > div > div:nth-child(2) > div.col-md-12.col-xs-12 > div:nth-child(2) > div > div').should('be.visible')
            .get('#form > div > div:nth-child(2) > div.col-md-12.col-xs-12 > div:nth-child(2) > div > div > input').should('be.visible')
            .click()
            .get('body > div.xdsoft_datetimepicker.xdsoft_noselect.xdsoft_').should('be.visible')
    })
    it.only('Calendar', () => {
        cy.get('#form > div > div:nth-child(2) > div.col-md-12.col-xs-12 > div:nth-child(2) > div > div > input').should('be.visible')
            .click().click().type('{selectAll}{backspace}')
            .type('2023-07-04').wait(1000).type('{enter}').wait(1000)
    })
    it('Прикладені документи field should be visisble', () => {
        cy.get('#form')
            .get('#form > div > div:nth-child(2) > h4:nth-child(5)')
            .contains('Прикладені документи')
            .parent()
            .should('be.visible')
    })
    it('should be declared 3 div', () => {
        cy.get('#form > div > div:nth-child(2) > div:nth-child(6) > div > div').should('be.visible').should('have.length', 3)
    })
    it('1 div-label should have text "Документ"', () => {
        cy.get('#form > div > div:nth-child(2) > div:nth-child(6) > div > div.col-md-4.col-xs-4 > label')
            .contains('Документ')
            .should('be.visible')
    })
    it('2 div-label should have text "Номер"', () => {
        cy.get('#form > div > div:nth-child(2) > div:nth-child(6) > div > div.col-md-5.col-xs-4 > label')
            .contains('Номер')
            .should('be.visible')
    })
    it('3 div-label should have text "Дата"', () => {
        cy.get('#form > div > div:nth-child(2) > div:nth-child(6) > div > div.col-md-3.col-xs-4 > label')
            .contains('Дата')
            .should('be.visible')
    })
    it('should be declared 21 div', () => {
        cy.get('#form > div > div:nth-child(2) > div > div > div.col-xs-4')
            .should('be.visible').should('have.length', 21)
    })
    it('should be declared 6 span', () => {
        cy.get('#form > div > div:nth-child(2) > div > div > div > span > span.selection > span')
            .should('be.visible').should('have.length', 6)
    })
    it('1 div-span should have text "Техпаспорт"', () => {
        cy.get('#form > div > div:nth-child(2) > div:nth-child(7) > div > div.col-md-4.col-xs-4 > select')
            .first()
            .then(el => {
                cy.wrap(el).should('have.attr', 'disabled')
                cy.wrap(el).parent().parent()
            })
        // cy.get('#form > div > div:nth-child(2) > div:nth-child(7)')
        //     .contains('Техпаспорт')
        //     .should('be.visible')
        //     .find('#form > div > div:nth-child(2) > div:nth-child(7) > div > div.col-md-4.col-xs-4 > span > span.selection > span')
        //     .should('have.attr', 'disabled')
    })
    it('1 field Номер and Дата ', () => {
        cy.get('#form > div > div:nth-child(2) > div:nth-child(7) > div > div.col-xs-4 > input').should('be.visible')
            .get('#form > div > div:nth-child(2) > div:nth-child(7) > div > div.col-md-5.col-xs-4 > input').type('818385')
            .type('{selectAll}{backspace}')
            .get('#form > div > div:nth-child(2) > div:nth-child(7) > div > div.col-md-3.col-xs-4 > input').type('2023-07-06')
            .type('{selectAll}{backspace}')
    })
    it('2 div-span should have text "ДКД"', () => {
        cy.get('#form > div > div:nth-child(2) > div:nth-child(8) > div > div.col-md-4.col-xs-4 > select')
            .first()
            .then(el => {
                cy.wrap(el).should('have.attr', 'disabled')
                cy.wrap(el).parent().parent()
            })
        })
        it('2 field Номер and Дата ', () => {
            cy.get('#form > div > div:nth-child(2) > div:nth-child(8) > div > div.col-xs-4 > input').should('be.visible')
                .get('#form > div > div:nth-child(2) > div:nth-child(8) > div > div.col-md-5.col-xs-4 > input').type('818385')
                .type('{selectAll}{backspace}')
                .get('#form > div > div:nth-child(2) > div:nth-child(8) > div > div.col-md-3.col-xs-4 > input').type('2023-07-06')
                .type('{selectAll}{backspace}')
        })
        it('3 div-span should have text "МД"', () => {
            cy.get('#form > div > div:nth-child(2) > div:nth-child(9) > div > div.col-md-4.col-xs-4 > select')
                .first()
                .then(el => {
                    cy.wrap(el).should('have.attr', 'disabled')
                    cy.wrap(el).parent().parent()
                })
            })
            it('3 field Номер and Дата ', () => {
                cy.get('#form > div > div:nth-child(2) > div:nth-child(9) > div > div.col-xs-4 > input').should('be.visible')
                    .get('#form > div > div:nth-child(2) > div:nth-child(9) > div > div.col-md-5.col-xs-4 > input').type('818385')
                    .type('{selectAll}{backspace}')
                    .get('#form > div > div:nth-child(2) > div:nth-child(9) > div > div.col-md-3.col-xs-4 > input').type('2023-07-06')
                    .type('{selectAll}{backspace}')
            })
            it('4 div-span should have text "Посвідчення митниці"', () => {
            cy.get('#form > div > div:nth-child(2) > div:nth-child(10) > div > div.col-md-4.col-xs-4 > select')
                .first()
                .then(el => {
                    cy.wrap(el).should('have.attr', 'disabled')
                    cy.wrap(el).parent().parent()
                })
            })
            it('4 field Номер and Дата ', () => {
                cy.get('#form > div > div:nth-child(2) > div:nth-child(10) > div > div.col-xs-4 > input').should('be.visible')
                    .get('#form > div > div:nth-child(2) > div:nth-child(10) > div > div.col-md-5.col-xs-4 > input').type('818385')
                    .type('{selectAll}{backspace}')
                    .get('#form > div > div:nth-child(2) > div:nth-child(10) > div > div.col-md-3.col-xs-4 > input').type('2023-07-06')
                    .type('{selectAll}{backspace}')
            })
            it('5 div-span should have text "Інвойс"', () => {
            cy.get('#form > div > div:nth-child(2) > div:nth-child(11) > div > div.col-md-4.col-xs-4 > select')
                .first()
                .then(el => {
                    cy.wrap(el).should('have.attr', 'disabled')
                    cy.wrap(el).parent().parent()
                })
            })
            it('5 field Номер and Дата ', () => {
                cy.get('#form > div > div:nth-child(2) > div:nth-child(11) > div > div.col-xs-4 > input').should('be.visible')
                    .get('#form > div > div:nth-child(2) > div:nth-child(11) > div > div.col-md-5.col-xs-4 > input').type('818385')
                    .type('{selectAll}{backspace}')
                    .get('#form > div > div:nth-child(2) > div:nth-child(11) > div > div.col-md-3.col-xs-4 > input').type('2023-07-06')
                    .type('{selectAll}{backspace}')
            })
            it('6 div-span should have text "Договір купівлі-продажу"', () => {
            cy.get('#form > div > div:nth-child(2) > div:nth-child(12) > div > div.col-md-4.col-xs-4 > select')
                .first()
                .then(el => {
                    cy.wrap(el).should('have.attr', 'disabled')
                    cy.wrap(el).parent().parent()
                })
            })
            it('6 field Номер and Дата ', () => {
                cy.get('#form > div > div:nth-child(2) > div:nth-child(12) > div > div.col-xs-4 > input').should('be.visible')
                    .get('#form > div > div:nth-child(2) > div:nth-child(12) > div > div.col-md-5.col-xs-4 > input').type('818385')
                    .type('{selectAll}{backspace}')
                    .get('#form > div > div:nth-child(2) > div:nth-child(12) > div > div.col-md-3.col-xs-4 > input').type('2023-07-06')
                    .type('{selectAll}{backspace}')
            })
        })
    

