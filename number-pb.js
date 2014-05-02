(function($) {
  var NumberProgressBar = function(element, options) {
    var $element = $(element);
    var settings = $.extend ({
      style: 'velocity',
      percentage: 0,
      shownQuery: '.number-pb-shown',
      numQuery: '.number-pb-num'
    }, options || {});

    var percentage = (settings.percentage >= 0 && percentage <= 100) ? settings.percentage : 0;
    var $shownBar = $element.find(settings.shownQuery);
    var $num = $element.find(settings.numQuery);

    // public
    this.reach = function(percentage) {
      console.log('reach: ', percentage);
      moveShown();
      moveNum();
      this.percentage = percentage;
    }

    // private
    var moveNum = function() {
      console.log('moveNum: ', percentage);
      switch(settings.style) {
        case 'velocity':
          break;
        case 'css':
          break;
        default:

      }
    }

    var moveShown = function() {
      console.log('moveShown: ', percentage);
      switch(settings.style) {
        case 'velocity':
          break;
        case 'css':
          break;
        default:
          
      }
    }
  }

  $.fn.NumberProgressBar = function(options) {
    return this.each(function () {
      var element = $(this);
      if (element.data('number-pb')) return;
      var numberProgressBar = new NumberProgressBar(this, options);
      element.data('number-pb', numberProgressBar);
    })
  }

})(jQuery);