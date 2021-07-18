import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private client: HttpClient) { }

  uploadFile(file) {
    const headers = new HttpHeaders()
      .set('Authorization', "Bearer " + localStorage.getItem('token'))
    return this.client.post(`${environment.baseUrl}${environment.uploadFiles}`, file, { 'headers': headers })
  }

  getFiles() {
    const headers = new HttpHeaders()
      .set('Authorization', "Bearer " + localStorage.getItem('token'))
    return this.client.get(`${environment.baseUrl}${environment.getFiles}`, { 'headers': headers })
  }

  deleteFile(record) {
    const headers = new HttpHeaders()
      .set('Authorization', "Bearer " + localStorage.getItem('token'))
    const url = environment.deleteFiles.replace('{id}', record._id)
    return this.client.delete(`${environment.baseUrl}${url}`, { 'headers': headers })
  }

  downloadFiles(id, code) {
    const headers = new HttpHeaders()
      .set('Authorization', "Bearer " + localStorage.getItem('token'))
    let url = environment.downloadFile.replace('_id', id)
    url = environment.downloadFile.replace('{code}', code)
    // console.log(`${environment.baseUrl}${environment.downloadFile}?id=${id}&code=${code}`)
    return this.client.get(`${environment.baseUrl}${environment.downloadFile}?id=${id}&code=${code}`, { 'headers': headers })
  }
}
