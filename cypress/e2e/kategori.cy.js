const loginpage = require("../support/pages/loginpage");
const data = require("../support/data/data");
const kategoripage = require("../support/pages/kategoripage");

describe("kategori page", () => {
  beforeEach(() => {
    loginpage.visit();
    loginpage.fill_email(data.email_valid);
    loginpage.fill_password(data.password_vaild);
    loginpage.login_button();
    cy.xpath('//*[@class="chakra-stat__number css-1axeus7"]', { timeout: 5000 }).should("be.visible");
    kategoripage.btn_kategori();
  });

  it("To add a new category", () => {
    kategoripage.btn_tambah();
    kategoripage.fill_nama(data.kategoridata.nama_kategori);
    kategoripage.fill_deskripsi(data.kategoridata.deskripsi_ketegori);
    kategoripage.btn_simpan();
    kategoripage.verifiy_simpan();
  });
  it("to search for Kategori using three letters", () => {
    kategoripage.fill_cari(data.kategoridata.cari_ketegori);
    kategoripage.verifiy_cari();
  });
  it("To change the data value", () => {
    kategoripage.titik_edit();
  });
});
