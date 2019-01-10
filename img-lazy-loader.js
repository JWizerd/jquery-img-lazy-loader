/**
 * EXAMPLES: 
 * 
 * Shopify: <img src="{{ 'placeholder.jpg' | img_url }}" class="lazy-img" data-src="{{ 'actual-image' | img_url }}"/>
 *
 * Wordpress: <img src="<?= get_template_directory() . '<path to placeholder image>' ?>" class="lazy-img" data-src="<?= $actual_img ?>"/>
 *
 * CSS Background: <div class="lazy-bg" data-src="<?= get_template_directory() . '<path to placeholder image>' ?>"></div>
 */

var debounce = function(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

(function($){

  var lazyImages = function () {
    $first = $('.lazy-img').first();

    if ($first.offset().top <= 0) {
      $first.attr('src', $first.data('src'));
      $first.removeClass('lazy-img');
    }

    debounce(
      $(window).on('scroll', function() {
        $('img.lazy-img').each(function(){
          if ($(this).offset().top < ($(window).scrollTop() + $(window).height())) {
            $(this).attr('src', $(this).data('src'));
            $(this).removeClass('lazy-img');
          }
        });
      }), 
      400, 
      false
    )
  }

  var lazyBackgrounds = function () {
    $first = $('.lazy-bg').first();
    $first.css('background-image', 'url(' + $first.data('src') + ')');
    $first.removeClass('lazy-bg');

    debounce(
      $(window).on('scroll', function() {
        $('.lazy-bg').each(function(){
          if ($(this).offset().top < ($(window).scrollTop() + $(window).height())) {
            $(this).css('background-image', 'url(' + $(this).data('src') + ')');
            $(this).removeClass('lazy-bg');
          }
        });
      }), 
      400, 
      false
    )
  }

  document.addEventListener("DOMContentLoaded", function() {
    lazyImages();
    lazyBackgrounds();
  });

})(jQuery)