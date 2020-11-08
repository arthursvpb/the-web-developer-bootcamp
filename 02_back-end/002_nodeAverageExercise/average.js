// We can use the math library

var soma = 0;

function average(scores){
	for(var i = 0; i < scores.length; i++){
	soma +=  scores[i];
	}

	// Ou podemos usar o forEach para poder pegar a soma
	// scores.forEach(function(scores){
	// 	soma +=  scores;
	// });


	var averageNumber = soma / scores.length;
	return Math.round(averageNumber);
}


var scores = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
console.log("The average is: "+ average(scores)); // should return 68
