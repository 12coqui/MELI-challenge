function isMutant(dna: string[]): boolean {
  const dnaMatrix = dna.map((row) => row.split(''));

  const isMutant = dnaMatrix.some((row, rowIndex) => {
    return row.some((column, columnIndex) => {
      const isVerticalMutant =
        rowIndex < dnaMatrix.length - 3 &&
        column === dnaMatrix[rowIndex + 1][columnIndex] &&
        column === dnaMatrix[rowIndex + 2][columnIndex] &&
        column === dnaMatrix[rowIndex + 3][columnIndex];

      const isHorizontalMutant =
        columnIndex < row.length - 3 &&
        column === row[columnIndex + 1] &&
        column === row[columnIndex + 2] &&
        column === row[columnIndex + 3];

      const isDiagonalMutant =
        columnIndex < row.length - 3 &&
        rowIndex < dnaMatrix.length - 3 &&
        column === dnaMatrix[rowIndex + 1][columnIndex + 1] &&
        column === dnaMatrix[rowIndex + 2][columnIndex + 2] &&
        column === dnaMatrix[rowIndex + 3][columnIndex + 3];

      const isDiagonalInvertedMutant =
        columnIndex >= 3 &&
        rowIndex < dnaMatrix.length - 3 &&
        column === dnaMatrix[rowIndex + 1][columnIndex - 1] &&
        column === dnaMatrix[rowIndex + 2][columnIndex - 2] &&
        column === dnaMatrix[rowIndex + 3][columnIndex - 3];

      return (
        isHorizontalMutant ||
        isVerticalMutant ||
        isDiagonalMutant ||
        isDiagonalInvertedMutant
      );
    });
  });

  return isMutant;
}

// const dna = ['ATGCGA', 'CAGTGC', 'TTATGT', 'AGAAGG', 'CCCCTA', 'TCACTG'];
// const dna = ['ABCCDT', 'QWERTR', 'GHJKLL', 'CVBMXM', 'CFGJHK', 'RLOPVC'];
// const dna = ['ABCCDT', 'QWERTR', 'GHAKLL', 'CVBAXM', 'CFGJAK', 'RLOPVA'];
const dna = ['ABCCDA', 'QWERAR', 'GHJALL', 'CVAMXM', 'CFGJHK', 'RLOPVC'];

console.log(isMutant(dna));

export { isMutant };
