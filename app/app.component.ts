import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  moduleId: module.id,
  selector: 'app',
  templateUrl: 'app.component.html',
  styleUrls: [ 'app.component.css' ]
})
export class AppComponent {
  constructor(private location: Location) {}
  title = 'Product manager';

  goBack(): void {
    this.location.back();
  }

  canBack(): boolean {
    return !this.location.isCurrentPathEqualTo('/');
  }
}
