const loginpage = require("../support/pages/loginpage");
const data = require("../support/data/data");

describe("valid login", () => {
  before(() => {
    loginpage.visit();
  });
  it("To ensure the account used can be logged in", () => {
    loginpage.fill_email(data.email_valid);
    loginpage.fill_password(data.password_vaild);
    loginpage.login_button();
    cy.xpath('//*[@class="chakra-stat__number css-1axeus7"]', { timeout: 5000 }).should("be.visible");
  });
});

describe("invalid login", () => {
  beforeEach(() => {
    loginpage.visit();
  });
  it("To ensure the account used can,t be logged in with invalid email", () => {
    loginpage.fill_email(data.email_invalid);
    loginpage.fill_password(data.password_vaild);
    loginpage.login_button();
    loginpage.verifiy_input_invalid();
  });
  it("To ensure the account used can,t be logged in with invalid password", () => {
    loginpage.fill_email(data.email_valid);
    loginpage.fill_password(data.password_invalid);
    loginpage.login_button();
    loginpage.verifiy_input_invalid();
  });
  it("To ensure the account used can,t be logged in with not an email format", () => {
    loginpage.fill_email(data.not_email);
    loginpage.fill_password(data.password_invalid);
    loginpage.login_button();
    loginpage.verifiy_not_email();
  });
  it("To ensure the account used can,t be logged in with filling in email", () => {
    loginpage.fill_password(data.password_invalid);
    loginpage.login_button();
    loginpage.verifiy_empty_input();
  });
  it("To ensure the account used can,t be logged in with filling in password", () => {
    loginpage.fill_email(data.email_valid);
    loginpage.login_button();
    loginpage.verifiy_empty_input();
  });
});
