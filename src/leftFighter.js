var LeftFighter = function(top, left, timeBetweenSteps) {
  Fighter.call(this, top, left, timeBetweenSteps);
  this.$imageSource = $('<img></img>');
  this.$imageSource.attr('src', 'assets/seanLeft.gif')
  this.$node.attr('class', 'fighter')
  this.$imageSource.appendTo(this.$node)
  
}
LeftFighter.prototype = Object.create(Fighter.prototype)
LeftFighter.prototype.constructor = LeftFighter;

LeftFighter.prototype.step = function() {
    // call the old version of step at the beginning of any call to this new version of step
    Fighter.prototype.step.call(this)
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    // this.$node.toggle();
  };