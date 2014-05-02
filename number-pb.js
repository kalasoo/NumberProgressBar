(function($) {
  var NumberProgressBar = function(element, options) {
    var settings = $.extend ({
      duration: 10000,
      percentage: 0,
      shownQuery: '.number-pb-shown',
      numQuery: '.number-pb-num'
    }, options || {});

    this.duration = settings.duration;
    this.last_percentage = -1;
    this.percentage = (settings.percentage >= 0 && settings.percentage <= 100) ? settings.percentage : 0;
    this.$element = $(element);
    this.width = this.$element.width();
    this.$shownBar = this.$element.find(settings.shownQuery);
    this.$num = this.$element.find(settings.numQuery);

    this.reach(this.percentage);
  }

  NumberProgressBar.prototype.reach = function(percentage) {
    if (this.last_percentage < 0) {
      this.last_percentage = 0;
    } else {
      this.last_percentage = this.percentage;  
    }
    
    if (percentage < 0) {
      this.percentage = 0;
    } else if (percentage > 100) {
      this.percentage = 100;
    } else {
      this.percentage = percentage;
    }
    console.log('reach: ', this.last_percentage, this.percentage, this.calDuration());
    this.moveShown();
    this.moveNum();
  }

  NumberProgressBar.prototype.calDuration = function() {
    return this.duration * Math.abs(this.percentage - this.last_percentage) / 100.0;
  }

  NumberProgressBar.prototype.moveShown = function() {
    console.log('moveShown: ', this.percentage);
    this.$shownBar.velocity({
      width: this.percentage + '%'
    }, {
      duration: this.calDuration()
    })
  }

  NumberProgressBar.prototype.moveNum = function() {
    console.log('moveNum: ', this.percentage);
    var self = this;
    var left = this.width * this.percentage / 100.0;
    var numWidth = this.$num.width();
    if (numWidth + left > this.width) {
      var percentage = (this.width - numWidth) / this.width * 100.0;
    } else {
      var percentage = this.percentage;
    }

    this.$num.velocity({
      left: percentage + '%'
    }, {
      duration: this.calDuration()
    })

    // number
    $({num: parseInt(this.$num.text())}).animate({
      num: this.percentage
    }, {
      queue: true,
      duration: self.calDuration(),
      step: function() {
        self.$num.text(Math.ceil(this.num) + '%');
      },
      complete: function() {
        self.$num.text(self.percentage + '%');
      }
    })
  }

  $.fn.NumberProgressBar = function(options) {
    return this.each(function () {
      var element = $(this);
      if (element.data('number-pb')) return;
      element.data('number-pb', new NumberProgressBar(this, options));
    })
  }

  $.fn.reach = function(percentage) {
    return this.each(function() {
      var element = $(this);
      var progressbar = element.data('number-pb');
      if (!progressbar) return;
      if (percentage < 0 || percentage > 100 || percentage == progressbar.percentage) return;
      progressbar.reach(percentage);
    })
  }

})(jQuery);