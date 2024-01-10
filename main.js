// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

// Return object function 
const pAequorFactory = (num, DnaArray) => {
  return {
    specimen: num,
    DNA: DnaArray,
    Mutate: function() {
      const dnaBasesChange = ['T', 'C', 'G'];
      if (this.DNA[0] === 'A' && dnaBasesChange.length > 0) {
        this.DNA.shift();
        this.DNA.unshift(dnaBasesChange[Math.floor(Math.random() * dnaBasesChange.length)]);
      }
      return this.DNA;
    },
    compareDNA: function (pAequor) {
      let matchingBases = 0;

      for (let i = 0; i < this.DNA.length; i++) {
        if (this.DNA[i] === pAequor.DNA[i]) {
          matchingBases++;
        }
      }

      const percentageMatch = (matchingBases / this.DNA.length) * 100;
      console.log(`Specimens ${this.specimen} and ${pAequor.specimen} have ${percentageMatch}% DNA in common.`);
    },
    willLikelySurvive: function () {
      let CG = 0;

      for (i = 0; i < this.DNA.length; i++) {
        if (this.DNA[i] === 'C' || this.DNA[i] === 'G') {
          CG++
        } 
    } 
    const matchingLetters = (CG / this.DNA.length) * 100;
    if (matchingLetters >= 60) {
      return true
    } else {
      return false
    }
  },
};
}


const createMultipleObjects = (count) => {
  const objectsArray = [];

  for (let i = 1; i <= count; i++) {
    const newObj = pAequorFactory(i, mockUpStrand());
    objectsArray.push(newObj);
  }

  return objectsArray;
};

const thirtyObjects = createMultipleObjects(30);

console.log(thirtyObjects);







const test1 = pAequorFactory(1, mockUpStrand());
const test2 = pAequorFactory(2, mockUpStrand());

// Test compare two Paequor DNA: 
// test1.Mutate(); // Mutate test1 before comparing
// test1.compareDNA(test2);

// Test willLikelySurvive function: 
// console.log(test1.willLikelySurvive())
