var lineUp = function(){
  for (var i = 0; i < window.fighters.length; i++) {
  	var tempTop = window.fighters[i].top
  	var tempLeft = window.fighters[i].left
  	window.fighters[i].setPosition(tempTop,0)
  }
}