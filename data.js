// let names = ['nikki','nikki','nikki','nikki','nikki']

// let age = [20,22,23,24,25]

// let email= ['nikfgd123@gamil.com','nikfgd123@gamil.com','nikfgd123@gamil.com','nikfgd123@gamil.com','nikfgd123@gamil.com',]

// let values= [...names,...age,...email];  
 
// for(let i=0 ; i<names.length ; i++){
// console.log(names[i]+age[i]+email[i]);
   
// }
import fs from 'fs'                                   

let names = ['nikki', 'sween', 'sachin', 'priya', 'mahendra'];
let age = [20, 23, 21, 22, 25];
let email = ['nikfgd123@gamil.com', 'nikfgd123@gamil.com', 'nikfgd123@gamil.com', 'nikfgd123@gamil.com', 'nikfgd123@gamil.com'];

let output = '';
for (let i = 0; i < names.length; i++) {
  output += names[i] + age[i] + email[i] + '\n';
}

fs.writeFile('output.txt', output, (err) => {
  if (err) 
  console.log(err) 
  console.log('Data has been written to output.txt');
});




