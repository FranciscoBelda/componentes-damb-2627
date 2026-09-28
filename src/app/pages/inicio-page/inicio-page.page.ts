import {Component, inject, OnInit, signal, WritableSignal} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader, IonMenuButton,
  IonTitle,
  IonToolbar
} from '@ionic/angular';
import {DataService} from "../../services/data-service";
import {Componente} from "../../common/interfaces";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-inicio-page',
  templateUrl: './inicio-page.page.html',
  styleUrls: ['./inicio-page.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonList, IonListHeader, IonItem, IonIcon, IonLabel, RouterLink, IonMenuButton, IonButtons]
})
export class InicioPagePage implements OnInit {
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
