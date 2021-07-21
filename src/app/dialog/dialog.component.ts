import { HttpClient } from '@angular/common/http';
import { Component, } from '@angular/core';
import { UploadService } from '../services/upload.service';
import { ActivatedRoute } from '@angular/router';
import FileSaver from 'file-saver';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {

  code = ''
  constructor(
    private docService: UploadService,
    private activatedRoute: ActivatedRoute,
    private httpClient: HttpClient
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(async (param: any) => {
      if (param.link && param.link.length) {
        let code = prompt("Please enter Security Code", "");
        if (code == null || code == "") {
          alert('Please enter valid code ...!')
        } else {
          const splitArray = param.link.split('/')
          this.docService.checkCode(splitArray[splitArray.length - 1], code).then((response: any) => {
            if (response.success) {
              FileSaver.saveAs(response.msg.link, response.msg.filename)
            } else {
              alert(response.msg)
            }
          })
        }
      }
    })
  }

}
