import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  ActionSheetButton,
  IonActionSheet,
  IonButton,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar
} from '@ionic/angular';
import {HeaderComponent} from "../../components/header/header.component";
import {addIcons} from "ionicons";
import {caretForwardCircle, close, heart, shareSocial, trash} from "ionicons/icons";

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent, IonButton, IonActionSheet]
})
export class ActionSheetPage implements OnInit {
  buttonsAS: ActionSheetButton[] = [
    {
      text: 'Delete',
      role: "destructive",
      icon: 'trash',
      cssClass: 'rojo',
      handler: () => {
        console.log('Delete clicked');
      }
    },  {
      text: 'Share',
      icon: 'share-social',
      handler: () => {
        console.log('Share clicked');
      }
    },  {
      text: 'Play',
      icon: 'caret-forward-circle',
      handler: () => {
        console.log('Play clicked');
      }
    },  {
      text: 'Favorite',
      icon: 'heart',
      handler: () => {
        console.log('Favorite clicked');
      }
    },  {
      text: 'Cancel',
      role: "cancel",
      icon: 'close',
      handler: () => {
        console.log('Cancel clicked');
      }
    }
  ];

  constructor() {
    addIcons({trash, heart, caretForwardCircle, shareSocial, close});
  }

  ngOnInit() {
  }

}
