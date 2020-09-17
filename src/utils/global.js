const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const html = {
  sectionStart: $(".section-start"),
  wrapperStart: $(".wrapper-start"),
  sectionTabs: $(".section-tabs"),
  sectionLoading: $('.loading-effect'),
  wrapperLoading: $('.wrapper-loading'),
  
  btnStart: $(".btn-start"),
  closeStart: $(".close-start"),
  fields: [...$$(".input-start")],
  inputStart: $('.input-start'),
  nameHeader: $('.name-header'),
  body: $("html"),
  footer: $("footer"),

  divTheme: ("#checkbox-theme"),
  checkbox: $("input[name=theme]"),
}
