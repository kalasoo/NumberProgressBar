(function($) {
  var NumberProgressBar = function(element, options) {
    var settings = $.extend ({
      duration: 10000,
      min: 0,
      max: 100,
      current: 0,
      shownQuery: '.number-pb-shown',
      numQuery: '.number-pb-num'
    }, options || {});

    this.duration = settings.duration;
    if (settings.min < settings.max) {
      this.min = settings.min;
      this.max = settings.max;
      this.current = (settings.current >= this.min && settings.current <= this.max) ? settings.current : this.min;
    } else {
      this.min = 0;
      this.max = 100;
      this.current = 0;
    }
    this.interval = this.max - this.min;
    this.last = null;
    this.$element = $(element);
    this.$shownBar = this.$element.find(settings.shownQuery);
    this.$num = this.$element.find(settings.numQuery);

    this.reach(this.current);
  }

  NumberProgressBar.prototype.calDestination = function(dest) {
    return (dest < this.min) ? this.min : ( (dest > this.max) ? this.max : dest )
  }

  NumberProgressBar.prototype.udpateLast = function(dest) {
    if (this.last == null) {
      this.last = this.min;
    } else {
      this.last = this.current;  
    }
  }

  NumberProgressBar.prototype.calDuration = function() {
    return this.duration * Math.abs(this.current - this.last) / this.interval;
  }

  NumberProgressBar.prototype.shuffle = function() {
    var dest = Math.round(Math.random() * this.interval) + this.min;
    this.reach(dest);
  }

  NumberProgressBar.prototype.reach = function(dest, duration) {
    this.udpateLast();
    this.current = this.calDestination(dest);
    this.moveShown(duration);
    this.moveNum(duration);
  }

  NumberProgressBar.prototype.moveShown = function(duration) {
    this.$shownBar.velocity({
      width: ((this.current - this.min) / this.interval * 100) + '%'
    }, {
      duration: duration || this.calDuration()
    })
  }

  NumberProgressBar.prototype.moveNum = function(duration) {
    var self = this;
    var duration = duration || this.calDuration();
    var numWidth = this.$num.width();
    var width = this.$element.width();
    if (numWidth + width * (this.current / this.interval) > width) {
      var percentage = (width - numWidth) / width * 100.0;
    } else {
      var percentage = ((this.current - this.min) / this.interval) * 100;
    }

    this.$num.velocity({
      left: percentage + '%'
    }, {
      duration: duration
    });

    // number
    $({num: parseInt(this.$num.text())}).animate({
      num: this.current
    }, {
      queue: true,
      duration: duration,
      step: function() {
        self.$num.text(Math.ceil(this.num));
      },
      complete: function() {
        self.$num.text(self.current);
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

  $.fn.reach = function(dest, duration) {
    return this.each(function() {
      var element = $(this);
      var progressbar = element.data('number-pb');
      if (!progressbar) return;
      if (typeof dest === "undefined") {
        progressbar.shuffle();
      } else {
        if (dest < progressbar.min || dest > progressbar.max || dest == progressbar.current) return;
        progressbar.reach(dest, duration);
      }
    })
  }

})(jQuery);