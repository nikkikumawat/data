import readline from "readline";

const r1 = readline.createInterface(process.stdin, process.stdout);

r1.question("Enter multiple numbers separated by space:\n", (input) => {
  const numbers = input.split(" ");
  const squares = numbers.map((num) => num * num);
  r1.write("Squares: " + squares.join(" "));
  r1.close();
});

                                                   
                                  