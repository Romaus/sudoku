module.exports = function solveSudoku(matrix) {
  function checkRow(elem,i) {
    let count = 0;
    for (let k = 0; k < 9; k++) {
      if (test[i][k] == elem) {
        count++;
      }
    }
    if (count == 1) {
      return true;
    }
    else {return false}
  };
  function checkColumn(elem,j) {
    let count = 0;
    for (let k = 0; k < 9; k++) {
      if (test[k][j] == elem) {
        count++;
      }
    }
    if (count == 1) {
      return true;
    }
    else {return false}
  };
  function checkRectangle(elem,i,j) {
    let count = 0;
    let c = Math.floor(i/3)*3;
    let r = Math.floor(j/3)*3;
    for(let i = c; i < c+3; i++) {
      for(let j = r; j < r+3; j++) {
        if (test[i][j]==elem) {
          count++;
        }
      }
    }
    if (count == 1) {
      return true
    }
    else {return false}
  };
  let arrayZeros = [];
  let test = matrix;
  for (i = 0; i < 9; i++) {
    for (j = 0; j < 9; j++) {
      if (test[i][j] == 0) {
        arrayZeros.push([test[i][j],i,j]);
      }
    }
  }
  for (n = 0; n < arrayZeros.length; n++) {
    let i = arrayZeros[n][1];
    let j = arrayZeros[n][2];
    while (((arrayZeros[n][0] != 0) && (checkColumn(arrayZeros[n][0],j)) && (checkRectangle(arrayZeros[n][0],i,j)) && (checkRow(arrayZeros[n][0],i))) != true) {
      arrayZeros[n][0]++;
      test[i][j]++;
    }
    if (arrayZeros[n][0] > 9) {
      arrayZeros[n][0] = 0;
      test[i][j] = 0;
      arrayZeros[n-1][0]++;
      test[arrayZeros[n-1][1]][arrayZeros[n-1][2]]++;
      n=n-2;
    }
  }
  return test;
}