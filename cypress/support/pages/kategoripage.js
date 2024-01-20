const locators = require("../locators/locators");

class kategoripage {
  async fill_nama(nama) {
    cy.xpath(locators.kategoriloc.nama_kategori).type(nama);
  }

  async fill_deskripsi(kategori) {
    cy.xpath(locators.kategoriloc.deskripsi_kategori).type(kategori);
  }

  async btn_tambah() {
    cy.xpath(locators.kategoriloc.btn_tambah).click();
  }

  async btn_simpan() {
    cy.xpath(locators.kategoriloc.btn_simpan_kategori).click();
  }

  async btn_kategori() {
    cy.xpath(locators.kategoriloc.btn_kategori).dblclick();
  }

  async verifiy_simpan() {
    cy.xpath(locators.kategoriloc.verify_tambah).should("contain", "ditambahkan");
  }

  async fill_cari(cari) {
    cy.xpath(locators.kategoriloc.cari_ketegori).type(cari);
  }

  async verifiy_cari() {
    cy.xpath(locators.kategoriloc.verify_cari).should("contain", "sayur segar");
  }

  async titik_edit() {
    cy.xpath(locators.kategoriloc.titik_edit).should("have.text", "sayur segar");
  }
}
module.exports = new kategoripage();
