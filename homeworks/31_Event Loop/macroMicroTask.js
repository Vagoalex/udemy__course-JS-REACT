'use strict';

setTimeout(() => console.log('timeout'));

Promise.resolve().then(() => console.log('promise'));

queueMicrotask(() => console.log('queueMicrotask'));
console.log('Code-queue');

Promise.resolve().then(() => console.log('promise2'));

console.log('Code-done');

// () => {};
// microtasks: then/catch/finally/await
// render;

// () => {};
// microtasks: then/catch/finally/await
// render;

// () => {};
// microtasks: then/catch/finally/await
// render;
// .....
