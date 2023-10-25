import { Component , Inject, inject} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-leave-m',
  templateUrl: './leave-m.component.html',
  styleUrls: ['./leave-m.component.css']
})
export class LeaveMComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
