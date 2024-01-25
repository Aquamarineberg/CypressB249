describe('Uygulama-02', () => {
    it('Temel Fonksiyonların Kullanımı-Amazon Örneği', () => {
        // https://www.amazon.com sitesine git
        cy.visit('https://www.amazon.com');

        // Arama motorunda 'iphone' kelimesini ara
        cy.get('#twotabsearchtextbox').type('iphone')
        cy.get('#nav-search-submit-button').click()

        // Arama sonuç sayfasında 'iphone' kelimesinin arandığını doğrula
        cy.get('.a-color-state').should('contain', 'iphone')
    });
});
