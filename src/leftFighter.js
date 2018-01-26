var LeftFighter = function(top, left, timeBetweenSteps) {
  Fighter.call(this, top, left, timeBetweenSteps);

  this.fighterList = [{
    src: 'assets/kenLeft.gif',
    height: 140
  }, {
    src: 'assets/chunliLeft.gif',
    height: 175
  }, {
    src: 'assets/elenaLeft.gif',
    height: 200
  }, {
    src: 'assets/ibukiLeft.gif',
    height: 200
  }, {
    src: 'assets/makotoLeft.gif',
    height: 200
  }, {
    src: 'assets/ryuLeft.gif',
    height: 200
  }, {
    src: 'assets/seanLeft.gif',
    height: 160
  }];
  var index = getRandomInt(this.fighterList.length);

  this.setPosition(
    $(".bg").height() - 135, 
    ($(".bg").width() * Math.random() / 2 * 1.2) - 75)
  this.$imageSource = $('<img></img>');
  this.$imageSource.src = this.fighterList[index];
  this.$imageSource.attr('src', this.fighterList[index].src)
  this.$node.attr('class', 'fighter')
  this.$node.attr('href', '#')
  this.$node.on('click', function(fighter){
    $('img').attr({src: 'assets/sakura.gif',
                   height: 100})
  })
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
//this doesn't work vvv
LeftFighter.prototype.singleLine = function() {
  var tempTop = this.top
  var tempLeft = this.left
  this.$node.setPosition(0,0)
}
