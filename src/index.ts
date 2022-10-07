import fs from 'fs';

const FILE_PATH = '/Users/simon.verhoeven/Documents/workspace/typescript-node-starter/src/myFile.txt';

const sortObjByName = (dataObj = [] as any[]) => {
  const sortedData = dataObj.sort((a, b) => {
    const lca = a.name.toLowerCase();
    const lcb = b.name.toLowerCase();
    return lca > lcb ? 1 : lca < lcb ? -1 : 0;
  });
  return sortedData;
};

const main = () => {
  // Question 1

  fs.readFile(FILE_PATH, (err, data) => {
    console.log('foo');
    console.log('data', data.toString());
    if (err) {
      // Handle error
    } else {
      // Do something with data
    }
  });
  console.log('bar');

  // Question 2
  // const myList = [
  //   { name: 'simon', age: 30 },
  //   { name: 'ben', age: 31 },
  // ];
  // const sortedList = sortObjByName(myList);
  // console.log(sortedList);
};

main();
