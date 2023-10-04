class TodoListWebComponents {


    TodoDoListLenght(lenght) {
        cy.get('.todo-list li').should('have.length', lenght)
    }

    FirstItemAtTodoList(itemName) {
        cy.get('.todo-list li').first().should('have.text', itemName)
    }

    LastItemAtTodoList(itemName) {
        cy.get('.todo-list li').last().should('have.text', itemName)
    }

    AddNewItemAtTodoList(newItemValue) {
        cy.get('[data-test=new-todo]').type(`${newItemValue}{enter}`)
    }


    CheckTodoList(lenght, item) { 
        cy.get('.todo-list li')
            .should('have.length', lenght) 
            .last()
            .should('have.text', item)
    }

    CheckDoneAnItem(nameItemToCheck) {
        cy.contains(nameItemToCheck)
            .parent()
            .find('input[type=checkbox]')
            .check()
    }

    CheckDoneConfirmAnItem(nameItemToCheckConfirm) {
        cy.contains(nameItemToCheckConfirm)
            .parents('li')
            .should('have.class', 'completed')
    }

    CheckStatusAnItem(nameItemTocheckStatus) {
        cy.contains(nameItemTocheckStatus)
            .parent()
            .find('input[type=checkbox]')
            .check()
    }

    CheckNoItemOnList(nameItemToSearch){
        cy.get('.todo-list li')
        .should('have.length', 1)
        .should('not.have.text', nameItemToSearch)
    }

    CheckVisibleTaskOnList(nameTaskHasBeenRemoved) {
        cy.contains(nameTaskHasBeenRemoved).should('not.exist')
    }

    ConfirmItemHasBeenDid(lenghtItem, nameItemDid) {
        cy.get('.todo-list li')
            .should('have.length', lenghtItem)
            .first()
            .should('have.text', nameItemDid)
    }

    ConfirmNoHaveItemIncomplet(nameItemIncomplet) {
        cy.get('.filters > :nth-child(3) > a').click()
        cy.contains(nameItemIncomplet).should('not.exist')
    }

    DeleteAllTasks() {
        cy.contains('Clear completed').click()
    }

    DeleteNoMoreOption(){
        cy.contains('Clear completed').should('not.exist')
    }

    FilterIncompletTasks() {
        cy.contains('Active').click()
    }

    FilterCompletTasks() {
        cy.contains('Completed').click()
    }




    //Reports Options
    TakeEvidence(reportName) {
        cy.screenshot(reportName)
    }

    //Tools
    LoadInterface(time) {
        cy.wait(time)
    }

}

export default TodoListWebComponents