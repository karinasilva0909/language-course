import { Student } from "../../domain/entities/Student";
import { StudentRepository } from "../ports/StudentRepository";

export class StudentService {
  constructor(private repository: StudentRepository) {}

  async createStudent(student: Student): Promise<void> {
    await this.repository.create(student);
  }

  async getStudents(): Promise<Student[]> {
    return await this.repository.findAll();
  }

  // Outros métodos como update, delete etc.
}
