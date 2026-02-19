import { filter } from 'rxjs';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Settings } from '../settings/settings';
import { ModalWindow } from '../modal-window/modal-window';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-page',
  imports: [MatDialogModule, CommonModule],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainPage {
  dialog = inject(MatDialog);

  arr = [
    {
      id: 1,
      name: 'John',
    },
    {
      id: 2,
      name: 'Jane',
    },
    {
      id: 3,
      name: 'Bob',
    },
  ];

  trackById(index: number, item: any) {
    return item.id;
  }

  showModal() {
    this.dialog
      .open(ModalWindow)
      .afterClosed()
      .pipe(filter((data) => !!data))
      .subscribe((data) => {
        console.log(data);
      });
  }
}
