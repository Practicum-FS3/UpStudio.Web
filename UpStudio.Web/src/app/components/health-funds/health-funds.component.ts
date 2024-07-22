import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DownloadFileService } from '../../services/download-file.service';

@Component({
  selector: 'app-health-funds',
  standalone: true,
  imports: [CommonModule, ButtonModule,HttpClient,DownloadFileService], // הוסף כאן את ButtonModule
  templateUrl: './health-funds.component.html',
  styleUrls: ['./health-funds.component.scss']
})
export class HealthFundsComponent {

  downloadFile() {
    this._downloadService.downloadPdf();
  }
  constructor(private _downloadService: DownloadFileService) {}
}
