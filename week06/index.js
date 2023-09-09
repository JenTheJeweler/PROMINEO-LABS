function doSomething(x, y) {
    if (typeof x !== 'string') {
        throw new Error('x must be a string');
    } else{

    return x + y;
}
}

console.log(doSomething(5,5));