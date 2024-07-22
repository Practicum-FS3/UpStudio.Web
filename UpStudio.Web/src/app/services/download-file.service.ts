
//  DownloadFileService 


// // import { Injectable } from '@angular/core';

// // @Injectable({
// //   providedIn: 'root'
// // })
// // export class DownloadFileService {

// //   constructor() { }
// // }
// // import { HttpClient } from '@angular/common/http';
// // import { Injectable } from '@angular/core';
// // import { Observable } from 'rxjs';


// // @Injectable({
// //   providedIn: 'root'
// // })
// // export class DownloadFileService {

// //   constructor(private http: HttpClient) { }
// //     downloadFile(fileUrl: string): Observable<Blob> {
// //     return this.http.get(fileUrl, { responseType: 'blob' });
// //   }


// //     downloadPdf() {
// //     const fileUrl = 'URL_TO_YOUR_SERVER_ENDPOINT'; // עדכני ל-URL של השרת שלך
// //     this.downloadFile(fileUrl).subscribe((response: Blob) => {
// //       const url = window.URL.createObjectURL(response);
// //       const a = document.createElement('a');
// //       a.href = url;
// //       a.download = 'downloaded_file.pdf'; // שם הקובץ שיורד
// //       document.body.appendChild(a);
// //       a.click();
// //       document.body.removeChild(a);
// //       window.URL.revokeObjectURL(url);
// //     });
// // }
// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';


// @Injectable({
//   providedIn: 'root'
// })
// export class DownloadFileService {

//   constructor(private http: HttpClient) { }
//     downloadFile(fileUrl: string): Observable<Blob> {
//     return this.http.get(fileUrl, { responseType: 'blob' });
//   }


//     downloadPdf() {
//     const fileUrl = 'URL_TO_YOUR_SERVER_ENDPOINT'; // עדכני ל-URL של השרת שלך
//     // const fileUrl = 'https://fireplace.co.il/wp-content/uploads/2019/06/pdf-file-for-example.pdf'; // עדכני ל-URL של השרת שלך
//     this.downloadFile(fileUrl).subscribe((response: Blob) => {
//       const url = window.URL.createObjectURL(response);
//       const a = document.createElement('a');
//       a.href = url;
//       a.download = 'https://fireplace.co.il/wp-content/uploads/2019/06/pdf-file-for-example.pdf'; // שם הקובץ שיורד
//       document.body.appendChild(a);
//       a.click();
//       document.body.removeChild(a);
//       window.URL.revokeObjectURL(url);
//     });
// }

// }

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DownloadFileService {
  constructor(private http: HttpClient) {}

  downloadFile(fileUrl: string): Observable<Blob> {
    return this.http.get(fileUrl, { responseType: 'blob' });
  }

  downloadPdf() {
    const fileUrl = 'https://fireplace.co.il/wp-content/uploads/2019/06/pdf-file-for-example.pdf'; // Update to your file URL
    this.downloadFile(fileUrl).subscribe((response: Blob) => {
      const url = window.URL.createObjectURL(response);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'downloaded_file.pdf'; // Name of the file to be downloaded
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    });
  }
}