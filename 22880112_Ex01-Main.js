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

console.log("Ex03");
let controller = require("./22880112_Ex03-StudentController");
controller.generate(students);
console.log(JSON.stringify(students));
