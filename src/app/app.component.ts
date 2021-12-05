import { Component } from '@angular/core';
import {MaterialIconsService} from './services/material-icons.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Кэшбек Сервис';

  constructor(private materialIconsService: MaterialIconsService) {
    materialIconsService.init();
  }
}
