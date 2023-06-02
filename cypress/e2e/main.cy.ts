
describe('main page', () => {
    describe('data rendering', () => {
        const example = [
            {
                "fileName": "cert.cer",
                "subjectCN": "Таксер Тест Тестерович",
                "IssuerCN": "Тестовый ЦСК AT 'IIT'",
                "ValidFrom": "09-04-2015 21:00:00 UTC",
                "ValidTill": "09-04-2017 21:00:00 UTC"
            }
            ,
            {
                "fileName": "cert2.cer",
                "subjectCN": "Лиференко Андрій Миколайович",
                "IssuerCN": "АЦСК органів юстиції України",
                "ValidFrom": "26.12.2017",
                "ValidTill": "26.12.2018"
            }
            ,
            {
                "fileName": "czo_2017.cer",
                "subjectCN": "Центральний засвідчувальний орган",
                "IssuerCN": "Центральний засвідчувальний орган",
                "ValidFrom": "22.09.2017",
                "ValidTill": "22.09.2027"
            }
            ,
            {
                "fileName": "ekpp_sign_2014.cer",
                "subjectCN": "Міністерство доходів і зборів України",
                "IssuerCN": "Акредитований центр сертифікації ключів ІДД Міндоходів",
                "ValidFrom": "14.01.2014",
                "ValidTill": "14.01.2016"
            }
            ,
            {
                "fileName": "idd_2019.cer",
                "subjectCN": "КНЕДП - ІДД ДПС",
                "IssuerCN": "Центральний засвідчувальний орган",
                "ValidFrom": "24.09.2019",
                "ValidTill": "24.09.2024"
            }
            ,
            {
                "fileName": "privat_2018.cer",
                "subjectCN": "АЦСК АТ КБ 'ПРИВАТБАНК'",
                "IssuerCN": "Центральний засвідчувальний орган",
                "ValidFrom": "06.11.2018",
                "ValidTill": "06.11.2023"
            }
            ,
            {
                "fileName": "Нестеренко_Володимир_Борисович_(Тест)-8101916.cer",
                "subjectCN": "Нестеренко_Володимир_Борисович (Тест)",
                "IssuerCN": "КНЕДП - ІДД ДПС",
                "ValidFrom": "21.11.2019",
                "ValidTill": "21.11.2021"
            }
            ,
            {
                "fileName": "Сухаренко_Олег_Андрiйович_(Тест)-8101900.cer",
                "subjectCN": "Сухаренко_Олег_Андрiйович (Тест)",
                "IssuerCN": "КНЕДП - ІДД ДПС",
                "ValidFrom": "21.11.2019",
                "ValidTill": "21.11.2021"
            }
            ,
            {
                "fileName": "Таксер Тест Тестович.cer",
                "subjectCN": "Таксер Тест Тестович",
                "IssuerCN": "АЦСК ТОВ 'КС'",
                "ValidFrom": "26.06.2014",
                "ValidTill": "26.06.2015"
            }
            ,
            {
                "fileName": "Тестувальник Tellipse 1111.cer",
                "subjectCN": "Тестувальник Tellipse 1111",
                "IssuerCN": "АЦСК Держінформ'юсту",
                "ValidFrom": "27.04.2015",
                "ValidTill": "27.04.2017"
            }
        ]
        before(() => {
            cy.clearLocalStorage().then(() => {
                window.localStorage.setItem('confirmedRunPrompt', "true")

            })
            cy.visit('https://js-55fbfg.stackblitz.io/')
            cy.wait(500)
        })
        example.forEach(file => {
            it(`${file.fileName} may be uploaded`, () => {
                const filePath = `cypress/fixtures/${file.fileName}`
                cy.readFile(filePath)
                // cy.clearLocalStorage()
                cy.readFile(filePath, 'binary')
                    .then(Cypress.Blob.binaryStringToBlob)
                    .then(fileContent => {
                        cy.get('dropbox').attachFile({
                            fileContent,
                            filePath,
                            lastModified: new Date().getTime(),
                        },
                            {
                                subjectType: 'drag-n-drop',
                                force: true
                            })
                    })
            })
            it('data is rendered', () => {
                const listContainer = cy.get('.list-group')
                listContainer.should('be.visible')
            })
            it('client should appear in list', () => {
                cy.get('a').contains(file.subjectCN)
            })
            it('data is rendered in table', () => {
                cy.get("table").get('tbody').as('table')
                cy.get('@table').get('tr').should('have.length', 4)
                cy.get('@table').get('th').as('thList');
                cy.get('@table').get('td').as('tdList');
            });
            it('table header are declared correctly', () => {
                cy.get("table").get('tbody').as('table')
                cy.get('@table').get('th').as('thList');
                ['SubjectCN:', 'IssuerCN:', 'ValidFrom:', 'ValidTill:'].forEach((text, index) => {
                    cy.get('@thList').eq(index).should('have.text', text)
                })
            });
            [file.subjectCN, file.IssuerCN, file.ValidFrom, file.ValidTill].forEach((text, index) => {
                it(`${text} is shown correctly`, () => {
                    cy.get("table").get('tbody').as('table')
                    cy.get('@table').get('td').as('tdList');
                    cy.get('@tdList').eq(index).should('have.text', text)
                })
            })
        })

    });

    describe('certificate upload', () => {
        // SUCCESS
        const firstFilePath = 'cert.cer'
        // SUCCESS
        const secondFilePath = 'cert2.cer'
        // FAIL
        const thirdFilePath = 'Тестовий_платник_4_(Тест)-8101906.cer'
        describe('check if data is shown correctly', () => {
            before(() => {
                cy.clearLocalStorage().then(() => {
                    window.localStorage.setItem('confirmedRunPrompt', "true")

                })
                cy.visit('https://js-55fbfg.stackblitz.io/')
                cy.wait(500)
                // cy.contains('Run this project').click()
            })
            it('no data is shown', () => {
                cy.get('.list-group').should('not.be.visible')
            })
            it('add first certificate', () => {
                const filePath = `cypress/fixtures/${firstFilePath}`
                cy.readFile(filePath)
                cy.readFile(filePath, 'binary')
                    .then(Cypress.Blob.binaryStringToBlob)
                    .then(fileContent => {
                        cy.get('dropbox').attachFile({
                            fileContent,
                            filePath,
                            lastModified: new Date().getTime(),
                        },
                            {
                                subjectType: 'drag-n-drop',
                                force: true
                            })
                    })
            })
            it('first certificate should be shown', () => {
                cy.get('.list-group').get('a').should('have.length', 1)
            })

            it('second certificate should be processed', () => {
                const filePath = `cypress/fixtures/${secondFilePath}`
                cy.readFile(filePath)
                cy.readFile(filePath, 'binary')
                    .then(Cypress.Blob.binaryStringToBlob)
                    .then(fileContent => {
                        cy.get('dropbox').attachFile({
                            fileContent,
                            filePath,
                            lastModified: new Date().getTime(),
                        },
                            {
                                subjectType: 'drag-n-drop',
                                force: true
                            })
                    })
            })
            it('second certificate should be shown', () => {
                cy.get('.list-group').get('a').should('have.length', 2)
            })
            it('after reload data should be saved', () => {
                cy.reload()
                cy.get('.list-group').get('a').should('have.length', 2)
                // cy.visit('https://js-55fbfg.stackblitz.io/')
                // cy.reload(true)
            })
            it('if no data in storage after reload no data should be shown', () => {
                // cy.clearLocalStorage()
                // cy.reload()
            })
            it('invalid certificate should not be added', () => {

            })
            it('dublicate certificate should not be added', () => {

            })
        })
        describe('invalid file processing', () => {
            before(() => {
                cy.clearLocalStorage().then(() => {
                    window.localStorage.setItem('confirmedRunPrompt', "true")
                })
            })
            it('invalid file should trigger error', () => {
                cy.visit('https://js-55fbfg.stackblitz.io/', {
                    onBeforeLoad(win) {
                        // Stub your functions here
                        cy.stub(win, 'alert')
                    },
                })
                const filePath = `cypress/fixtures/${thirdFilePath}`
                cy.readFile(filePath, 'binary')
                    .then(Cypress.Blob.binaryStringToBlob)
                    .then(fileContent => {
                        cy.get('dropbox').attachFile({
                            fileContent,
                            filePath,
                            lastModified: new Date().getTime(),
                        },
                            {
                                subjectType: 'drag-n-drop',
                                force: true
                            })
                    })

                cy.wait(6000)
                cy.log('after load')
                cy.getAllLocalStorage().then(console.log)
                cy.window().its('alert').should('be.calledOnce')
                cy.visit('https://js-55fbfg.stackblitz.io/', {
                    onBeforeLoad(win) {
                        cy.stub(win, 'alert')
                    },
                })
                cy.wait(5000)
                cy.window().its('alert').should('not.be.called')
            })
        })

        describe('dublicate files', () => {
            before(() => {
                cy.clearLocalStorage().then(() => {
                    window.localStorage.setItem('confirmedRunPrompt', "true")

                })
                cy.visit('https://js-55fbfg.stackblitz.io/')
                cy.wait(500)
                // cy.contains('Run this project').click()
            })
            it('no data is shown', () => {
                cy.get('.list-group').should('not.be.visible')
            })
            it('add first certificate', () => {
                const filePath = `cypress/fixtures/${firstFilePath}`
                cy.readFile(filePath)
                cy.readFile(filePath, 'binary')
                    .then(Cypress.Blob.binaryStringToBlob)
                    .then(fileContent => {
                        cy.get('dropbox').attachFile({
                            fileContent,
                            filePath,
                            lastModified: new Date().getTime(),
                        },
                            {
                                subjectType: 'drag-n-drop',
                                force: true
                            })
                    })
            })
            it('first certificate should be shown', () => {
                cy.get('.list-group').get('a').should('have.length', 1)
            })
            it('add first certificate', () => {
                const filePath = `cypress/fixtures/${firstFilePath}`
                cy.readFile(filePath)
                cy.readFile(filePath, 'binary')
                    .then(Cypress.Blob.binaryStringToBlob)
                    .then(fileContent => {
                        cy.get('dropbox').attachFile({
                            fileContent,
                            filePath,
                            lastModified: new Date().getTime(),
                        },
                            {
                                subjectType: 'drag-n-drop',
                                force: true
                            })
                    })
            })
            it('first certificate should be shown', () => {
                cy.get('.list-group').get('a').should('have.length', 1)
            })


        })
    })
})



