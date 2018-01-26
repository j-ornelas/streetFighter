var BlinkyFighter = function(top, left, timeBetweenSteps) {
  Fighter.call(this, top, left, timeBetweenSteps);
  this.$node.attr('class', 'blinkyFighter')

}
BlinkyFighter.prototype = Object.create(Fighter.prototype)
BlinkyFighter.prototype.constructor = BlinkyFighter;

BlinkyFighter.prototype.step = function() {
    // call the old version of step at the beginning of any call to this new version of step
    Fighter.prototype.step.call(this)
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    this.$node.toggle();
  };