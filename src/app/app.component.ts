import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedFeature = 'recipe';
  title = 'angular-complete-2022-course-proj';

  onNavigate(component: string) {
    this.loadedFeature = component
  }
}
