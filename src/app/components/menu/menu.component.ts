import {Component, inject, OnInit, signal, WritableSignal} from '@angular/core';
import {DataService} from "../../services/data-service";
import {Componente} from "../../common/interfaces";
import {addIcons} from "ionicons";
import {americanFootball, beaker, card, grid, logoAppleAppstore} from "ionicons/icons";
import {
  IonContent,
  IonHeader,
  IonIcon,
  IonItem, IonLabel,
  IonList, IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonTitle,
  IonToolbar
} from "@ionic/angular";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  imports: [
    IonMenu,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonMenuToggle,
    IonItem,
    RouterLink,
    IonIcon,
    IonLabel,
    IonListHeader
  ],
})
export class MenuComponent  implements OnInit {
  private readonly dataService: DataService =
    inject(DataService);
  componentes: WritableSignal<Componente[]> =
    signal<Componente[]>([]);

  constructor() {
  }

  ngOnInit() {
    this.loadComponentes();
  }

  private loadComponentes() {
    this.dataService.getComponentes().subscribe(
      {
        next: (value) => {
          this.componentes.set(value);
          console.log(this.componentes());
        },
        error: (error) => {
          console.error(error);
        },
        complete: () => {
          console.log('Datos cargados!');
        }
      }
    )
  }
}
