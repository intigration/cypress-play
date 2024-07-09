describe('Page Object Model Web', () => {
    before(() => {
        cy.visit('http://localhost:9090/')
        cy.url().should('eq', 'http://localhost:9090/')
    })

    it('Type a Quote', () => {
        cy.get('[data-testid=textInputQuote]')
            .type('test')
            .should('have.value', 'test')
    })

    it('Choose a Colour', () => {
        cy.get('[data-testid=colourSelect]')
            .select('Yellow')
            .should('have.value', 'Yellow')
    })

    it('Submit a Quote', () => {
        cy.get('[data-testid=btnSubmitQuote]').click()
        cy.get('[data-testid=quote_container]')
            .eq(1)
            .should('have.attr', 'style','background-color: yellow;')
        cy.get('[name="quoteText"]')
            .eq(1)
            .should('contain', 'test')
    })

    it('Delete a Quote', () => {
        cy.get('[data-testid=quote_container]')
            .eq(1)
            .click()
            .should('not.exist')
    })

})