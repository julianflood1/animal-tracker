import { Pipe, PipeTransform } from '@angular/core';
import { Animal } from './animal.model';

@Pipe({
  name: "ageSort",
  pure: false
})


export class AgesSortPipe implements PipeTransform {


  transform(input: Animal[], selectedAge){
    var output: Animal[] = [];
    if(selectedAge === "oldAnimals") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].age > 2) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (selectedAge === "youngAnimals") {
        for (var i = 0; i < input.length; i++) {
          if (input[i].age <= 2) {
            output.push(input[i]);
          }
        }
        return output;
      } else {
        return input;
      }
    }

  }
