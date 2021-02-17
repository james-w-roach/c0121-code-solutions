function ExampleConstructor() {
}

console.log('prototype of ExampleConstructor:', ExampleConstructor.prototype);
console.log('typeof prototype of ExampleConstructor:', typeof ExampleConstructor.prototype);

var call = new ExampleConstructor();
console.log('function call:', call);

var instance = call instanceof ExampleConstructor;
console.log('instanceof:', instance);
