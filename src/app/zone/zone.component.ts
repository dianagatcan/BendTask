import { Component, Input, OnInit } from '@angular/core';
import data from "src/assets/new-things.json"
import { JsonObj } from '../type';

@Component({
  selector: 'app-zone',
  templateUrl: './zone.component.html',
  styleUrls: ['./zone.component.css']
})
export class ZoneComponent implements OnInit {
  //Id = areaId
  @Input() id:number=0;
  //All the objects that belong in a zone
  rectangles:JsonObj[]=[];
  //Zone title
  heading:string= "";
  //All the objects that have joinedWith = null from a zone
  headNodes:JsonObj[]=[]
  //ordered list composed of each headNode + followers(rectangles that have joinedWith = to headNode.id)
  orderedRectangles:JsonObj[]=[]

  constructor() { }

  ngOnInit(): void {
    this.rectangles = data.filter( obj => obj.areaId === this.id)
    this.heading = decideHeading(this.id);
    //Select oll the headNodes
    this.headNodes = this.rectangles.filter(obj => obj.joinedWith === null)
    
    //Loop through headNodes to identify the followers and push head+followers in orderedRectangles
    this.headNodes.forEach(headNode => {
      this.orderedRectangles.push(headNode)
      this.orderedRectangles.push(...this.rectangles.filter(obj => obj.joinedWith === headNode.id))
    } )
  }

}

function decideHeading(areaId:number) : string{
  if(areaId === 1791){
    return 'Zona 1'
  }
  if(areaId === 1892){
    return 'Zona 2'
  }
  if(areaId === 1900){
    return 'Zona 4'
  }
  if(areaId === 1901){
    return 'Zona 5'
  }
  return 'undefined'
}


