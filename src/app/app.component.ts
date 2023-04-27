import { ElementSchemaRegistry } from '@angular/compiler';
import { Component } from '@angular/core';
import { faker } from '@faker-js/faker';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  randomText: string = faker.lorem.sentence();
  inputText: string = '';

  onChangeInput(text: string){
    this.inputText = text;      
  }

  compare(letterRandom:string, letterEnter: string): string{
    if(!letterEnter)
      return 'pending'
    return letterRandom === letterEnter ? 'correct' : 'incorect';
  }
}
