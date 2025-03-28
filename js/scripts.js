// 1️⃣ Macarena y la validación de contraseñas: Crea una función validatePassword que reciba un objeto con una propiedad password (string) y devuelva un objeto con las propiedades isValid (boolean) y errors (array de strings) que indiquen si la contraseña cumple con los siguientes criterios:

const validatePassword = data => {
  const result = {
    isValid: false,
    errors: []
  };

  if (data.password.length < 8) {
    result.errors.push('Password must be at least 8 characters long.');
  }
  if (!/[A-Z]/.test(data.password)) {
    result.errors.push('Password must contain at least one uppercase letter.');
  }
  if (!/[a-z]/.test(data.password)) {
    result.errors.push('Password must contain at least one lowercase letter.');
  }
  if (!/\d/.test(data.password)) {
    result.errors.push('Password must contain at least one number.');
  }

  result.isValid = result.errors.length === 0;

  console.log(result);
};

validatePassword({ password: 'abc123' });
validatePassword({ password: 'Adfdfdabc123' });

// 3️⃣ Abby y la traducción de palabras: Crea una función translateWords que reciba un objeto translationTask con:

const translateWords = translationTask => {
  const result = {
    projectName: translationTask.projectName,
    translator: translationTask.translator,
    translated: []
  };

  for (const word of translationTask.words) {
    console.log(translationTask.dictionary[word]);
  }
};

translateWords({
  // reciba, puedes poner el objeto cuando llama a la función.
  projectName: 'Basic Translator',
  translator: 'Abby',
  words: ['hello', 'world'],
  dictionary: { hello: 'hola', world: 'mundo' }
});
