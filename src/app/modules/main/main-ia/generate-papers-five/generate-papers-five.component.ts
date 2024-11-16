import {Component, EventEmitter, Output} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ShowLeafletComponent} from "../show-leaflet/show-leaflet.component";

@Component({
  selector: 'app-generate-papers-five',
  templateUrl: './generate-papers-five.component.html',
  styleUrls: ['./generate-papers-five.component.scss']
})
export class GeneratePapersFiveComponent {
  loading: boolean = true;
  loaderDuration = 2000;
  showLeaflet: boolean = false;

  @Output() Current = new EventEmitter();

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false;
    }, this.loaderDuration);
  }

  Back() {
    this.Current.emit({
      step: 1
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(ShowLeafletComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
