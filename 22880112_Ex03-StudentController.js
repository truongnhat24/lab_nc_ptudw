let controller = {},
    random = require("./22880112_Ex02-Random");

controller.generate = (students) => {
  students.forEach((student) => {
    student.subjects.forEach( subject => {
      subject.grade = random(0,10);
    })
  })
}

controller.average = (students) => {
  students.forEach((student) => {
    let total = student.subjects.reduce((total, subject) => total + subject.grade, 0);
    student.average = student.subjects.length ? total/student.subjects.length : 0;
  });
}

controller.normalize = (students) => {
  students.forEach(student => {
    student.subjects.forEach( subject => {
      subject.grade = parseFloat(subject.grade).toFixed(2);
    })
    student.average = parseFloat(student.average).toFixed(2);
  })
}

module.exports = controller;