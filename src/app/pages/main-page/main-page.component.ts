import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Role} from '../../models/user.model';

@Component({
  selector: 'main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  public selectedRole: Role = 'ROLE_CLIENT';
  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.selectedRole = this.authService.getUserRole();
  }
}
