const HomepageData = require('../support/datatest/HomepageData')
const Homepage = require('../support/pages/Homepage')

let homepage = new Homepage();

describe('Page Object Model Web', () => {
    before(() => {
        homepage.visit('http://localhost:9090/')
    })

    it('Type a Quote', () => {
        homepage.type_quote(HomepageData.datatest.quote)
    })

    it('Choose a Colour', () => {
        homepage.choose_colour(HomepageData.datatest.quote_colour)
    })

    it('Submit a Quote', () => {
        homepage.submit_quote(HomepageData.datatest.quote_colour, HomepageData.datatest.quote)
    })

    it('Delete a Quote', () => {
        homepage.clear_quote(HomepageData.datatest.quote)
    })

})