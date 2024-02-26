let controller = {},
    slowRandom = require("./22880112_Ex04-SlowRandom");

controller.generate = (students) => {
  for (let i = 0; i < students.length; i++) {
    let student = students[i];
    for(let j = 0; j < student.subjects.length; j++){
      student.subjects[j].grade = slowRandom(0, 10);
    }
  }
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