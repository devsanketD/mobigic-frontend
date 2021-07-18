import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { UploadService } from '../services/upload.service';


export interface PeriodicElement {
  name: string;
  link: number;
  code: number;
}


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public dialog: MatDialog, private uploadService: UploadService) { }


  displayedColumns: string[] = ['name', 'link', 'code', 'action'];

  dataSource

  fileName = '';


  ngOnInit() {
    this.getFiles()
  }

  openDialog(record) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    const dialogRef = this.dialog.open(DialogComponent, {
      autoFocus: true,
      data: {
        id: record._id
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const resp = JSON.parse(result);
        console.log(resp)
        window.open(`http://localhost:4000/${resp.data.filename}`, '_blank')
      }
    });
  }

  getFiles() {
    this.uploadService.getFiles()
      .subscribe((response: any) => {
        this.dataSource = response.data.map((record, index) => {
          return {
            id: index + 1,
            _id: record.id,
            name: record.name,
            link: `http://localhost:4000/${record.link}`,
            code: record.code,
          }
        })
        console.log('resp :', this.dataSource)
      })
  }

  delete(element) {
    this.uploadService.deleteFile(element).subscribe(response => {
      this.getFiles();
    })
  }

  onFileSelected(event) {

    const file: File = event.target.files[0];
    console.log('file: ', file);
    if (file) {

      this.fileName = file.name;

      const formData = new FormData();

      formData.append("file", file);


      this.uploadService.uploadFile(formData).subscribe((response: any) => {
        this.getFiles()
      })
    }
  }
}

