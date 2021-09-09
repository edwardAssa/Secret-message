let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

console.log(secretMessage.length); // get original length

// removing the last string of the array secretMessage
secretMessage.pop();

// new length of array after pop
console.log(secretMessage.length);

// addingtwo new strings to array
secretMessage.push('to', 'program');

// replacing 'easily' with 'right'
secretMessage[7] = 'right';

// removing the first string from array
secretMessage.shift();

// adding 'programming' to the beginning of the array
secretMessage.unshift('programming');

// removing 'get', 'right', 'the', 'first', 'time' and replacing them with 'know'
secretMessage.splice(6, 5, 'know');

console.log(secretMessage.join(' '));


