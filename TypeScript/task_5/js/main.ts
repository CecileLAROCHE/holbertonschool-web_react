// Interfaces pour Major et Minor Credits
interface MajorCredits {
  credits: number;
  readonly brand: "Major";
}

interface MinorCredits {
  credits: number;
  readonly brand: "Minor";
}

// Fonctions pour sommer les crédits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return { credits: subject1.credits + subject2.credits, brand: "Major" };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return { credits: subject1.credits + subject2.credits, brand: "Minor" };
}

// Exemple d'utilisation
const math: MajorCredits = { credits: 10, brand: "Major" };
const physics: MajorCredits = { credits: 20, brand: "Major" };

const art: MinorCredits = { credits: 5, brand: "Minor" };
const music: MinorCredits = { credits: 15, brand: "Minor" };

const totalMajor = sumMajorCredits(math, physics);
const totalMinor = sumMinorCredits(art, music);

console.log(totalMajor); // { credits: 30, brand: "Major" }
console.log(totalMinor); // { credits: 20, brand: "Minor" }
