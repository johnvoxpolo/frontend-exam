import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/shared/services/config.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  config: any;
  menu: any;

  content: string;
  title: string;

  constructor(
    private configService: ConfigService
  ) { }

  ngOnInit() {
    this.configService.getConfig('mainview').subscribe(data => {
      this.config = data;
      this.content = this.config.content;
      this.menu = this.config.menu;
      this.title = this.config.name;
    });
  }
}