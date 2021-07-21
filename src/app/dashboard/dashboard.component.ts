import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { UploadService } from '../services/upload.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public dialog: MatDialog, private uploadService: UploadService) { }

  showLink = false;

  shareableLink = '';

  displayedColumns: string[] = ['name', 'code', 'action'];

  dataSource

  fileName = '';

  ngOnInit() {
    this.getFiles()
  }

  View(record) {
    window.open(`http://localhost:4000/${record.filename}`, '_blank')
  }

  shareLink(record) {
    this.shareableLink = record.shareLink;
    this.showLink = true;

    setTimeout(() => {
      this.shareableLink = '';
      this.showLink = false;
    }, 10000);
  }


  getFiles() {
    this.uploadService.getFiles()
      .subscribe((response: any) => {
        this.dataSource = response.data.map((record, index) => {
          return {
            id: index + 1,
            _id: record.id,
            name: record.name,
            filename: record.filename,
            code: record.code,
            shareLink: record.shareLink
          }
        })
        // console.log('resp :', this.dataSource)
      })
  }

  delete(element) {
    this.uploadService.deleteFile(element).subscribe(response => {
      this.getFiles();
    })
  }

  onFileSelected(event) {

    const file: File = event.target.files[0];
    
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

