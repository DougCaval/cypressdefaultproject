class CommandActionsMethods{
    FillEmailAddress(emailAddress){
        cy.get('.action-email').type(emailAddress)
        cy.get('.action-email').should('have.value', emailAddress)
    }

    FillEmailAddressSpecialKeys(specialKeys){
        cy.get('.action-email').type(specialKeys)
        
    }
}
export default CommandActionsMethods
