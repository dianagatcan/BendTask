import { Component, OnInit } from '@angular/core';
import data from "src/assets/new-things.json"

@Component({
  selector: 'app-zona1',
  templateUrl: './zona1.component.html',
  styleUrls: ['./zona1.component.css']
})
export class Zona1Component implements OnInit {
 info = data;
  constructor() { }

  ngOnInit(): void {
  }

}
