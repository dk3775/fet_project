// component1.component.ts

import { Component } from '@angular/core';
import { FileTransferService } from '../file-transfer.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component {
  fileSelected = false;

  constructor(
    private fileTransferService: FileTransferService,
    private router: Router
  ){}

  onFileSelected(event: any) {
    const file = event.target.files[0];
    this.fileTransferService.transferFile(file);
    this.fileSelected = true;
  }

  onSubmit() {
    console.log('File uploaded!!');
    this.router.navigate(['/component2']);
    
  }
}
