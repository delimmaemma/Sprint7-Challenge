describe('Can add text to name box', () => {
    it('Text added', () => {
        cy.visit('http://localhost:3000/pizza')
        cy.get('#name-input').should('be.visible')
        cy.get('#name-input').type('John Doe')
    })
})

describe('Can select multiple toppings', () => {
    it('Multiple toppings selected', () => {
        cy.visit('http://localhost:3000/pizza')
        cy.get('#topping1').should('be.visible')
        cy.get('#topping1').click()
        cy.get('#topping2').should('be.visible')
        cy.get('#topping2').click()
        cy.get('#topping3').should('be.visible')
        cy.get('#topping3').click()
        cy.get('#topping4').should('be.visible')
        cy.get('#topping4').click()
        cy.get('#topping5').should('be.visible')
        cy.get('#topping5').click()
        cy.get('#topping6').should('be.visible')
        cy.get('#topping6').click()
        cy.get('#topping7').should('be.visible')
        cy.get('#topping7').click()
    })
})

describe('Can submit form', () => {
    it('Fill out name', () => {
        cy.visit('http://localhost:3000/pizza')
        cy.get('#name-input').should('be.visible')
        cy.get('#name-input').type('John Doe')
    })
    it('Select size', () => {
        cy.visit('http://localhost:3000/pizza')
        cy.get('#size-dropdown').should('be.visible')
        cy.get('#size-dropdown').select('Small')
    })
    it('Select sauce', () => {
        cy.visit('http://localhost:3000/pizza')
        cy.get('#Red').should('be.visible')
        cy.get('#Red').click()
    })
    it('Select topping', () => {
        cy.visit('http://localhost:3000/pizza')
        cy.get('#topping1').should('be.visible')
        cy.get('#topping1').click()
    })
    it('Fill out special instructions', () => {
        cy.visit('http://localhost:3000/pizza')
        cy.get('#special-text').should('be.visible')
        cy.get('#special-text').type('None')
    })
    it('Click submit', () => {
        cy.visit('http://localhost:3000/pizza')
        cy.get('#name-input').should('be.visible')
        cy.get('#name-input').type('John Doe')
        cy.get('#size-dropdown').should('be.visible')
        cy.get('#size-dropdown').select('Small')
        cy.get('#Red').should('be.visible')
        cy.get('#Red').click()
        cy.get('#topping1').should('be.visible')
        cy.get('#topping1').click()
        cy.get('#special-text').should('be.visible')
        cy.get('#special-text').type('None')
    })
})