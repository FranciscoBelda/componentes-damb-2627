import {Component, OnInit, signal} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  AlertButton,
  AlertInput,
  IonAlert,
  IonButton,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar
} from '@ionic/angular';
import {HeaderComponent} from "../../components/header/header.component";

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent, IonButton, IonAlert]
})
export class AlertPage implements OnInit {
  botonesAlert: AlertButton[] = [
    {
      text: 'Cancel',
      role: 'cancel',
      cssClass: 'secondary',
      handler: () => {
        console.log('Cancel clicked');
      }
    },
    {
      text: 'OK',
      handler: () => {
        console.log('OK clicked');
      }
    }
  ];
  inputsAlert: AlertInput[]=[
    {
      type: 'text',
      name: 'nombre',
      placeholder: 'Nombre',
    }
  ];
  botonesInput: AlertButton[]=[
    {
      text: 'Cancel',
      role: 'cancel',
      cssClass: 'secondary',
      handler: () => {
        console.log('Cancel clicked');
      }
    },
    {
      text: 'OK',
      handler: (data) => {
        console.log('OK clicked', data);
        this.nombre.set(data.nombre);
      }
    }
  ];
  nombre = signal<string>("");
  inputsRadio: AlertInput[] = [
    {
      type: "radio",
      label: 'Rojo',
      value: 'danger'
    },
    {
      type: "radio",
      label: 'Verde',
      value: 'success'
    },
    {
      type: "radio",
      label: 'Azul',
      value: 'primary'
    }
  ];
  botonesRadio: AlertButton[] = [
    {
      text: 'Cancel',
      role: 'cancel',
      cssClass: 'secondary',
      handler: () => {
        console.log('Cancel clicked');
      }
    },
    {
      text: 'OK',
      handler: (data) => {
        console.log('OK clicked', data);
        this.color.set(data);
      }
    }
  ];
  color = signal<string>("dark");

  constructor() { }

  ngOnInit() {
  }

}
