const locators = require("../locators/locators");

class loginpage {
  async visit() {
    cy.visit("https://kasirdemo.belajarqa.com");
  }

  async fill_email(email) {
    cy.xpath(locators.loginloc.email_field).type(email);
  }

  async fill_password(password) {
    cy.xpath(locators.loginloc.password_field).type(password);
  }

  async login_button() {
    cy.xpath(locators.loginloc.btn_login).click();
  }

  //   async verifiy_input_invalid() {
  //     cy.xpath(locators.loginloc.verify_input_invalid, { timeout: 5000 }).should("be.visible");
  //   }

  async verifiy_input_invalid() {
    cy.xpath(locators.loginloc.verify_input_invalid).should("contain", "Kredensial yang Anda berikan salah");
  }

  async verifiy_not_email() {
    cy.xpath(locators.loginloc.verify_input_invalid).should("contain", "must be a valid email");
  }

  async verifiy_empty_input() {
    cy.xpath(locators.loginloc.verify_input_invalid).should("contain", "is not allowed to be empty");
  }
}

module.exports = new loginpage();
