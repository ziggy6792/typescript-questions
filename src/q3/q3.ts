const sortObjByName = (dataObj = [] as any[]) => {
  const sortedData = dataObj.sort((a, b) => {
    const lca = a.name.toLowerCase();
    const lcb = b.name.toLowerCase();
    return lca > lcb ? 1 : lca < lcb ? -1 : 0;
  });
  return sortedData;
};

export const question3 = () => {
  // Question 3
  // const myList = [
  //   { name: 'simon', age: 30 },
  //   { name: 'ben', age: 31 },
  // ];
  // const sortedList = sortObjByName(myList);
  // console.log(sortedList);
};
