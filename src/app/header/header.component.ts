import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  header = 'Welcome to binding header';
  isTrue = true;

  constructor() {}

  ngOnInit(): void {}
}
