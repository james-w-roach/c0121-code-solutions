function graduate(credential) {
  return fullname => {
    return `${fullname}, ${credential}`;
  };
}

const medicalSchool = graduate('M.D.');
const lawSchool = graduate('Esq.');

console.log(medicalSchool('James Roach'));
console.log(lawSchool('James Roach'));
