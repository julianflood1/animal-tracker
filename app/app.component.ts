import { Component } from '@angular/core';
import { Animal } from './animal.model';


@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <div id="landing">
      <h1>Animal <br> &emsp; Tracker</h1>
    </div>
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
    new Animal('Jaguar', 'Patrick', 2, 'Carnivore', 'Pond Area', 4, 'Male', 'Stalking prey', 'Cold weather'),
    new Animal('Kangaroo', 'Jimmy', 1, 'Herbivore', 'Plains Area', 3, 'Male', 'Fighting', 'Sleeping' ),
    new Animal('Lion', 'Leo', 19, 'Carnivore', 'Plains Area', 1, 'Male', 'Sleeping', 'Taking a bath'),
    new Animal('Parrot', 'Smithy', 7, 'Herbivore', 'Pond Area', 5, 'Female', 'Mimicking people', 'The rain'),
    new Animal('Dolphin', 'Clapper', 2, 'Carnivore', 'Pool Tank', 2, 'Female', 'Doing tricks', 'Other animals')
   ];

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
