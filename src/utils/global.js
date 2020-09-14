const $ = document.querySelector.bind(document);

const $$ = document.querySelectorAll.bind(document);

const html = {
  sectionStart: $(".section-start"),
  sectionLoading: $('.loading-effect'),
  wrapperLoading: $('.wrapper-loading'),
  
  btnStart: $(".btn-start"),
  closeStart: $(".close-start"),
  wrapperStart: $(".wrapper-start"),
  sectionStart: $(".section-start"),
  sectionTabs: $(".section-tabs"),
  sectionLoading: $('.loading-effect'),
  fields: [...$$(".input-start")],
  inputStart: $('.input-start'),
  nameHeader: $('.name-header'),
  body: $("html"),
  footer: $("footer"),

  divTheme: ("#checkbox-theme"),
  checkbox: $("input[name=theme]"),

  links: [...$('.tab-links').children],
  contents: [...$('.tab-content').children],
  openTab: $('[data-open]'),
  javascriptTab: $('#javascript-tab'),
  testngTab: $('#testng-tab'),
  animatedTab: $('#animated-tab'),
}
