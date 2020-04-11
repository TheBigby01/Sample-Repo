function randomNumberInRange(x){
	return Math.random()*x;
}

function randomNumberWithDigit(n){
	var x = "";
	for(var i=0;i<n;i++) x+=String(Math.round(randomNumberInRange(9)));
	return x;
}