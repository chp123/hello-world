/*module.exports = function main() {
    console.log("Debug Info");
    return 'Hello World!';
};*/
/*module.exports = function main(a,b) {
    console.log("Debug Info");
    return a%b;
};*/
module.exports = function main(a) {
	var sum=0;
    for(var i=0;i<a.length;i++){
    	sum+=parseInt(a[i]);
    }
    return sum;
};