import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public name: string;
  public lastname: string;
  public list:Array<string>;

  constructor(){
    this.list = [];
  }

  public show():void {
    const item = `Nombre: ${this.name} - Apellido: ${this.lastname}`
    alert(item);
    this.list.push(item);
  }
}
