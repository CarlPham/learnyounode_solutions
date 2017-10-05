var args = process.argv;
// console.log(args);
// process.exit(1);
// var args = [1, 2, 3];
args.splice(0, 2);
var sum = args.reduce(function(a, b){
    return Number(a) + Number(b);
}, 0);
console.log(sum);
