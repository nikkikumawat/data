import fs from 'fs'

for(let i = 1; i<5 ; i++){
    fs.readFile('file'+i+".txt", (error, data) => {


        if (error) {

            console.error(error);
        } else {
          
            console.log(data.toString());
        }
        
        
    });

}


