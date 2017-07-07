import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <ul>
    <li [class]="ageColor(currentAnimal)" *ngFor="let currentAnimal of childAnimalList">
    <div class="card">
      <h2>{{currentAnimal.species}}</h2>
      <p><strong>Name:</strong> {{currentAnimal.name}}</p>
      <p><strong>Age:</strong> {{currentAnimal.age}}</p>
      <p><strong>Diet:</strong> {{currentAnimal.diet}}</p>
      <p><strong>Location:</strong> {{currentAnimal.location}}</p>
      <p><strong>Caretakers:</strong> {{currentAnimal.caretakers}}</p>
      <p><strong>Sex:</strong> {{currentAnimal.sex}}</p>
      <p><strong>Likes:</strong> {{currentAnimal.likes}}</p>
      <p><strong>Dislikes:</strong> {{currentAnimal.dislikes}}</p>
    </div><button (click)="editButtonHasBeenClicked(currentAnimal)">Edit Animal</button></li>
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
