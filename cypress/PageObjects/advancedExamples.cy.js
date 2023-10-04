class CommandActionsMethods{
    FillEmailAddress(emailAddress){
        cy.get('.action-email').type(emailAddress)
        cy.get('.action-email').should('have.value', emailAddress)
    }

    FillEmailAddressSpecialKeys(specialKeys){
        cy.get('.action-email').type(specialKeys)
        
    }

    DisableCheck(textDisableArea){
        cy.get('.action-disabled')
      .type(textDisableArea, { force: true })
      .should('have.value', textDisableArea)
    }
}
export default CommandActionsMethods
