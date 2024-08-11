import { Request, Response } from "express";
import { StudentService } from "../../../application/services/StudentService";
import { Student } from "../../../domain/entities/Student";

export class StudentController {
  constructor(private studentService: StudentService) {}

  async createStudent(req: Request, res: Response): Promise<void> {
    const { id, name, email, language } = req.body;
    const student = new Student(id, name, email, language);
    await this.studentService.createStudent(student);
    res.status(201).send("Student created");
  }

  async getStudents(req: Request, res: Response): Promise<void> {
    const students = await this.studentService.getStudents();
    res.json(students);
  }

  // Outros métodos como update, delete etc.
}
