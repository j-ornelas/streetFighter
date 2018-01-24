var RightFighter = function(top, left, timeBetweenSteps) {
  Fighter.call(this, top, left, timeBetweenSteps);


  this.setPosition(
    $(".bg").height() - 135, 
    (($(".bg").width() / 2 ) * Math.random()  * 2) )

  this.$imageSource = $('<img></img>');
  this.$imageSource.attr('src', 'assets/sakura.gif')
  this.$imageSource.attr('height', 100)
  this.$node.attr('class', 'fighter')
  this.$imageSource.appendTo(this.$node)

}
RightFighter.prototype = Object.create(Fighter.prototype)
RightFighter.prototype.constructor = RightFighter;

RightFighter.prototype.step = function() {
    // call the old version of step at the beginning of any call to this new version of step
    Fighter.prototype.step.call(this)
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    // this.$node.toggle();
  };