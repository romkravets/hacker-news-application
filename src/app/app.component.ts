import { Component, ViewEncapsulation  } from '@angular/core';

@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.Native,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-hn';
}
