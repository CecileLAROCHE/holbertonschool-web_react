/// <reference path="./subjects/Teacher.ts" />
/// <reference path="./subjects/Subject.ts" />
/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/React.ts" />
/// <reference path="./subjects/Java.ts" />

const cppTeacher: Subjects.Teacher = {
    firstName: "Guillaume",
    lastName: "Salva",
    experienceTeachingC: 10,
  };
  
  const cppCourse = new Subjects.Cpp();
  cppCourse.setTeacher(cppTeacher);
  
  console.log(cppCourse.getRequirements()); // "Here is the list of requirements for Cpp"
  console.log(cppCourse.getAvailableTeacher()); // "Available Teacher: Guillaume"
  
  const reactTeacher: Subjects.Teacher = {
    firstName: "Jane",
    lastName: "Doe",
    experienceTeachingReact: 0,
  };
  
  const reactCourse = new Subjects.React();
  reactCourse.setTeacher(reactTeacher);
  
  console.log(reactCourse.getRequirements()); // "Here is the list of requirements for React"
  console.log(reactCourse.getAvailableTeacher()); // "No available teacher"
  