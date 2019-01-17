import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/shared/services/config.service';
import { UsersService } from 'src/app/shared/services/users/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  config: any;
  data: any;
  columnFields: any[];

  name: string;
  type: string;
  displayedColumns: string[];

  constructor(
    private usersService: UsersService,
    private configService: ConfigService,
    private location: Location,
  ) { }

  goBack() {
    this.location.back();
  }

  ngOnInit() {

    this.usersService.getData().subscribe(
      data => {
        this.data = data;
        this.configService.getConfig('users').subscribe(data => {
          this.config = data;
          this.getConfig();
        });
      }
    );
  }

  getConfig() {
    this.name = this.config.name;
    this.type = this.config.type;
    this.columnFields = this.config.columndFields;
    this.displayedColumns = this.columnFields.filter(cf => cf.isVisble).map(cf => cf.columnName);
  }
}
