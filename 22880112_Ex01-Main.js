let students = [
  {
    id: 1, 
    fullName: "John Doe",
    subjects: [
      {
        name: 'Math',
        grade: 0
      },
      {
        name: 'Geography',
        grade: 0
      },
      {
        name: 'Physic',
        grade: 0
      }
    ]
  },
  {
    id: 2, 
    fullName: "Nick Ron",
    subjects: [
      {
        name: 'Math',
        grade: 0
      },
      {
        name: 'Geography',
        grade: 0
      },
      {
        name: 'Physic',
        grade: 0
      }
    ]
  },
  {
    id: 3, 
    fullName: "Mary Jane",
    subjects: [
      {
        name: 'Math',
        grade: 0
      },
      {
        name: 'Geography',
        grade: 0
      },
      {
        name: 'Physic',
        grade: 0
      }
    ]
  }
];

console.log('Ex01');
console.log(JSON.stringify(students));

let controller = require("./22880112_Ex03-StudentController");
controller.generate(students);
controller.average(students);
controller.normalize(students);
console.log("Ex02 - Ex03");
console.log(JSON.stringify(students));

(async function () {
  let slowController = require("./22880112_Ex05-SlowStudentController");
  await slowController.generate(students);
  slowController.average(students);
  slowController.normalize(students);
  console.log("Ex04 - Ex05");
  console.log(JSON.stringify(students));
})();

