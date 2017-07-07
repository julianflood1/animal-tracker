import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <ul>
    <li [class]="ageColor(currentAnimal)" *ngFor="let currentAnimal of childAnimalList">{{currentAnimal.species}} <button (click)="editButtonHasBeenClicked(currentAnimal)">Edit Animal</button></li>
  </ul>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();

  editButtonHasBeenClicked(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }

  ageColor(currentAnimal){
    if (currentAnimal.age <= 4){
      return "bg-info";
    } else if (currentAnimal.age === 5) {
      return "bg-warning";
    } else {
      return "bg-danger";
    }
  }
}
