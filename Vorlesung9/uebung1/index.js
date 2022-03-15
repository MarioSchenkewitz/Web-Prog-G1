const express = require("express");
const { v4: uuidv4 } = require("uuid");
const app = express();

app.use(express.json());

const students = [];

app.use("/", express.static(__dirname + "/public"));

function getStudentById(id) {
  return students.find((value) => {
    return value.id === id;
  });
}

function deleteStudent(student) {
  students.splice(students.indexOf(student), 1);
}

function newStudent(student) {
  return { ...student, id: uuidv4() };
}

app
  .route("/students")
  .post((req, res) => {
    if (req.body.matrikelnr) {
      const newStundent = newStudent(req.body);
      students.push(newStundent);
      res.status(200).json(newStundent);
    } else {
      res.status(400).send();
    }
  })
  .get((_, res) => res.json(students))
  .delete((_, res) => {
    students.splice(0, students.length);
    res.json(students);
  });

app
  .route("/students/:id")
  .get((req, res) => {
    const student = getStudentById(req.params.id);
    if (student) {
      res.json(student);
    } else {
      res.status(404).send("not found");
    }
  })
  .put((req, res) => {
    const student = getStudentById(req.params.id);
    const updatedStudent = { ...req.body, id: student.id };
    deleteStudent(student);
    students.push(updatedStudent);
    res.json(updatedStudent);
  })
  .delete((req, res) => {
    const student = getStudentById(req.params.id);
    deleteStudent(student);
    res.json(students);
  });

app.listen(3000);
