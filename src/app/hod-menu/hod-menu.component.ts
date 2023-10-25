import { Component , Input} from '@angular/core';

@Component({
  selector: 'app-hod-menu',
  templateUrl: './hod-menu.component.html',
  styleUrls: ['./hod-menu.component.css']
})
export class HodMenuComponent {
  @Input() role: string;

  constructor() {

    this.role = '';
   }
}

