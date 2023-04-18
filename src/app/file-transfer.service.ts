// file-transfer.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileTransferService {
  private fileSource = new BehaviorSubject<File | null>(null);
  public currentFile = this.fileSource.asObservable();

  constructor() { }

  transferFile(file: File) {
    this.fileSource.next(file);
  }

  get fileUrl() {
    return this.fileSource.value ? URL.createObjectURL(this.fileSource.value) : "";
  }

}
