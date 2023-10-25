import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-staff-menu',
  templateUrl: './staff-menu.component.html',
  styleUrls: ['./staff-menu.component.css']
})
export class StaffMenuComponent {
  @Input() role:
  string = '';

  constructor() {
    this.role = '';
   }
}

