import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'Pokedex';
  constructor(
    private location: Location
  ) { }

  ngOnInit() {
  }

  onReturn(): void {
    this.location.back();
  }

}
