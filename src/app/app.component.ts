import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular';
import {americanFootball, beaker, card, grid, logoAppleAppstore} from "ionicons/icons";
import {addIcons} from "ionicons";
import {MenuComponent} from "./components/menu/menu.component";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet, MenuComponent],
})
export class AppComponent {
  constructor() {
    addIcons({card, grid, americanFootball, logoAppleAppstore, beaker})
  }
}
