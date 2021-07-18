import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { UploadService } from '../services/upload.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  code = ''
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private docService: UploadService) { }

  ngOnInit() {
    // console.log(this.data)
  }

  submit() {
    this.docService.downloadFiles(this.data.id, parseInt(this.code))
      .subscribe((response: any) => {
        this.dialogRef.close(JSON.stringify(response));
      })
  }

}
