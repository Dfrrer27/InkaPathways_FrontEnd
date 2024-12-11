import { Component } from '@angular/core';
import {RootService} from "../../../../services/root.service";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import {forkJoin} from "rxjs";

@Component({
  selector: 'app-show-leaflet',
  templateUrl: './show-leaflet.component.html',
  styleUrls: ['./show-leaflet.component.scss']
})
export class ShowLeafletComponent {
  leafletData: any;
  predictionData: any;

  constructor(private _rootService: RootService) {}

  ngOnInit(): void {
    const userLeafletId = localStorage.getItem('userLeafletId');
    if (userLeafletId) {
      forkJoin({
        leaflet: this._rootService.userLeafletGet(Number(userLeafletId)),
        prediccion: this._rootService.userpredictionGet(),
      }).subscribe({
        next: ({ leaflet, prediccion }) => {
          this.leafletData = leaflet;
          this.predictionData = prediccion;
        },
        error: (err) => {
          console.error("Error en las solicitudes: ", err);
        }
      });
    } else {
      console.error('No userLeafletId found in localStorage.');
    }
  }

  downloadleaflet() {
    const element = document.getElementById('showLeafletContent');
    if (element) {
      html2canvas(element).then(canvas => {
        const imgData = canvas.toDataURL('image/png');

        const pdf = new jsPDF('landscape', 'mm', 'a3');
        const pageHeight = pdf.internal.pageSize.getHeight();

        const imgWidth = pdf.internal.pageSize.getWidth();
        const imgHeight = 295;

        console.log(imgWidth)
        console.log(imgHeight)
        let heightLeft = imgHeight;
        let position = 0;

        while (heightLeft > 0) {
          pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;
          if (heightLeft > 0) {
            pdf.addPage();
            position -= pageHeight;
          }
        }

        pdf.save('triptico_InkaPathways.pdf');
      });
    } else {
      console.error("No se encontró el elemento con ID 'showLeafletContent'");
    }
  }
}
