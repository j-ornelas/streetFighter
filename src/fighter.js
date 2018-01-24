var Fighter = function(top, left, timeBetweenSteps) {
  this.$node = $('<span></span>');
  this.top = top
  this.left = left
  this.step();
  // this.setPosition(top, left)
}

Fighter.prototype.step = function() {
    // the basic Fighter doesn't do anything interesting at all on each step,
    // it just schedules the next step
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Fighter.prototype.setPosition = function(top, left) {
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    //
  this.top = top;
  this.left = left;
  var styleSettings = {
      top: top,
      left: left
  };
  this.$node.css(styleSettings);
};

var getRandomInt = function(max) {
  return Math.floor(Math.random() * max);
};

  // now that we have defined the Fighter object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body

