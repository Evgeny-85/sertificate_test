describe('filling form', () => {
    before(() => {
        cy.visit('')
    })
    require('./fields/Заявник_field.cy')
    require('./fields/Телефон_заявителя_field.cy')
    require('./fields/Представник_заявителя_field.cy')
    require('./fields/Категорія_field.cy')
    require('./fields/Вид_палива_field.cy')
    require('./fields/Вид_газу_field.cy')
    require('./fields/Марка_виробника_field.cy')
    require('./fields/Нормативні_документи_field.cy')
    require('./fields/Код_УКТЗЕД_field.cy')
    require('./fields/Виробник_field.cy')
    require('./fields/Ідентифікаційний_№_(VIN)_field.cy')
    require('./fields/Агент_field.cy')
    require('./fields/Коментар_field.cy')
    require('./fields/Відповідальний_field.cy')
    require('./fields/modal_Пошук_Контрагенти_field.cy')


})