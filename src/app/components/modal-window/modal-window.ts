import { Component, inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-window',
  imports: [],
  templateUrl: './modal-window.html',
  styleUrl: './modal-window.scss',
})
export class ModalWindow {
  readonly dialogRef = inject(MatDialogRef<ModalWindow>);
  save() {
    this.dialogRef.close({ a: 2 });
  }

  close() {
    this.dialogRef.close();
  }
}
