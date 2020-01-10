import './header.sass';

export default () => {
  const $emailLink = $('.header__email');
  const $emailIcon = $('.header__email i');
  const $phoneLink = $('.header__phone');
  const $phoneIcon = $('.header__phone i');
  const $emailText = $('.header__descr-email');
  const $phoneText = $('.header__descr-phone');
  const $emailElem = $('#email');
  const $phoneElem = $('#phone');

  function overAnimation(elem, link) {
    elem.mouseover(() => {
      link.addClass('header__on');
      link.removeClass('header__off');
    });
  }

  function outAnimation(elem, link) {
    elem.mouseout(() => {
      link.addClass('header__off');
      link.removeClass('header__on');
    });
  }

  function showDescription(elem, text, bg) {
    elem.mouseover(() => {
     text.addClass('header__show');
     bg.addClass('header__add-bg');
     text.removeClass('header__fade');
     bg.removeClass('header__hide-bg');
     elem.addClass('header__remove');
     elem.removeClass('header__add');
    });
  }

  function fadeDescription(elem, text, bg) {
    elem.mouseout(() => {
     text.addClass('header__fade');
     bg.addClass('header__hide-bg');
     text.removeClass('header__show');
     bg.removeClass('header__add-bg');
      elem.addClass('header__add');
      elem.removeClass('header__remove');
    });
  }

  // animate icons
  overAnimation($emailLink ,$emailIcon);
  outAnimation($emailLink ,$emailIcon);
  overAnimation($phoneLink, $phoneIcon);
  outAnimation($phoneLink, $phoneIcon);
  // end

  // animate text and bg
  showDescription($emailLink, $emailText, $emailElem);
  fadeDescription($emailLink, $emailText, $emailElem);
  showDescription($phoneLink, $phoneText, $phoneElem);
  fadeDescription($phoneLink, $phoneText, $phoneElem);
};
