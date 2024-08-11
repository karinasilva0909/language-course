import { StudentRepository } from "../../../application/ports/StudentRepository";
import { Student } from "../../../domain/entities/Student";

export class InMemoryStudentRepository implements StudentRepository {
  private students: Student[] = [];

  async create(student: Student): Promise<void> {
    this.students.push(student);
  }

  async findAll(): Promise<Student[]> {
    return this.students;
  }

  async findById(id: string): Promise<Student | null> {
    return this.students.find(student => student.id === id) || null;
  }

  async update(student: Student): Promise<void> {
    const index = this.students.findIndex(s => s.id === student.id);
    if (index !== -1) {
      this.students[index] = student;
    }
  }

  async delete(id: string): Promise<void> {
    this.students = this.students.filter(s => s.id !== id);
  }
}
