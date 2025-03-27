// 1️⃣ Macarena y la validación de contraseñas: Crea una función validatePassword que reciba un objeto con una propiedad password (string) y devuelva un objeto con las propiedades isValid (boolean) y errors (array de strings) que indiquen si la contraseña cumple con los siguientes criterios:

const validatePassword = password => {
  const checkPassword = {
    isValid: [],
    errors: []
  };

  if (password.length < 8) {
    checkPassword.errors.push('Password must be at least 8 characters long.');
  }
  if (!/[A-Z]/.test(password)) {
    checkPassword.errors.push(
      'Password must contain at least one uppercase letter.'
    );
  }
  if (!/[a-z]/.test(password)) {
    checkPassword.errors.push(
      'Password must contain at least one lowercase letter.'
    );
  }
  if (!/\d/.test(password)) {
    checkPassword.errors.push('Password must contain at least one number.');
  }
  if (checkPassword.errors.length === 0) {
    checkPassword.isValid.push('valid password');
  }

  console.log(checkPassword);
};

validatePassword('invalid');
validatePassword('Estasiesvalida2');

// 2️⃣ Sabrina y el sistema de evaluación de estudiantes: Crea una función evaluateStudents que reciba un objeto que representa una asignatura (subject). Este objeto debe tener las propiedades: subjectName: El nombre de la asignatura (string). teacher: El nombre del profesor a cargo (string). students: Un objeto que contiene a los estudiantes como claves y sus notas (grades) como valores. La función debe imprimir un objeto con la información de los estudiantes aprobados (note >= 5) junto con el nombre de la asignatura y el profesor.

const evaluateStudents = () => {
  const subject = {
    subjectname: 'Web Development',
    teacher: 'Mr. Dios',
    students: {
      Macarena: 8,
      Bego: 4,
      Abby: 6,
      Camila: 3,
      Sabrina: 5
    }
  };
};
