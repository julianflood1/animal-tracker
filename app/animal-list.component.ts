import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <div id="main">
    <select (change)="onChange($event.target.value)">
      <option value="allAnimals" selected="selected">All Animals</option>
      <option value="youngAnimals">Animals 2 or Under</option>
      <option value="oldAnimals">Animals Older than 2</option>
    </select>

    <ul>
      <li *ngFor="let currentAnimal of childAnimalList | ageSort:filterByAge">
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
  </div>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();

  onChange(optionFromMenu) {
    this.filterByAge = optionFromMenu;
  }

  filterByAge: string = "allAnimals";

  editButtonHasBeenClicked(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }

}
