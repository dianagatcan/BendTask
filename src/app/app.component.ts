import { Component } from '@angular/core';
import data from "src/assets/new-things.json";
import _ from "lodash";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bend-task';

  //Search through data for unique areaId(zones)
  uniqueZones = _.uniq(_.map(data, 'areaId'));
}