/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 14px;
  margin: 0;
}

body {
  display: flex;
}

aside {
  width: 30%;
  background: #fff;
  position: relative;
}

h1 {
  font-size: 26px;
  font-weight: 600;
  margin: 0;
}

#main_logo {
  margin: 36px auto 54px 28px;
  display: flex;
  align-items: baseline;
}
#main_logo img {
  width: 37px;
  height: 37px;
}

img {
  align-self: center;
}

p {
  font-size: 10px;
  padding: 2px;
  color: #838383;
  letter-spacing: -0.1px;
  margin: 0;
}

.iconsax {
  font-size: 24px;
  color: #9197B3;
  margin-right: 14px;
}

.arrow {
  font-size: 16px;
  flex-shrink: 0;
  margin-left: auto;
}

ul {
  list-style-type: none;
  padding: 0;
}
ul .aside-item {
  display: flex;
  width: 250px;
  align-items: center;
  margin-top: 18px;
  padding: 11px 8px 11px 11px;
  letter-spacing: -0.14px;
}

li.active {
  background-color: #5932EA;
  border-radius: 8px;
  color: #fff;
  transition: background-color 0.8s ease;
}

.aside-item.active i {
  color: #fff;
  transition: color 0.4s ease;
}

#menu_block {
  margin-left: 28px;
}

.user_account {
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
  padding: 0px 0px 28px 28px;
}
.user_account img {
  border-radius: 42px;
  margin-right: 12px;
}

#account_name {
  letter-spacing: 0.14px;
}

.user_position {
  letter-spacing: 0.12px;
  color: #757575;
  padding: 0;
  font-weight: 400;
}

#wrapper {
  width: 70%;
  background-color: #f8faff;
  padding: 0px 95px 300px 71px;
}

.iconsax.hamburger {
  display: none;
}

#product_container {
  border-radius: 30px;
  background-color: #fff;
  margin-top: 20px;
}

.heading_container {
  display: flex;
  align-items: center;
  padding: 30px 53px 0px 38px;
}

.product_heading {
  font-size: 22px;
  font-weight: 600;
  letter-spacing: -0.22px;
}

#greetings {
  font-size: 24px;
  margin-top: 41px;
}

.toggle_active {
  color: #16C098;
  margin-top: 7px;
  letter-spacing: -0.14px;
  font-weight: 400;
  font-size: 14px;
}

.search-container {
  display: flex;
  align-items: center;
  background-color: #f9fbff;
  border-radius: 10px;
  margin-left: auto;
  padding: 8px 6px;
  width: 216px;
}

.search-icon {
  color: #7e7e7e;
}

.search-input {
  border: none;
  outline: none;
  background-color: #f9fbff;
  width: 100%;
  font-size: 14px;
}
.search-input::placeholder {
  color: #B5B7C0;
}

.custom-table {
  border-collapse: collapse;
  width: calc(100% - 80px);
  margin: 20px 40px;
}
.custom-table th {
  border-bottom: 1px solid #eee;
  padding: 14px 0px;
  text-align: left;
  color: #B5B7C0;
}
.custom-table td {
  border-bottom: 1px solid #eee;
  padding: 14px 0px;
  text-align: left;
}
.custom-table tr {
  margin: 0 40px;
  color: #292D32;
}
.custom-table a {
  text-decoration: none;
  color: black;
}

.email-column {
  width: 20%;
}

.company-column {
  width: 20%;
}

th:last-of-type {
  text-align: center;
}

.status-info {
  color: white;
  text-align: center;
  letter-spacing: -0.14px;
  border-radius: 4px;
  padding: 4px 0px;
}

.status-active {
  color: #008767;
  border: 1px solid #00B087;
  background: rgba(22, 192, 152, 0.38);
}

.status-inactive {
  color: #DF0404;
  border: 1px solid #DF0404;
  background: #FFC5C5;
}

.info-nav {
  display: flex;
  padding: 20px 40px 40px 40px;
  align-items: center;
}

#data-info {
  font-size: 14px;
  color: #B5B7C0;
  letter-spacing: -0.14px;
}

#navigation {
  margin-left: auto;
}

.data-menu {
  display: flex;
}

.data-menu-item {
  background-color: #f5f5f5;
  border-radius: 4px;
  color: #404B52;
  padding: 5px 2px 4px 2px;
  width: 24px;
  font-size: 12px;
  text-align: center;
  margin-left: 10px;
}

.data-menu-item.active {
  border-radius: 4px;
}

