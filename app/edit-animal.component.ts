import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
  <div>
    <div *ngIf="childSelectedAnimal">
      <h3>{{childSelectedAnimal.species}}</h3>
      <p>Animal age: {{childSelectedAnimal.age}}</p>
      <h3>Edit Animal</h3>
      <label>Enter Animal Species</label>
      <input [(ngModel)]="childSelectedAnimal.species">
      <label>Enter Animal Age</label>
      <input [(ngModel)]="childSelectedAnimal.age">
      <button (click)="doneButtonClicked()">Done</button>
    </div>
  </div>
  `
})

export class EditAnimalComponent {
  @Input() childSelectedAnimal: Animal;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }
  
}
