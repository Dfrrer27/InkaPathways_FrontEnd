import { Component } from '@angular/core';
import {RootService} from "../../../../services/root.service";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-show-leaflet',
  templateUrl: './show-leaflet.component.html',
  styleUrls: ['./show-leaflet.component.scss']
})
export class ShowLeafletComponent {
  respuestas: string[] = [];

  constructor(private _rootService: RootService) {}

  ngOnInit(): void {
    this._rootService.userLeaflet().subscribe( {
      next: (data) => {
        this.respuestas = data.map((item: any) => item.respuesta);
      },
      error: (err) => {
        console.error("Error en la solicitud: ", err);
      }
    });
  }

  downloadleaflet() {
    const element = document.getElementById('showLeafletContent');
    if (element) {
      html2canvas(element).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        const imgWidth = 190;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        pdf.addImage(imgData, 'PNG', 10, 10, imgWidth, imgHeight);
        pdf.save('triptico.pdf');
      });
    } else {
      console.error("No se encontró el elemento con ID 'showLeafletContent'");
    }
  }
}
