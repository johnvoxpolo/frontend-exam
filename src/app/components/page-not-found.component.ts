import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  template: `
        <h2>Page not found</h2>
    `
})
export class PageNotFoundComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
    setTimeout(() => {
      this.location.back();
    }, 5000); 
  }

}
