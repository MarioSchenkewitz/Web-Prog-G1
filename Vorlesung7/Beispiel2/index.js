const express = require("express");
const { v4: uuidv4 } = require("uuid");
const app = express();

app.use(express.json());
app.use(express.static("./public"));

const tokens = [];
app.get("/token", (req, res) => {
  const token = uuidv4();
  tokens.push(token);
  res.send(token);
});

const students = [];

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

function tokenSecurity(req, res, next) {
  if (!req.query.token) {
    res.status(401).send("Unauthorized");
  } else {
    if (tokens.includes(req.query.token)) {
      next();
    } else {
      res.status(401).send("Unauthorized");
    }
  }
}

app.use(tokenSecurity);

app
  .route("/students")
  .post((req, res) => {
    if (req.body.matrikelnr) {
      if (req.body.matrikelnr.length === 6) {
        const newStundent = newStudent(req.body);
        students.push(newStundent);
        res.status(200).json(newStundent);
      } else {
        res.status(400).send("Invalid value");
      }
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

const port = 8080;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
