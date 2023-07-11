const school = {
  lessons: [
    {
      course: "Python",
      students: 20,
      professor: "Carlos Patrício",
      shift: "Manhã",
    },
    {
      course: "Kotlin",
      students: 10,
      professor: "Gabriel Oliva",
      shift: "Noite",
    },
    {
      course: "JavaScript",
      students: 738,
      professor: "Gustavo Caetano",
      shift: "Tarde",
    },
    {
      course: "MongoDB",
      students: 50,
      shift: "Noite",
    },
  ],
};

const keyValue = (object, arrayPosition) => {
  return object["lessons"][arrayPosition];
};

console.log(keyValue(school, 1));

const numberOfStudents = () => {
  let students = 0;
  for (let index = 0; index < school.lessons.length; index += 1) {
    students += school.lessons[index].students;
  }
  return students;
};

console.log(numberOfStudents());

const checkKey = (object, nameKey) => {
  for (let index = 0; index < object.lessons.length; index += 1) {
    if (object.lessons[index][nameKey] === undefined) {
      return false;
    }
  }
  return true;
};

console.log(checkKey(school, "course"));

const changeKey = (obj, course, value) => {
  let findCourse;
  for (let index = 0; index < obj.lessons.length; index += 1) {
    let element = obj.lessons[index];
    if (element.course === course) {
      findCourse = element;
      break;
    }
  }
  if (findCourse !== undefined) {
    findCourse.shift = value;
    return findCourse;
  } else {
    return "Curso não encontrado.";
  }
};

console.log(changeKey(school, "Python", "Noite"));
