function randomNumberInRange(x){
	return Math.random()*x;
}

function randomNumberWithDigit(n){
	var x = "";
	for(var i=0;i<n;i++) x+=String(Math.round(randomNumberInRange(9)));
	return x;
}

function randomPrimeGeneratorInRange(x){
	while(true){
		var y = Math.random(randomNumberInRange(x));
		if(y<2) continue;
		if(y==2) return true;
		var isPrime = true;
		for(i=3;i<y;i++) if(y%i==0) {isPrime = false; break;}
		if(isPrime) return y;
		else continue;
	}
}