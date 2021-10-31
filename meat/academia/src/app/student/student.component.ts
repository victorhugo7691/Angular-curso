import { Component, OnInit, Input } from '@angular/core';
import { Student } from './student.model';

@Component({
  selector: 'jad-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
  //input //também pode ser utilizado para passar os atributos que serao alterados no parent
})
export class StudentComponent implements OnInit {
  //@Input() habilita a propriedade para receber valores do componente parent
  /*@Input() name: string | undefined // = 'Luke';
  @Input() isJedi: boolean  | undefined  //= true;
*/
  @Input()
  student!: Student;
  
  constructor() { }

  ngOnInit(): void {
  }

  clicked(){
    console.log(`Clicou no estudante, o nome e ${this.student.name}`);
  }

}
