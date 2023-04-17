import { Component, OnInit } from '@angular/core';
import { FileTransferService } from '../file-transfer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {
  file: File | null = null;

  constructor(
    private fileTransferService: FileTransferService,
    private router: Router
    ) { }

  ngOnInit() {
    this.fileTransferService.currentFile.subscribe(file => {
      this.file = file;
    });
  }
  processFile() {
    console.log('Processing file...');
    this.router.navigate(['/component3']);
  }
}