@media only screen and (min-width: 992px) and (max-width: 1200px) {
  aside {
    width: 25%;
  }
  ul .aside-item {
    width: 180px;
  }
  #wrapper {
    padding: 0px 28px 100px 28px;
  }
  table * {
    font-size: 11px;
  }
  #data-info {
    font-size: 11px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  aside {
    width: 24%;
  }
  #main_logo {
    margin: 36px 16px 36px 16px;
  }
  #main_logo img {
    width: 25px;
    height: 25px;
  }
  #menu_block {
    margin-left: 16px;
  }
  h1 {
    font-size: 20px;
  }
  ul .aside-item {
    width: 140px;
    margin-top: 12px;
    font-size: 12px;
  }
  .iconsax {
    font-size: 20px;
    margin-right: 6px;
  }
  .arrow {
    font-size: 14px;
  }
  .user_account {
    padding: 0px 0px 16px 16px;
  }
  #wrapper {
    padding: 0px 16px 50px 16px;
  }
  .heading_container {
    padding: 24px 16px 0px 16px;
  }
  #greetings {
    font-size: 20px;
  }
  .product_heading {
    font-size: 20px;
  }
  .search-container {
    width: 180px;
  }
  .custom-table {
    margin: 20px 20px;
    width: calc(100% - 45px);
  }
  table * {
    font-size: 10px;
  }
  #data-info {
    font-size: 10px;
  }
  .info-nav {
    padding: 0px 16px 32px 16px;
  }
  .data-menu-item {
    width: 18px;
    font-size: 10px;
  }
  .status-info {
    padding: 4px 4px;
  }
}
@media only screen and (max-width: 767px) {
  body {
    overflow-x: hidden;
  }
  aside {
    position: fixed;
    top: 0;
    left: -100%;
    height: 100%;
    transition: left 0.5s ease;
  }
  ul .aside-item {
    width: 100%;
  }
  #wrapper {
    width: 120%;
    padding: 0px 16px 50px 16px;
    margin-left: 0;
    transition: margin-left 0.5s ease;
  }
  .header {
    padding: 10px;
    display: flex;
    align-items: center;
    align-items: baseline;
  }
  h3 {
    display: inline-block;
  }
  .heading_container {
    padding: 24px 16px 0px 16px;
  }
  .search-container {
    width: 160px;
  }
  .custom-table {
    width: calc(100% - 20px);
    margin: 30px 10px;
  }
  table * {
    font-size: 10px;
    padding-right: 4px;
  }
  #data-info {
    font-size: 10px;
    padding-right: 4px;
  }
  .info-nav {
    padding: 0px 16px 32px 16px;
    flex-direction: column;
    align-items: center;
  }
  #navigation {
    margin-left: 0px;
    margin-top: 10px;
  }
  #product_container {
    padding: 10px;
  }
  .data-menu-item {
    width: 15px;
    font-size: 10px;
  }
  .status-info {
    padding: 2px 4px;
  }
  i.hamburger {
    transition: all 0.5s ease-in-out;
  }
  .iconsax.hamburger {
    transition: all 1s ease-in-out;
    display: inline-block;
  }
}`, "",{"version":3,"sources":["webpack://./src/styles/main.scss"],"names":[],"mappings":"AAsBA;EACC,kCAVe;EAWf,gBAAA;EACA,eAAA;EACA,SAAA;AApBD;;AAsBA;EACC,aAAA;AAnBD;;AAqBA;EACC,UAAA;EACA,gBAAA;EACA,kBAAA;AAlBD;;AAoBA;EACC,eAAA;EACA,gBAAA;EACA,SAAA;AAjBD;;AAmBA;EACC,2BAAA;EACA,aAAA;EACA,qBAAA;AAhBD;AAiBC;EACC,WAAA;EACA,YAAA;AAfF;;AAkBA;EACC,kBAAA;AAfD;;AAiBA;EACC,eAAA;EACA,YAAA;EACA,cAxDS;EAyDT,sBAAA;EACA,SAAA;AAdD;;AAgBA;EACC,eAAA;EACA,cA7DS;EA8DT,kBAAA;AAbD;;AAeA;EACC,eAAA;EACA,cAAA;EACA,iBAAA;AAZD;;AAcA;EACC,qBAAA;EACA,UAAA;AAXD;AAYC;EACC,aAAA;EACA,YAAA;EACA,mBAAA;EACA,gBAAA;EACA,2BAAA;EACA,uBAAA;AAVF;;AAaA;EACC,yBArEoB;EAsEpB,kBAAA;EACA,WAnFS;EAoFT,sCAAA;AAVD;;AAaC;EACC,WAxFQ;EAyFR,2BAAA;AAVF;;AAaA;EACC,iBAAA;AAVD;;AAYA;EACC,kBAAA;EACA,SAAA;EACA,aAAA;EACA,mBAAA;EACA,0BAAA;AATD;AAUC;EACC,mBAAA;EACA,kBAAA;AARF;;AAWA;EACC,sBAAA;AARD;;AAUA;EACC,sBAAA;EACA,cA9GS;EA+GT,UAAA;EACA,gBAAA;AAPD;;AASA;EACC,UAAA;EACA,yBAxGoB;EAyGpB,4BAAA;AAND;;AAQA;EACE,aAAA;AALF;;AAOA;EACC,mBAAA;EACA,sBA/GoB;EAgHpB,gBAAA;AAJD;;AAMA;EACC,aAAA;EACA,mBAAA;EACA,2BAAA;AAHD;;AAKA;EACC,eAAA;EACA,gBAAA;EACA,uBAAA;AAFD;;AAIA;EACC,eAAA;EACA,gBAAA;AADD;;AAGA;EACC,cA7IS;EA8IT,eAAA;EACA,uBAAA;EACA,gBAAA;EACA,eAAA;AAAD;;AAEA;EACC,aAAA;EACA,mBAAA;EACA,yBAzIoB;EA0IpB,mBAAA;EACA,iBAAA;EACA,gBAAA;EACA,YAAA;AACD;;AACA;EACC,cA5JS;AA8JV;;AAAA;EACC,YAAA;EACA,aAAA;EACA,yBArJoB;EAsJpB,WAAA;EACA,eAAA;AAGD;AAFC;EACC,cApKQ;AAwKV;;AADA;EACC,yBAAA;EACA,wBAAA;EACA,iBAAA;AAID;AAHC;EACC,6BAAA;EACA,iBAAA;EACA,gBAAA;EACA,cA/KQ;AAoLV;AAHC;EACC,6BAAA;EACA,iBAAA;EACA,gBAAA;AAKF;AAHC;EACC,cAAA;EACA,cAvLQ;AA4LV;AAHC;EACC,qBAAA;EACA,YA1LQ;AA+LV;;AAFA;EACC,UAAA;AAKD;;AAHA;EACC,UAAA;AAMD;;AAHC;EACC,kBAAA;AAMF;;AAHA;EACC,YAxMU;EAyMV,kBAAA;EACA,uBAAA;EACA,kBAAA;EACA,gBAAA;AAMD;;AAJA;EACC,cA9MU;EA+MV,yBAAA;EACA,oCAAA;AAOD;;AALA;EACC,cAlNU;EAmNV,yBAAA;EACA,mBAAA;AAQD;;AANA;EACC,aAAA;EACA,4BAAA;EACA,mBAAA;AASD;;AAPA;EACC,eAAA;EACA,cAlOS;EAmOT,uBAAA;AAUD;;AARA;EACC,iBAAA;AAWD;;AATA;EACC,aAAA;AAYD;;AAVA;EACC,yBAhOoB;EAiOpB,kBAAA;EACA,cAxOU;EAyOV,wBAAA;EACA,WAAA;EACA,eAAA;EACA,kBAAA;EACA,iBAAA;AAaD;;AAXA;EACC,kBAAA;AAcD;;AAZA;EACC;IACC,UAAA;EAeA;EAZA;IACC,YAAA;EAcD;EAXD;IACC,4BAAA;EAaA;EAVA;IACC,eAAA;EAYD;EATD;IACC,eAAA;EAWA;AACF;AATA;EACC;IACC,UAAA;EAWA;EATD;IACC,2BAAA;EAWA;EAVA;IACC,WAAA;IACA,YAAA;EAYD;EATD;IACC,iBAAA;EAWA;EATD;IACC,eAAA;EAWA;EARA;IACC,YAAA;IACA,gBAAA;IACA,eAAA;EAUD;EAPD;IACC,eAAA;IACA,iBAAA;EASA;EAPD;IACC,eAAA;EASA;EAPD;IACC,0BAAA;EASA;EAPD;IACC,2BAAA;EASA;EAPD;IACC,2BAAA;EASA;EAPD;IACC,eAAA;EASA;EAPD;IACC,eAAA;EASA;EAPD;IACC,YAAA;EASA;EAPD;IACC,iBAAA;IACA,wBAAA;EASA;EANA;IACC,eAAA;EAQD;EALD;IACC,eAAA;EAOA;EALD;IACC,2BAAA;EAOA;EALD;IACC,WAAA;IACA,eAAA;EAOA;EALD;IACC,gBAAA;EAOA;AACF;AALA;EACC;IACC,kBAAA;EAOA;EALD;IACC,eAAA;IACA,MAAA;IACA,WAAA;IACA,YAAA;IACA,0BAAA;EAOA;EAJA;IACC,WAAA;EAMD;EAHD;IACC,WAAA;IACA,2BAAA;IACA,cAAA;IACA,iCAAA;EAKA;EAHD;IACC,aAAA;IACA,aAAA;IACA,mBAAA;IACA,qBAAA;EAKA;EAHD;IACC,qBAAA;EAKA;EAHD;IACC,2BAAA;EAKA;EAHD;IACC,YAAA;EAKA;EAHD;IACC,wBAAA;IACA,iBAAA;EAKA;EAFA;IACC,eAAA;IACA,kBAAA;EAID;EADD;IACC,eAAA;IACA,kBAAA;EAGA;EADD;IACC,2BAAA;IACA,sBAAA;IACA,mBAAA;EAGA;EADD;IACC,gBAAA;IACA,gBAAA;EAGA;EADD;IACC,aAAA;EAGA;EADD;IACC,WAAA;IACA,eAAA;EAGA;EADD;IACC,gBAAA;EAGA;EADD;IACC,gCAAA;EAGA;EADD;IACC,8BAAA;IACE,qBAAA;EAGF;AACF","sourcesContent":["$color_1: #838383;\r\n$color_2: #9197B3;\r\n$color_3: #fff;\r\n$color_4: #757575;\r\n$color_5: #16C098;\r\n$color_6: #7e7e7e;\r\n$color_7: #B5B7C0;\r\n$color_8: #292D32;\r\n$color_9: black;\r\n$color_10: white;\r\n$color_11: #008767;\r\n$color_12: #DF0404;\r\n$color_13: #404B52;\r\n$font-family_1: 'Poppins', sans-serif;\r\n$background-color_1: #5932EA;\r\n$background-color_2: #f8faff;\r\n$background-color_3: #fff;\r\n$background-color_4: #f9fbff;\r\n$background-color_5: #f5f5f5;\r\n\r\n@import \"https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap\";\r\n\r\n* {\r\n\tfont-family: $font-family_1;\r\n\tfont-weight: 500;\r\n\tfont-size: 14px;\r\n\tmargin: 0;\r\n}\r\nbody {\r\n\tdisplay: flex;\r\n}\r\naside {\r\n\twidth: 30%;\r\n\tbackground: #fff;\r\n\tposition: relative;\r\n}\r\nh1 {\r\n\tfont-size: 26px;\r\n\tfont-weight: 600;\r\n\tmargin: 0;\r\n}\r\n#main_logo {\r\n\tmargin: 36px auto 54px 28px;\r\n\tdisplay: flex;\r\n\talign-items: baseline;\r\n\timg {\r\n\t\twidth: 37px;\r\n\t\theight: 37px;\r\n\t}\r\n}\r\nimg {\r\n\talign-self: center;\r\n}\r\np {\r\n\tfont-size: 10px;\r\n\tpadding: 2px;\r\n\tcolor: $color_1;\r\n\tletter-spacing: -0.1px;\r\n\tmargin: 0;\r\n}\r\n.iconsax {\r\n\tfont-size: 24px;\r\n\tcolor: $color_2;\r\n\tmargin-right: 14px;\r\n}\r\n.arrow {\r\n\tfont-size: 16px;\r\n\tflex-shrink: 0;\r\n\tmargin-left: auto;\r\n}\r\nul {\r\n\tlist-style-type: none;\r\n\tpadding: 0;\r\n\t.aside-item {\r\n\t\tdisplay: flex;\r\n\t\twidth: 250px;\r\n\t\talign-items: center;\r\n\t\tmargin-top: 18px;\r\n\t\tpadding: 11px 8px 11px 11px;\r\n\t\tletter-spacing: -0.14px;\r\n\t}\r\n}\r\nli.active {\r\n\tbackground-color: $background-color_1;\r\n\tborder-radius: 8px;\r\n\tcolor: $color_3;\r\n\ttransition: background-color 0.8s ease;\r\n}\r\n.aside-item.active {\r\n\ti {\r\n\t\tcolor: $color_3;\r\n\t\ttransition: color 0.4s ease;\r\n\t}\r\n}\r\n#menu_block {\r\n\tmargin-left: 28px;\r\n}\r\n.user_account {\r\n\tposition: absolute;\r\n\tbottom: 0;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tpadding: 0px 0px 28px 28px;\r\n\timg {\r\n\t\tborder-radius: 42px;\r\n\t\tmargin-right: 12px;\r\n\t}\r\n}\r\n#account_name {\r\n\tletter-spacing: 0.14px;\r\n}\r\n.user_position {\r\n\tletter-spacing: 0.12px;\r\n\tcolor: $color_4;\r\n\tpadding: 0;\r\n\tfont-weight: 400;\r\n}\r\n#wrapper {\r\n\twidth: 70%;\r\n\tbackground-color: $background-color_2;\r\n\tpadding: 0px 95px 300px 71px;\r\n}\r\n.iconsax.hamburger{\r\n  display: none;\r\n}\r\n#product_container {\r\n\tborder-radius: 30px;\r\n\tbackground-color: $background-color_3;\r\n\tmargin-top: 20px;\r\n}\r\n.heading_container {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tpadding: 30px 53px 0px 38px;\r\n}\r\n.product_heading {\r\n\tfont-size: 22px;\r\n\tfont-weight: 600;\r\n\tletter-spacing: -0.22px;\r\n}\r\n#greetings {\r\n\tfont-size: 24px;\r\n\tmargin-top: 41px;\r\n}\r\n.toggle_active {\r\n\tcolor: $color_5;\r\n\tmargin-top: 7px;\r\n\tletter-spacing: -0.14px;\r\n\tfont-weight: 400;\r\n\tfont-size: 14px;\r\n}\r\n.search-container {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tbackground-color: $background-color_4;\r\n\tborder-radius: 10px;\r\n\tmargin-left: auto;\r\n\tpadding: 8px 6px;\r\n\twidth: 216px;\r\n}\r\n.search-icon {\r\n\tcolor: $color_6;\r\n}\r\n.search-input {\r\n\tborder: none;\r\n\toutline: none;\r\n\tbackground-color: $background-color_4;\r\n\twidth: 100%;\r\n\tfont-size: 14px;\r\n\t&::placeholder {\r\n\t\tcolor: $color_7;\r\n\t}\r\n}\r\n.custom-table {\r\n\tborder-collapse: collapse;\r\n\twidth: calc(100% - 80px);\r\n\tmargin: 20px 40px;\r\n\tth {\r\n\t\tborder-bottom: 1px solid #eee;\r\n\t\tpadding: 14px 0px;\r\n\t\ttext-align: left;\r\n\t\tcolor: $color_7;\r\n\t}\r\n\ttd {\r\n\t\tborder-bottom: 1px solid #eee;\r\n\t\tpadding: 14px 0px;\r\n\t\ttext-align: left;\r\n\t}\r\n\ttr {\r\n\t\tmargin: 0 40px;\r\n\t\tcolor: $color_8;\r\n\t}\r\n\ta {\r\n\t\ttext-decoration: none;\r\n\t\tcolor: $color_9;\r\n\t}\r\n}\r\n.email-column {\r\n\twidth: 20%;\r\n}\r\n.company-column {\r\n\twidth: 20%;\r\n}\r\nth {\r\n\t&:last-of-type {\r\n\t\ttext-align: center;\r\n\t}\r\n}\r\n.status-info {\r\n\tcolor: $color_10;\r\n\ttext-align: center;\r\n\tletter-spacing: -0.14px;\r\n\tborder-radius: 4px;\r\n\tpadding: 4px 0px;\r\n}\r\n.status-active {\r\n\tcolor: $color_11;\r\n\tborder: 1px solid #00B087;\r\n\tbackground: rgba(22, 192, 152, 0.38);\r\n}\r\n.status-inactive {\r\n\tcolor: $color_12;\r\n\tborder: 1px solid #DF0404;\r\n\tbackground: #FFC5C5;\r\n}\r\n.info-nav {\r\n\tdisplay: flex;\r\n\tpadding: 20px 40px 40px 40px;\r\n\talign-items: center;\r\n}\r\n#data-info {\r\n\tfont-size: 14px;\r\n\tcolor: $color_7;\r\n\tletter-spacing: -0.14px;\r\n}\r\n#navigation {\r\n\tmargin-left: auto;\r\n}\r\n.data-menu {\r\n\tdisplay: flex;\r\n}\r\n.data-menu-item {\r\n\tbackground-color: $background-color_5;\r\n\tborder-radius: 4px;\r\n\tcolor: $color_13;\r\n\tpadding: 5px 2px 4px 2px;\r\n\twidth: 24px;\r\n\tfont-size: 12px;\r\n\ttext-align: center;\r\n\tmargin-left: 10px;\r\n}\r\n.data-menu-item.active {\r\n\tborder-radius: 4px;\r\n}\r\n@media only screen and (min-width: 992px) and (max-width: 1200px) {\r\n\taside {\r\n\t\twidth: 25%;\r\n\t}\r\n\tul {\r\n\t\t.aside-item {\r\n\t\t\twidth: 180px;\r\n\t\t}\r\n\t}\r\n\t#wrapper {\r\n\t\tpadding: 0px 28px 100px 28px;\r\n\t}\r\n\ttable {\r\n\t\t* {\r\n\t\t\tfont-size: 11px;\r\n\t\t}\r\n\t}\r\n\t#data-info {\r\n\t\tfont-size: 11px;\r\n\t}\r\n}\r\n@media only screen and (min-width: 768px) and (max-width: 991px) {\r\n\taside {\r\n\t\twidth: 24%;\r\n\t}\r\n\t#main_logo {\r\n\t\tmargin: 36px 16px 36px 16px;\r\n\t\timg {\r\n\t\t\twidth: 25px;\r\n\t\t\theight: 25px;\r\n\t\t}\r\n\t}\r\n\t#menu_block {\r\n\t\tmargin-left: 16px;\r\n\t}\r\n\th1 {\r\n\t\tfont-size: 20px;\r\n\t}\r\n\tul {\r\n\t\t.aside-item {\r\n\t\t\twidth: 140px;\r\n\t\t\tmargin-top: 12px;\r\n\t\t\tfont-size: 12px;\r\n\t\t}\r\n\t}\r\n\t.iconsax {\r\n\t\tfont-size: 20px;\r\n\t\tmargin-right: 6px;\r\n\t}\r\n\t.arrow {\r\n\t\tfont-size: 14px;\r\n\t}\r\n\t.user_account {\r\n\t\tpadding: 0px 0px 16px 16px;\r\n\t}\r\n\t#wrapper {\r\n\t\tpadding: 0px 16px 50px 16px;\r\n\t}\r\n\t.heading_container {\r\n\t\tpadding: 24px 16px 0px 16px;\r\n\t}\r\n\t#greetings {\r\n\t\tfont-size: 20px;\r\n\t}\r\n\t.product_heading {\r\n\t\tfont-size: 20px;\r\n\t}\r\n\t.search-container {\r\n\t\twidth: 180px;\r\n\t}\r\n\t.custom-table {\r\n\t\tmargin: 20px 20px;\r\n\t\twidth: calc(100% - 45px);\r\n\t}\r\n\ttable {\r\n\t\t* {\r\n\t\t\tfont-size: 10px;\r\n\t\t}\r\n\t}\r\n\t#data-info {\r\n\t\tfont-size: 10px;\r\n\t}\r\n\t.info-nav {\r\n\t\tpadding: 0px 16px 32px 16px;\r\n\t}\r\n\t.data-menu-item {\r\n\t\twidth: 18px;\r\n\t\tfont-size: 10px;\r\n\t}\r\n\t.status-info {\r\n\t\tpadding: 4px 4px;\r\n\t}\r\n}\r\n@media only screen and (max-width: 767px) {\r\n\tbody {\r\n\t\toverflow-x: hidden;\r\n\t}\r\n\taside {\r\n\t\tposition: fixed;\r\n\t\ttop: 0;\r\n\t\tleft: -100%;\r\n\t\theight: 100%;\r\n\t\ttransition: left 0.5s ease;\r\n\t}\r\n\tul {\r\n\t\t.aside-item {\r\n\t\t\twidth: 100%;\r\n\t\t}\r\n\t}\r\n\t#wrapper {\r\n\t\twidth: 120%;\r\n\t\tpadding: 0px 16px 50px 16px;\r\n\t\tmargin-left: 0;\r\n\t\ttransition: margin-left 0.5s ease;\r\n\t}\r\n\t.header {\r\n\t\tpadding: 10px;\r\n\t\tdisplay: flex;\r\n\t\talign-items: center;\r\n\t\talign-items: baseline;\r\n\t}\r\n\th3 {\r\n\t\tdisplay: inline-block;\r\n\t}\r\n\t.heading_container {\r\n\t\tpadding: 24px 16px 0px 16px;\r\n\t}\r\n\t.search-container {\r\n\t\twidth: 160px;\r\n\t}\r\n\t.custom-table {\r\n\t\twidth: calc(100% - 20px);\r\n\t\tmargin: 30px 10px;\r\n\t}\r\n\ttable {\r\n\t\t* {\r\n\t\t\tfont-size: 10px;\r\n\t\t\tpadding-right: 4px;\r\n\t\t}\r\n\t}\r\n\t#data-info {\r\n\t\tfont-size: 10px;\r\n\t\tpadding-right: 4px;\r\n\t}\r\n\t.info-nav {\r\n\t\tpadding: 0px 16px 32px 16px;\r\n\t\tflex-direction: column;\r\n\t\talign-items: center;\r\n\t}\r\n\t#navigation {\r\n\t\tmargin-left: 0px;\r\n\t\tmargin-top: 10px;\r\n\t}\r\n\t#product_container {\r\n\t\tpadding: 10px;\r\n\t}\r\n\t.data-menu-item {\r\n\t\twidth: 15px;\r\n\t\tfont-size: 10px;\r\n\t}\r\n\t.status-info {\r\n\t\tpadding: 2px 4px;\r\n\t}\r\n\ti.hamburger {\r\n\t\ttransition: all 0.5s ease-in-out;\r\n\t}\r\n\t.iconsax.hamburger {\r\n\t\ttransition: all 1s ease-in-out;\r\n    display: inline-block;\r\n\t}\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/main.scss */ "./src/styles/main.scss");



document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const aside = document.querySelector('aside');
    const wrapper = document.getElementById('wrapper');

    hamburger.addEventListener('click', function () {
        const currentIcon = hamburger.getAttribute('icon-name');
        const newIcon = (currentIcon === 'hamburger-menu') ? 'arrow-left-thick-1' : 'hamburger-menu';
        hamburger.setAttribute('icon-name', newIcon);

        // Toggle visibility of the aside
        if (aside.style.left === '0px') {
            aside.style.left = '-250px';
            wrapper.style.marginLeft = '0';
        } else {
            aside.style.left = '0';
            wrapper.style.marginLeft = '250px';
        }
    });
    

    const asideContainer = document.querySelector('aside');
    const listItems = asideContainer.querySelectorAll('.aside-item');
    let accountName = document.getElementById('account_name').textContent;

    listItems.forEach((item) => {
        item.addEventListener('click', (e) => {
            listItems.forEach((otherItem) => {
                otherItem.classList.remove('active');
            });
            item.classList.add('active');
            updateShowingInfo();
        });
    });

    document.getElementById('greetings').innerHTML = `Hello ${accountName} &#x1f44b;,`;

    fetch('/src/assets/DB.json')
        .then(response => response.json())
        .then(data => {
            const peopleData = data.people;
            createTable(peopleData);
            createNavigationButtons(peopleData);
            updateShowingInfo();
        })
        .catch(error => console.error('Error fetching data:', error));
});

