import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
   <h1>
    {{ title }}
  </h1>
  <app-heroes></app-heroes>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SocialNerds Angular app';
}
