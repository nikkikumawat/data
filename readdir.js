import fs, { readdir } from 'fs'
import path from 'path';


const dirpath = 'readdir'
function readdata(dirpath) {
    fs.readdir(dirpath, { encoding: 'utf-8' }, (err, files) => {
        if (err) {
            console.log(err)

        }

        else {
            files.forEach(file => {
                const filepath = path.join(dirpath, file)

                fs.stat(filepath, (err, stats) => {
                    if (err) {
                        console.log(err)
                    }
                    // console.log(stats)

                    else {
                        if (stats.isDirectory()) {
                            readdata(filepath)
                        }
                        else if (stats.isFile()) {
                            fs.readFile(filepath, (err, data) => {


                                if (err) {
                                    console.log(err)
                                }
                                else{
                                console.log(data.toString())
                                }
                            })
                        }
                    }

                })

            });
        }
    })
}

readdata(dirpath)

// import fs from 'fs';
// import path from 'path';

// const dirpath = 'readdir';

// function readdata(dirpath) {
//     fs.readdir(dirpath, { encoding: 'utf-8' }, (err, files) => {
//         if (err) {
//             console.log(err);
//         } else {
//             files.forEach(file => {
//                 const filepath = path.join(dirpath, file);

//                 fs.stat(filepath, (err, stats) => {
//                     if (err) {
//                         console.log(err);
//                     } else {
//                         if (stats.isDirectory()) {
//                             readdata(filepath);
//                         } else if (stats.isFile()) {
//                             fs.readFile(filepath,(err, data) => {
//                                 if (err) {
//                                     console.log(err);
//                                 } else {
//                                     console.log(data.toString());
//                                 }
//                             });
//                         }
//                     }
//                 });
//             });
//         }
//     });
// }

// readdata(dirpath);
