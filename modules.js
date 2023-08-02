// //path.join([...paths])
// import dns from "dns"
// import path from  "path"

// //path.join('/foo', 'bar', 'baz/asdf', 'quux', '..');
// // Returns: '/foo/bar/baz/asdf'

// //path.join('foo', {}, 'bar');
// // Throws 'TypeError: Path must be a string. Received {}'


// //const dns = require('dns');

// // Resolving a domain name to an IP address


// // Retrieving DNS records for a domain
// dns.resolve('example.com', 'A', (err, addresses) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log('A nikky:', addresses);
// });

// // Performing reverse DNS lookup
// dns.reverse('192.0.2.1', (err, hostnames) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log('Reverse lookup:', hostnames);
// });

// // Resolving PTR record for an IP address
// dns.resolvePtr('192.0.2.1', (err, hostnames) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log('PTR record:', hostnames);
// });

import dns from 'dns'



// dns.resolve6('hello.com','MX',(error,records)=>{
//     if(error) console.log(error);
//     console.log(records);
// });

// dns.resolve ('hello.com','NS',(error,records)=>{
//     if(error) throw error;
//     console.log(records);
// });


// let n =[1,2,3,4,5];
// let p = n.every((x)=>x>0)

// console.log(p);


// Define mixin functions
// function greetMixin(obj) {
//     obj.greet = function() {
//       console.log("Hello, " + this.name + "!");
//     };
//   }
  
//   function ageMixin(obj) {
//     obj.getAge = function() {
//       console.log(this.name + " is " + this.age + " years old.");
//     };
//   }
  
//   // Create an object
//   const person = {
//     name: "John",
//     age: 25
//   };
  
//   // Apply mixins to the object    
//   greetMixin(person);
//   ageMixin(person);
  
//   // Use the mixin functions
//   person.greet(); // Output: Hello, John!
//   person.getAge(); // Output: John is 25 years old.
  
var sound = 'sachin'
var bear = {sound: 'roar'};

function bear() {
    
}
