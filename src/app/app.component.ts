import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular';
import {albums, americanFootball, beaker, car, card, grid, logoAppleAppstore} from "ionicons/icons";
import {addIcons} from "ionicons";
import {MenuComponent} from "./components/menu/menu.component";
import {register} from "swiper/element/bundle";
register();
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet, MenuComponent],
})
export class AppComponent {
  constructor() {
    addIcons({card, grid, americanFootball, logoAppleAppstore, beaker, car
    , albums})
  }
}
