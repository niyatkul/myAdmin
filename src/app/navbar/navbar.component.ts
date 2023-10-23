import { Component } from '@angular/core';
import { DashboardService } from '../login/dashboard.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
constructor(private dashboardService:DashboardService) {}
}