let totalEntities;
let currentPage = 1;
const itemsPerPage = 8;

function createNavigationButtons(data) {
    const navigationContainer = document.getElementById('navigation');
    const totalPages = Math.ceil(data.length / itemsPerPage);
    const maxButtonsToShow = 4;

    const navList = document.createElement('ul');
    navList.classList.add('data-menu'); // Add the class for styling

    // Add previous page arrow
    const prevArrow = document.createElement('li');
    prevArrow.innerHTML = '&lt;';
    prevArrow.classList.add('data-menu-item'); // Add the class for styling
    prevArrow.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            updateTable(data);
            updateShowingInfo();
        }
    });
    navList.appendChild(prevArrow);

    // Add buttons for the first pages
    for (let i = 1; i <= Math.min(totalPages, maxButtonsToShow); i++) {
        const listItem = document.createElement('li');
        listItem.textContent = i;
        listItem.classList.add('data-menu-item'); // Add the class for styling

        if (i === currentPage) {
            listItem.classList.add('active');
        }

        listItem.addEventListener('click', () => {
            currentPage = i;
            updateTable(data);
            updateShowingInfo();
            updateActiveClass(); // Update active class after clicking
        });

        navList.appendChild(listItem);
    }

    // Add dots if there are more pages
    if (totalPages > maxButtonsToShow) {
        const dots = document.createElement('li');
        dots.textContent = '...';
        dots.style.marginLeft = '10px';
        dots.style.paddingTop = '4px';
        navList.appendChild(dots);
    }

    // Add button for the last page
    const lastPageButton = document.createElement('li');
    lastPageButton.textContent = totalPages;
    lastPageButton.classList.add('data-menu-item'); // Add the class for styling
    lastPageButton.addEventListener('click', () => {
        currentPage = totalPages;
        updateTable(data);
        updateShowingInfo();
        updateActiveClass(); // Update active class after clicking
    });
    navList.appendChild(lastPageButton);

    // Add next page arrow
    const nextArrow = document.createElement('li');
    nextArrow.innerHTML = '&gt;';
    nextArrow.classList.add('data-menu-item'); // Add the class for styling
    nextArrow.addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            updateTable(data);
            updateShowingInfo();
            updateActiveClass(); // Update active class after clicking
        }
    });
    navList.appendChild(nextArrow);

    navigationContainer.appendChild(navList);

    // Function to update the 'active' class
    function updateActiveClass() {
        const items = navList.querySelectorAll('.data-menu-item');
        items.forEach(item => {
            item.classList.remove('active');
            if (parseInt(item.textContent) === currentPage) {
                item.classList.add('active');
            }
        });
    }
}

