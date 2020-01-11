import './index.sass';
import Swiper from 'swiper/js/swiper.min';
import 'swiper/css/swiper.min.css';
import 'magnific-popup/dist/jquery.magnific-popup.min';
import 'magnific-popup/dist/magnific-popup.css';

export default () => {
  const $elemSlide = $('.portfolio__img');
  const $nextArr = $('.portfolio__next');
  const $prevArr = $('.portfolio__prev');
  const $nextBg = $('.portfolio__next-bg');
  const $prevBg = $('.portfolio__prev-bg ');
  const portfolioSwiper = new Swiper('.portfolio__slider', {
      slidesPerView: 'auto',
      spaceBetween: 20,
      navigation: {
        nextEl: '.portfolio__next',
        prevEl: '.portfolio__prev',
      },
    });

  function overAnimationZoom(elem) {
    elem.mouseover(() => {
      const $link = elem.find('.portfolio__zoom');
      $link.addClass('portfolio__show-zoom');
      $link.removeClass('portfolio__fade-zoom');
    });
  }

  function outAnimationZoom(elem) {
    elem.mouseout(() => {
      const $link = elem.find('.portfolio__zoom');
      $link.addClass('portfolio__fade-zoom');
      $link.removeClass('portfolio__show-zoom');
    });
  }

  function overAnimationBg(elem) {
    elem.addClass('portfolio__show-bg');
    elem.removeClass('portfolio__hide-bg');
  }

  function outAnimationBg(elem) {
    elem.addClass('portfolio__hide-bg');
    elem.removeClass('portfolio__show-bg');
  }

  function openPopup(elem) {
    elem.magnificPopup({
      type: 'image'
    });
  }

  // zoom animation
  $elemSlide.each((index, elem) => {
    overAnimationZoom($(elem));
    outAnimationZoom($(elem));
    openPopup($(elem));
  });
  // end

  // add bg on click to arrows
    $nextArr.on('click', function () {
      overAnimationBg($nextBg);
      setTimeout(() => {
        outAnimationBg($nextBg);
      }, 1500)
    });

  $prevArr.on('click', function () {
      overAnimationBg($prevBg);
      setTimeout(() => {
        outAnimationBg($prevBg);
      }, 1500)
    });
  // end
}
