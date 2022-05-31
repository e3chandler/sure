/// <reference types="cypress" />
import { BASE_URL } from '../../src/backend/api';
import { routes } from '../../src/backend/routes'

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
    cy.intercept('GET', `${BASE_URL}/${routes.policyHolders.path}`).as('getRequest')
    cy.getTestEl('policyholders_link').click()
    cy.get('@getRequest').its('response.statusCode').should('eq', 200)

    cy.getTestEl('Policy Holder 1').should('be.visible')
    cy.contains('Mrs. Holder').should('be.visible')
    cy.contains('123 Lane Ave 3H, Santa Monica CA, 90405').should('be.visible')
    cy.contains('1-989-989-9898').should('be.visible')
    cy.contains('29').should('be.visible')
  });
});
