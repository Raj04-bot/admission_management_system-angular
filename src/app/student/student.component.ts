import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  students: Student[] = [];
  student: Student = new Student();

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents(): void {
    this.studentService.getStudent().subscribe((data: Student[]) => {
      this.students = data;
    });
  }

   saveStudent(form: NgForm): void {
  if (form.valid) {
    this.studentService.saveStudent(this.student).subscribe(data => {
      alert("Student saved successfully!");
      this.getStudents();       // Refresh list
      this.student = new Student(); // Clear form
      form.resetForm();         // optional: reset validation
    });
  }
}

}
