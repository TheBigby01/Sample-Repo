function randomNumberInRange(x){
	return Math.random()*x;
}

function randomNumberWithDigit(n){
	var x = "";
	for(i=0;i<n;i++) x+=String(Math.round(randomNumberInRange(9)));
	return x;
}

function isPrime(x){
	if(x<2) return false;
	for(i=3;i<x;i++) if(x%i==0) return false;
	return true;
}
function randomPrimeGeneratorInRange(x){
	while(true){
		var y = Math.round(randomNumberInRange(x));
		if(isPrime(y)==true){
			return y;
		}
	}
}

console.log(randomPrimeGeneratorInRange(10))