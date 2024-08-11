import express from "express";
import bodyParser from "body-parser";
import { StudentService } from "./application/services/StudentService";
import { InMemoryStudentRepository } from "./infrastructure/adapters/database/InMemoryStudentRepository";
import { StudentController } from "./infrastructure/adapters/http/StudentController";

const app = express();
app.use(bodyParser.json());

const studentRepository = new InMemoryStudentRepository();
const studentService = new StudentService(studentRepository);
const studentController = new StudentController(studentService);

app.post("/students", (req, res) => studentController.createStudent(req, res));
app.get("/students", (req, res) => studentController.getStudents(req, res));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
