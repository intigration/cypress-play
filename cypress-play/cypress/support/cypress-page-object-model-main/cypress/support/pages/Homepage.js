const locator = require ('../locator/HomepageLocator')

const css_colour = {
    Blue: 'background-color: blue;',
    Yellow: 'background-color: yellow;',
    White: 'background-color: white;'
}

class Homepage {
    async visit(path) {
        cy.visit(path)
        return cy.url().should('eq', 'http://localhost:9090/')
    }

    async type_quote(quote) {
        cy.get(locator.datatestid.ta_quote)
            .type(quote)
            .should('have.value', quote)
    }

    async choose_colour(colour) {
        cy.get(locator.datatestid.sel_colour)
            .select(colour)
            .should('have.value', colour)
    }

    async submit_quote(colour, quote) {
        cy.get(locator.datatestid.btn_submit).click()
        cy.get(locator.datatestid.quote_container).eq(1).should('have.attr', 'style', css_colour[colour])
        cy.contains(quote).should('exist')
    }

    async clear_quote(quote) {
        cy.contains(quote).click().should('not.exist')
    }
}

module.exports = Homepage