import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Role} from '../../models/user.model';
import {Router} from '@angular/router';
import {ClientService} from '../../services/client.service';
import {CashbackService} from '../../services/cashback.service';
import {SnackBarService} from '../../services/snack-bar.service';

@Component({
  selector: 'main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  public selectedRole: Role = 'ROLE_CLIENT';
  public userLogin: string;
  public clientBalance: number;
  public cashbackChange = false;

  constructor(private authService: AuthService, private router: Router, private clientService: ClientService,
              private cashbackService: CashbackService, private  snackBarService: SnackBarService) {
  }

  ngOnInit(): void {
    this.selectedRole = this.authService.getUserRole();
    this.userLogin = localStorage.getItem('cashback.user.login');
    this.clientService.getClientBalance().subscribe((balance) => {
      this.clientBalance = balance;
    });
  }

  processCashback(): void {
    this.cashbackService.processCashback().subscribe(() => {
      this.cashbackChange = !this.cashbackChange;
      this.snackBarService.openSnackBar('Пересчет кэшбека прошел успешно!');
    });
  }

  logout(): void {
    localStorage.removeItem('cashback.access.token');
    localStorage.removeItem('cashback.user.role');
    localStorage.removeItem('cashback.user.id');
    localStorage.removeItem('cashback.user.login');
    this.router.navigateByUrl('login');
  }
}
