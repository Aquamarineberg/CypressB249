/*1. go to https://demoqa.com/
2.click on forms
3.click on practise forms
4.type firstname as your name
5.Assert if its visible
6.Assert if it has value as your name
7.Type last name as your last name
8.Assert if it is exist
9.Assert if it has value as your lastname
10.Assert if it doesnt have your firstname
*/
describe('HomeWork', () => {
    it('homeworksolution', () => {
       //1. go to https://demoqa.com/
       cy.visit("https://demoqa.com/");
       //2. click on "Forms" button from the navigation menu
       cy.contains('Forms').click();
       //3.click on practise forms
       cy.contains('Practice Form').click();
       //4.type firstname as your name
       cy.get('#firstName').type('Salih')
       //5.Assert if its visible
       cy.get('#firstName').should('be.visible');
       //6.Assert if it has value as your name
       const myName = 'Salih';
       cy.get('#firstName').should('have.value', myName);
       //7.Type last name as your last name
       cy.get('#lastName').type('Turkmen');
       //8.Assert if it is exist
       cy.get('#lastName').should('exist');
       //9.Assert if it has value as your lastname
       const myLastName = 'Turkmen';
       cy.get('#lastName').should('have.value', myLastName);
       //10.Assert if it doesnt have your firstname
       cy.get('#lastName').should('not.have.value', 'Salih');
    });
   });






