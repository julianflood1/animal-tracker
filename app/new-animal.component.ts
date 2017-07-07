import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
    <h1>New Animal</h1>
    <div>
      <label>Enter Animal Species:</label>
      <input #newSpecies>
    </div>
    <div>
      <label>Animal Age:</label>
      <input #newAge>
      <button (click)="submitForm(newSpecies.value, newAge.value); newSpecies.value=''; newAge.value='';">Add</button>
    </div>
  `
})

export class NewAnimalComponent {
  @Output() newAnimalSender = new EventEmitter();

  submitForm(species: string, age: number) {
    var newAnimalToAdd: Animal = new Animal(species, age);
    this.newAnimalSender.emit(newAnimalToAdd)
  }
}
