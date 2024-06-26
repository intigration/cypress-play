/// <reference types="cypress" />
import { recurse } from 'cypress-recurse'
import { faker } from '@faker-js/faker';



import moment from 'moment';


const N = 1

const searchedText = `${faker.vehicle.manufacturer()} cars in lahore`
console.log(searchedText)
const checkNetwork = () => {
  return cy.wrap(window).its('navigator.onLine').should('be.true')
}

const upNetwork = () => {
  cy.log('**Network is getting up**')
  .then(() => {
    return Cypress.automation('remote:debugger:protocol',
      {
        command: 'Network.emulateNetworkConditions',
        params: {
          offline: false,
          latency: -1,
          downloadThroughput: -1,
          uploadThroughput: -1,
        },
      })
  })
}
const machineIP = function getIP() {

  // https://on.cypress.io/request
  cy.request('https://api.ipify.org?format=json').should((response) => {
    return response

  })
}
const searchSetter = function setter() {
  cy.log('Setting the Search')

  return cy.get('body').find('[aria-label="Search"]').click();


}

const searchResults = function search() {
  cy.get('body').find('[type="search"]').should('have.value', '').type(searchedText)
  searchSetter()
  return searchResults
}
context('Automation Run can be Iterated', () => {
  Cypress._.times(N, (k) => {
    context('Base - Core Automation',()=>{  

    describe('Bootstrap', () => {
      beforeEach(() => {
        checkNetwork()
        if (!checkNetwork()){
          upNetwork()

        }
        else{

          upNetwork()
        }

        cy.log(`IP Address ${machineIP()}`)
        cy.log(`StartTime ${moment().format()}`)

        cy.log(`Platform ${Cypress.platform} architecture ${Cypress.arch}`)
        cy.get("body").then((body) => {
          if (body.find("#desktopBannerWrapped").length > 0) {
            cy.log("Cookie banner found in the page! Close it!");
            cy.get("#optInText").click();
          } else {
            cy.log("No cookie banner found in the page");
          }
        })
        // Cypress starts out with a blank slate for each test
        // so we must tell it to visit our website with the `cy.visit()` command.
        // Since we want to visit the same URL at the start of all our tests,
        // we include it in our beforeEach function so that it runs before each test
        cy.visit('https://olx.com.pk')
      })
      afterEach(() => {


        cy.log(`EndTime ${moment().format()}`)

      })

      it('displays olx page by default', () => {
        // We use the `cy.get()` command to get all elements that match the selector.
        // Then, we use `should` to assert that there are two matched items,
        // which are the two default items.
        cy.get('.body').should('be.visible')

       
      })
      it('lets navigate and set the firing events before and after during content window loading', () => {
        // https://on.cypress.io/visit
    
        // Visit any sub-domain of your current domain
        // Pass options to the visit
        cy.visit('https://olx.com.pk/privacy-policy', {
          timeout: 50000, // increase total time for the visit to resolve
          onBeforeLoad (contentWindow) {
            // contentWindow is the remote page's window object
            expect(typeof contentWindow === 'object').to.be.true
          },
          onLoad (contentWindow) {
            // contentWindow is the remote page's window object
            expect(typeof contentWindow === 'object').to.be.true
          },
        })
      })
    })


      it('change the location', () => {
        // We'll store our item text in a variable so we can reuse it

        // Let's get the input element and use the `type` command to
        // input our new list item. After typing the content of our item,
        // we need to type the enter key as well in order to submit the input.
        // This input has a data-test attribute so we'll use that to select the
        // element in accordance with best practices:
        // https://on.cypress.io/selecting-elements


        // Now that we've typed our new item, let's check that it actually was added to the list.
        // Since it's the newest item, it should exist as the last element in the list.
        // In addition, with the two default items, we should have a total of 3 elements in the list.
        // Since assertions yield the element that was asserted on,


      })

      context('can perform user management', () => {

        it('can login', () => {


        })
        it('can logout', () => {


        })
        it('can register', () => {


        })

      })
      context('can perform CRUD', () => {
        beforeEach(() => {


        })

        it('can create', () => {
          // We'll click on the "active" button in order to

        })

        it('can update', () => {
          // We can perform similar steps as the test above to ensure

        })

        it('can delete', () => {

        })
      })
    })
  })
    context('Integration - Custom Automation',()=>{  
    describe("OLX inventory searching parameters", () => {
      beforeEach(function () {
        cy.log(`IP Address ${machineIP()}`)
        cy.log(`Platform ${Cypress.platform} architecture ${Cypress.arch}`)
        cy.get("body").then((body) => {
          if (body.find("#desktopBannerWrapped").length > 0) {
            cy.log("Cookie banner found in the page! Close it!");
            cy.get("#optInText").click();
          } else {
            cy.log("No cookie banner found in the page");
          }
        })
      })
      it("should display inventory with provided search query", () => {
        cy.log(`Platform ${Cypress.platform} architecture ${Cypress.arch}`)
        cy.viewport(1200, 1080)
        cy.visit("https://olx.com.pk/", {
          headers: {
            "Content-Type": "text/xml; charset=utf-8",
            "user-agent":
              "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36",
          },
        })
        searchResults()

        cy.get('body').find('[type="search"]').should('have.value', searchedText)
      })
      it("List Iteration", () => {

        cy.viewport(1200, 1080)
        cy.visit("https://olx.com.pk/", {
          headers: {
            "Content-Type": "text/xml; charset=utf-8",
            "user-agent":
              "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36",
          },
        })

        searchResults()
        cy.scrollTo('bottom')
        cy.location().then((location) => {

          cy.get("body").then(body => {
            if (body.find("#desktopBannerWrapped").length > 0) {
              cy.log("Cookie banner found in the page! Close it!");
              cy.get("#optInText").click();
            } else {
              cy.log("No cookie banner found in the page");
            }

            body.find('[type="submit"]').click({ multiple: true });

          })
        })
      })

    });

  })
  context('Test Observbility- Reporting Automation',()=>{  

  describe('Observibility Hook', () => {
    it("API Test 1.1 - GET request to that endpoint should return server status", () => {
      cy.request("POST", "https://hooks.slack.com/services/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", {
        text:`Total Run=  ${N} - Current Test Iterator Index ${k}`
      
      }).then((response) => {
        // response.body is automatically serialized into JSON
        cy.log(response.body);
        expect(response.status).to.eq(200)
        expect(response).to.have.property('headers')
        expect(response).to.have.property('status').to.be('success')
      });
      cy.log(`Total Run=  ${N} - Current Test Iterator Index ${k}`)

    });
  });
  })

  })
