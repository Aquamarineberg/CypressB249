/*Steps
Web sitesine git
Üye Ol linkine tıkla
Ad kutusuna bir veri gir
Soyad kutusuna bir veri gir
Eposta Adresi kutusuna bir veri gir
Şifre kutusuna bir şifre gir
Şifre tekrarı kutusuna aynı şifreyi gir
"Kişisel Verilerin Korunması metnini okudum ve kabul ediyorum" kontrol kutusuna tıkla
Üye Ol butonuna tıkla
Kayıt işleminin gerçekleştiğini doğrula*/
describe('US_01', () => {
  it('TC_01: User can register with valid information', () => {
    // Web sitesine gidin
    cy.visit('https://www.kitapyurdu.com/');

    // "Login or register" metnini içeren öğeye tıklayın
    cy.contains('[register]').click();

    // "register-name" ID'sine sahip input alanına "Mehmet" yazın
    cy.get('[register-name]').type('Mehmet');

    // "register-lastname" ID'sine sahip input alanına "Aydin" yazın
    cy.get('#register-lastname').type('Aydin');

    // "register-email" ID'sine sahip input alanına "www.fakemail.net" yazın
    cy.get('#register-email').type('www.fakemail.net');

    // "register-password" ID'sine sahip input alanına "12345678" yazın
    cy.get('#register-password').type('12345678');

    // "register-password-confirm" ID'sine sahip input alanına "12345678" yazın
    cy.get('#register-password-confirm').type('12345678');

    // "Kişisel Verilerin Korunması" kutusuna tıklayın
    cy.get(':nth-child(7) > .ky-form-check-label > .ky-checkbox-input').click();

    // Diğer işlemleri buraya ekleyebilirsiniz, örneğin, kayıt ol butonuna tıklama
    cy.get('.ky-btn').click();

  });
});