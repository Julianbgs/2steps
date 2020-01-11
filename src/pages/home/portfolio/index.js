import './index.sass';
import Swiper from 'swiper/js/swiper.min';
import 'swiper/css/swiper.min.css';

export default () => {
  const $elemSlide = $('.portfolio__img');
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

  // zoom animation
  $elemSlide.each((index, elem) => {
    overAnimationZoom($(elem));
    outAnimationZoom($(elem));
  });
  // end
}
