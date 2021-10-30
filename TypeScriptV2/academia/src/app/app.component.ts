import { Component } from '@angular/core';
import { Student } from './student/student.model';

@Component({
  selector: 'jad-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'academia';

  students: Student[] = [
    { name: "Luke", isJedi: true, temple: "Corustant"
    },
    { name: "Leia", isJedi: false
    }
  ]
  
}
