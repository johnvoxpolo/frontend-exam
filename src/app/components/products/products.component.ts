import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/shared/services/config.service';
import { ProductsService } from 'src/app/shared/services/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  config: any;
  data: any;
  columnFields: any[];

  name: string;
  type: string;
  displayedColumns: string[];

  constructor(
    private productsService: ProductsService,
    private location: Location,
    private configService: ConfigService,
  ) { }

  goBack() {
    this.location.back();
  }

  ngOnInit() {

    this.productsService.getData().subscribe(
      data => {
        this.data = data;
        this.configService.getConfig('products').subscribe(data => {
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