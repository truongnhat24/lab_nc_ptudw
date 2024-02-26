let controller = {},
    random = require("./22880112_Ex02-Random");

controller.generate = (students) => {
  for (let i = 0; i < students.length; i++) {
    let student = students[i];
    for(let j = 0; j < student.subjects.length; j++){
      student.subjects[j].grade = random(0, 10);
    }
  }
}

module.exports = controller;