import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonAvatar,
  IonChip,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader, IonItem,
  IonLabel, IonList, IonListHeader,
  IonRow, IonThumbnail,
  IonTitle,
  IonToolbar
} from '@ionic/angular';
import {HeaderComponent} from "../../components/header/header.component";

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.page.html',
  styleUrls: ['./avatar.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent, IonGrid, IonRow, IonCol, IonChip, IonAvatar, IonLabel, IonList, IonListHeader, IonItem, IonThumbnail]
})
export class AvatarPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
