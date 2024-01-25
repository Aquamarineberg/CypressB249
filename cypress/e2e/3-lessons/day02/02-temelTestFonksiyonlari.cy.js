describe('Temel Test Fonksiyonları', () => {
    it('visit(), get(), click(), type(), should() fonksiyonlarının kullanımı', () => {
        cy.visit('URL');
        // visit() fonksiyonu bir URL'yi ziyaret etmek için kullanılır

        cy.get('locator').click();
        // get() fonksiyonu bir veya birden çok elementi seçmek için kullanılır
        // click() fonksiyonu belirli bir elemente tıklamak için kullanılır

        cy.get('locator').type('Metin').should('Doğrulayıcı', 'Doğrulanacak Metin');
        // type() fonksiyonu belirli bir input veya textarea alanına veri girmek için kullanılır
        // should() fonksiyonu belirli bir koşulu doğrulamak için kullanılır

    });
});