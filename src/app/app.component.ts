import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  template: 
  `<div>
    <app-simple-form></app-simple-form>
    {{mail.message}}
    <hr>
    {{api}}
  </div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = `Let's get started`;

  constructor(
    @Inject('mail') public mail,
    @Inject('api') public api,
  ){

  }
}
