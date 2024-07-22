
// import { CommonModule } from '@angular/common';
// import { Component } from '@angular/core';
// import { HttpClientModule } from '@angular/common/http';
// import { ButtonModule } from 'primeng/button';
// import { DownloadFileService } from '../../services/download-file.service';

// @Component({
//   selector: 'app-health-funds',
//   standalone: true,
//   imports: [CommonModule, ButtonModule, HttpClientModule],
//   templateUrl: './health-funds.component.html',
//   styleUrls: ['./health-funds.component.scss'],
//   providers: [DownloadFileService]
// })
// export class HealthFundsComponent {
//   constructor(private _downloadService: DownloadFileService) {}

//   downloadFile() {
//     this._downloadService.downloadPdf();
//   }
// }
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';
import { DownloadFileService } from '../../services/download-file.service';

@Component({
  selector: 'app-health-funds',
  standalone: true,
  imports: [CommonModule, ButtonModule, HttpClientModule],
  templateUrl: './health-funds.component.html',
  styleUrls: ['./health-funds.component.scss'],
  providers: [DownloadFileService]
})
export class HealthFundsComponent {
  constructor(private _downloadService: DownloadFileService) {}

  downloadFile() {
    this._downloadService.downloadPdf();
  }
}
