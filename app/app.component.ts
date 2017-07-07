import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Animal Tracker</h1>
    <h3>These animals are currently in the zoo!</h3>
    <ul>
      <li [class]="ageColor(currentAnimal)" *ngFor="let currentAnimal of animals">{{currentAnimal.species}} <button (click)="editAnimal(currentAnimal)">Edit Animal</button></li>
    </ul>
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

  animals: Animal[] = [
    new Animal('Giant Panda', 3),
    new Animal('Gray Wolf', 5),
    new Animal('Jaguar', 7) ];
  selectedAnimal = null;

  finishedEditing() {
    this.selectedAnimal = null;
  }

  editAnimal(clickedAnimal) {
    this.selectedAnimal = clickedAnimal;
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

export class Animal {
  constructor(public species: string, public age: number) { }
}
