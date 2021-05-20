import { Component } from '@angular/core';
import {completeIconSet} from "../../../cx-icon-lib/icons";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  iconSet = completeIconSet;
}
