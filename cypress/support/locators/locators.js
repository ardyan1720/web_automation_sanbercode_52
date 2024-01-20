module.exports = {
  loginloc: {
    email_field: '//*[@type="email"]',
    password_field: '//*[@type="password"]',
    btn_login: '//*[contains(@class, "chakra-button css-1n8i4of")]',
    verify_input_invalid: '//*[@role="alert"]',
  },

  kategoriloc: {
    nama_kategori: '//*[@id="nama"]',
    deskripsi_kategori: '//*[@id="deskripsi"]',
    btn_simpan_kategori: '//*[contains(@class, "chakra-button css-l5lnz6")]',
    btn_kategori: '//*[contains(@href, "/categories")]',
    btn_tambah: '//*[contains(@class, "chakra-button css-1piskbq")]',
    cari_ketegori: '//*[@placeholder="cari"]',
    verify_cari: '//*[@class="chakra-table css-fqy1u9"]',
    verify_tambah: '//*[@class="chakra-alert__icon"]', //css-4hbvqh
    titik_edit: '//*[@class="chakra-button chakra-menu__menu-button css-pu8osu"]',
  },
};
