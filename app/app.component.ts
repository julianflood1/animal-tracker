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
    <edit-animal [childSelectedAnimal]="selectedAnimal" (doneButtonClickedSender)="finishedEditing()"></edit-animal>
    <new-animal (newAnimalSender)="addAnimal($event)"></new-animal>
  </div>
  `
})

export class AppComponent {

  selectedAnimal = null;

  masterAnimalList: Animal[] = [
    new Animal('Giant Panda', 'Ping-Pong', 3, 'Herbivore', 'Bamboo Forest', 3, 'Female', 'Laying down', 'Fast movements' ),
    new Animal('Gray Wolf', 'Fang', 5, 'Carnivore', 'Northern Trail', 1, 'Male', 'Running fast', 'Hot weather'),
    new Animal('Jaguar', 'Patrick', 2, 'Carnivore', 'Pond Area', 5, 'Male', 'Stalking prey', 'Cold weather') ];

    editAnimal(clickedAnimal) {
      this.selectedAnimal = clickedAnimal;
    }

  finishedEditing() {
    this.selectedAnimal = null;
  }

  addAnimal(newAnimalFromChild: Animal) {
    this.masterAnimalList.push(newAnimalFromChild);
  }


}
