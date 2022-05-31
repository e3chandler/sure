/// <reference types="cypress" />
import { BASE_URL } from '../../src/backend/api';
import routes from '../../src/constants/backend'

describe('happy path', () => {
  it('runs happy path successfully', () => {
    cy.visit('/');
    cy.getTestEl('table_link').should('be.visible');
    cy.getTestEl('you_go_link').should('be.visible');
    cy.getTestEl('policyholders_link').should('be.visible');

    /**
     * TODO: Challenge 10 - Update this test
     * - Click the Policyholders sidebar link
     * - Assert that a network request is made
     * - Assert that data from the network is displayed
     */
    cy.fixture('example').then(data => {
      cy.intercept('GET', `${BASE_URL}${routes.policyHolders}`, data).as('getRequest')
      cy.getTestEl('policyholders_link').click()
      cy.get('@getRequest').then(response => response).its('response.statusCode').should('eq', 200)
      cy.getTestEl('Policy Holder 1').should('be.visible')
      cy.contains('Ryann Chandler').should('be.visible')
      cy.contains('123 ABC Street Unit 4, Nashville Tn, 37214').should('be.visible')
      cy.contains('615-210-8078').should('be.visible')
      cy.contains('36').should('be.visible')
    })
  });
});
