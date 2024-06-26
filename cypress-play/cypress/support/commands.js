// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
Cypress.Commands.add('publisher', (N,k) => {
    cy.request("POST", "https://hooks.slack.com/services/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", {
    text:`Total Run=  ${N} - Current Test Iterator Index ${k}`
  
  }).then((response) => {
    // response.body is automatically serialized into JSON
        cy.log(response.body);
    expect(response.status).to.eq(200)
    expect(response).to.have.property('headers')
    expect(response).to.have.property('status').to.be('success')
  })
})
//
//
// -- This will overwrite an existing command --
Cypress.Commands.add('networkSupervisor', () => { 
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
})