function createTable(data) {
    const tableContainer = document.getElementById('table-container');
    const table = document.createElement('table');
    const headerRow = table.insertRow(0);

    if (Array.isArray(data) && data.length > 0) {
        for (const key in data[0]) {
            const th = document.createElement('th');
            th.textContent = key.charAt(0).toUpperCase() + key.slice(1);
            headerRow.appendChild(th);
        }

        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;

        for (let i = startIndex; i < Math.min(endIndex, data.length); i++) {
            const row = table.insertRow();
            for (const key in data[i]) {
                const cell = row.insertCell();
                if (key === 'email') {
                    const emailLink = document.createElement('a');
                    emailLink.href = 'mailto:' + data[i][key];
                    emailLink.textContent = data[i][key];
                    cell.appendChild(emailLink);
                    cell.classList.add('email-column');
                } else if (key === 'phone') {
                    const telLink = document.createElement('a');
                    telLink.href = 'tel:' + data[i][key];
                    telLink.textContent = data[i][key];
                    cell.appendChild(telLink);
                } else if (key === 'status') {
                    const statusDiv = document.createElement('div');
                    statusDiv.textContent = data[i][key];
                    statusDiv.className = 'status-info status-' + data[i][key].toLowerCase();
                    statusDiv.classList.add('status-header');
                    cell.appendChild(statusDiv);
                } else if (key === 'company') {
                    cell.textContent = data[i][key];
                    cell.classList.add('company-column');
                } else {
                    cell.textContent = data[i][key];
                }
            }
        }

        table.classList.add('custom-table');
        tableContainer.appendChild(table);

        totalEntities = data.length;
    } else {
        console.error('Invalid data format. Expected an array with at least one element.');
    }
}

function updateTable(data) {
    const tableContainer = document.getElementById('table-container');
    // Clear previous results
    tableContainer.innerHTML = '';
    createTable(data);
}

function updateShowingInfo() {
    const startIndex = (currentPage - 1) * itemsPerPage + 1;
    const endIndex = Math.min(currentPage * itemsPerPage, totalEntities);

    const showingInfoParagraph = document.getElementById('data-info');
   
    if (showingInfoParagraph) {
        showingInfoParagraph.textContent = `Showing data from ${startIndex} to ${endIndex} of ${totalEntities} entities`;
    } else {
        console.error('Paragraph not found in HTML.');
    }
}

// Add event listener for the search input
const searchInput = document.querySelector('.search-input');
searchInput.addEventListener('input', handleSearch);

function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase();
    fetch('/src/assets/DB.json')
        .then(response => response.json())
        .then(data => {
            const filteredData = data.people.filter(person => {
                // Exclude 'status' property from search
                const propertiesToSearch = Object.keys(person).filter(key => key !== 'status');
                return propertiesToSearch.some(property => person[property].toLowerCase().includes(searchTerm));
            });
            updateTable(filteredData);
            updateShowingInfo();
        })
        .catch(error => console.error('Error fetching data:', error));
}

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map