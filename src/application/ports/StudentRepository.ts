import { Student } from "../../domain/entities/Student";


export interface StudentRepository {
  create(student: Student): Promise<void>;
  findAll(): Promise<Student[]>;
  findById(id: string): Promise<Student | null>;
  update(student: Student): Promise<void>;
  delete(id: string): Promise<void>;
}
