import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonAvatar, IonBackButton,
  IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon, IonLabel, IonMenuToggle,
  IonRow,
  IonText,
  IonTitle,
  IonToolbar
} from '@ionic/angular';
import {HeaderComponent} from "../../components/header/header.component";
import {RouterLink} from "@angular/router";
import {addIcons} from "ionicons";
import {heart, star} from "ionicons/icons";

@Component({
  selector: 'app-grid-buttons',
  templateUrl: './grid-buttons.page.html',
  styleUrls: ['./grid-buttons.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent, IonText, IonGrid, IonRow, IonCol, IonButton, RouterLink, IonIcon, IonLabel, IonAvatar, IonBackButton, IonButtons, IonMenuToggle, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent]
})
export class GridButtonsPage implements OnInit {

  constructor() {
    addIcons({heart, star});
  }

  ngOnInit() {
  }

}
