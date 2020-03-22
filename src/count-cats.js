module.exports = function countCats( matrix ) {
  let cats = 0;
  for (let i=0; i<matrix.length; i++){
      matrix[i].forEach(item => {
          if(item=='^^'){
              cats++
          }
      })
  }
  return cats;
};
