import { Component, Input, OnInit } from '@angular/core';
import { JsonObj } from '../type';
import data from "src/assets/new-things.json"

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.css']
})
export class RectangleComponent implements OnInit {
  @Input() rectangle:JsonObj={
    id: 0,
    areaId: 0,
    sku: "",
    defaultSku: "",
    countActive: 0,
    joinedWith: null,
    status: ""
  };
  @Input() mode:string ='';


  constructor() { 

  }

  ngOnInit(): void {
  }

}
