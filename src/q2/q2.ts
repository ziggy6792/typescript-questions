import fs from 'fs';

const FILE_PATH = './src/myFile.txt';

// Question 2
export const question2 = () => {
  fs.readFile(FILE_PATH, (err, data) => {
    console.log('data', data.toString());
    if (err) {
      // Handle error
    } else {
      // Do something with data
    }
  });
  console.log('bar');
};
