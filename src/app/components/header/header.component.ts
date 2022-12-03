import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  menuHidden = true;
  constructor() {}

  ngOnInit(): void {}

  menuToggle() {
    this.menuHidden = !this.menuHidden;
  }
}
