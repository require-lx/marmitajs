var menu = require('./menu.js')
  , inspect = require('util').inspect

var randomMeal = function(){
  var meal = {
  	base: function () {
  	  return menu.salads.base[Math.floor((Math.random()*4))]		
  	}()
  ,	main: function () {
  	  return menu.salads.main[Math.floor((Math.random()*7))]
    }()
  , secondary: function () {
  	  var fourIngredients = []
  	  var secondaries = menu.salads.secondary.slice(0)
  	  for (var i = 0; i < 4; i++) {
  	  	var random = Math.floor(Math.random()*(19-i))
  	    fourIngredients[i] = secondaries[random]
  	    if (fourIngredients[i] instanceof Array) { // you only want one of the beans
  	      fourIngredients[i] = secondaries[random][Math.floor((Math.random()*4))]
  	    }
  	    secondaries.splice(random, 1) // No repeated ingrediant for your salad :)
  	  }
      return fourIngredients
    }()
  , drinks: function () {
  	  return menu.salads.drinks[Math.floor((Math.random()*7))]
    }()	
  }
  return meal
}

module.exports = randomMeal
