describe('Testing Tradie Login', () => {
  it('Tests tradie login', () => {
    cy.visit('http://localhost:3000/users/login')
    cy.get('#email')
    .type('admin@admin.com')
    .should('have.value', 'admin@admin.com')

    cy.get('#password')
    .type('admin')
    .should('have.value', 'admin')

    cy.get('#loginBtn').click()
    cy.url().should('include', '/tradieDashboard')
  })
})

describe('Testing Customer Login', () => {
  it('Tests customer login', () => {
    cy.visit('http://localhost:3000/users/login')
    cy.get('#email')
    .type('customer@trades.com')
    .should('have.value', 'customer@trades.com')

    cy.get('#password')
    .type('customer')
    .should('have.value', 'customer')

    cy.get('#loginBtn').click()
    cy.url().should('include', '/customerDashboard')
  })
})