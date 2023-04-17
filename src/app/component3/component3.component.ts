// component3.component.ts

import { Component, OnInit } from '@angular/core';
import { FileTransferService } from '../file-transfer.service';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css']
})
export class Component3Component implements OnInit {
  processedFileResult: string | null = null;

  constructor(private fileTransferService: FileTransferService) { }

  ngOnInit() {
    
  }
}
