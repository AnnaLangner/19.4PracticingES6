// task 1

const a = 'Hello';
const b = 'World';
const c = `${a} ${b}`;
console.log(c);

// task 2

const multiply = (x, y = 1) => console.log(x * y);
multiply(5);

//task 3

const average = (...args) => {
    let sum = 0;
    //args.forEach(arg => sum += arg);
    for(let i = 0; i < args.length; i++) {
        sum += args[i];
    }
    console.log(sum / args.length);
};
average(1,2,3,4);

//
