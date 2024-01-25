describe('Uygulama-03', () => {
    it('CSS Selector Kullanimi', () => {
        cy.visit('https://automationteststore.com');

        cy.url().should('contain', 'automationteststore')
        cy.title().should('eq', 'A place to practice your automation skills!')

        cy.contains('Login or register').click()

        cy.get('[id="loginFrm_loginname"]').type('techpro');
        cy.get('[id="loginFrm_password"]').type('techpro!');
        cy.get('[title="Login"]').click();

        cy.get('[class="menu_text"]').should('contain.text', 'Welcome back')

    });
});