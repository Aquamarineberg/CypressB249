/*Aşağıdaki testi CSS Selector kullanarak yapınız.
https://www.webdriveruniversity.com/Contact-Us/contactus.html adresini ziyaret et
İletişim Formunu doldur
"SUBMIT" butonuna tıkla
Teşekkür mesajının "Thank You for your Message!" metni olduğunu kontrol et*/

describe('Odev-01', () => {
    it('CSS Selector Kullanimi', () => {
        cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html');
        cy.url().should('eq', 'https://www.webdriveruniversity.com/Contact-Us/contactus.html') 
        // url() fonksiyonu mevcut sayfanın URL'sini kontrol etmek icin kullanilir
        // 'eq', 'equal' yani 'esit' anlamina gelir ve iki degeri karsilastirmak icin kullanilir
        cy.title().should('contain', 'Contact Us')
        // title() fonksiyonu mevcut sayfanin basligini kontrol etmek icin kullanilir
        cy.get('[name="first_name"]').type('Gürkay');
        cy.get('[name="last_name"]').type('Birinci');
        cy.get('[placeholder="Email Address"]').type('gurkay@birinci.com');
        cy.get('[name="message"]').type('Hello World');
        cy.get('[value="SUBMIT"]').click();
        cy.get('h1').should('have.text', 'Thank You for your Message!');
        // have.text, bir elemente ait metnin, beklenen metinle esit olup olmadigini kontrol eder
    });
});