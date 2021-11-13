export function Carousel(containerID) {
  /*
   @description: A pure javascript carousel.
   @author: Jeremy England, http://codeartery.com/
   @mini: function Carousel(t){this.container=document.getElementById(t)||document.body,this.slides=this.container.querySelectorAll(".carousel"),this.last=this.slides.length-1,this.slide=0,this.next=function(){this.slide===this.last?this.slide=0:this.slide+=1,this.goto(this.slide)},this.prev=function(){0===this.slide?this.slide=this.last:this.slide-=1,this.goto(this.slide)},this.play=function(t,s){if(s?this.prev():this.next(),"number"==typeof t&&t%1==0){var i=this;this.run=setTimeout(function(){i.play(t,s)},t)}},this.stop=function(){clearTimeout(this.run)},this.goto=function(t){if(t>=0&&t<=this.last){this.stop();for(var s=0;s<=this.last;s++)this.slides[s].style.display=s===t?"inline-block":"none";return!0}return console.log("ERROR: Carousel.GoTo("+t+"): Index out of range 0.."+this.last),!1},this.goto(0)}
  */
  this.container = document.getElementById(containerID) || document.body;
  this.slides = this.container.querySelectorAll('.main-slide-wrapper');
  this.last = this.slides.length - 1;
  this.slide = 0;

  this.next = function () {
    this.slide === this.last ? (this.slide = 0) : (this.slide += 1);
    this.goto(this.slide);
  };

  this.prev = function () {
    this.slide === 0 ? (this.slide = this.last) : (this.slide -= 1);
    this.goto(this.slide);
  };

  this.play = function (interval, reverse) {
    if (reverse) {
      this.prev();
    } else {
      this.next();
    }
    if (typeof interval === 'number' && interval % 1 === 0) {
      var parent = this;
      this.run = setTimeout(function () {
        parent.play(interval, reverse);
      }, interval);
    }
  };

  this.stop = function () {
    clearTimeout(this.run);
  };

  this.goto = function (index) {
    if (index >= 0 && index <= this.last) {
      this.stop();
      for (var s = 0; s <= this.last; s++) {
        if (s === index) {
          this.slides[s].style.display = 'inline-block';
        } else {
          this.slides[s].style.display = 'none';
        }
      }
      return true;
    } else {
      console.log(
        'ERROR: Carousel.GoTo(' +
          index +
          '): Index out of range 0..' +
          this.last
      );
      return false;
    }
  };

  this.goto(0);
}
