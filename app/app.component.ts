import { Component } from '@angular/core';
import { Animal } from './animal.model';


@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Animal Tracker</h1>
    <h3>These animals are currently in the zoo!</h3>

    <animal-list [childAnimalList]="masterAnimalList" (clickSender)="editAnimal($event)"></animal-list>

    <hr>
    <div *ngIf="selectedAnimal">
      <h3>{{selectedAnimal.species}}</h3>
      <p>Animal age: {{selectedAnimal.age}}</p>
      <h3>Edit Animal</h3>
      <label>Enter Animal Species</label>
      <input [(ngModel)]="selectedAnimal.species">
      <label>Enter Animal Age</label>
      <input [(ngModel)]="selectedAnimal.age">
      <button (click)="finishedEditing()">Done</button>
    </div>
  </div>
  `
})

export class AppComponent {

  selectedAnimal = null;

  masterAnimalList: Animal[] = [
    new Animal('Giant Panda', 3),
    new Animal('Gray Wolf', 5),
    new Animal('Jaguar', 7) ];


  finishedEditing() {
    this.selectedAnimal = null;
  }

  editAnimal(clickedAnimal) {
    this.selectedAnimal = clickedAnimal;
  }

}
