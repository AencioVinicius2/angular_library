import { Component, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(
    private _cdRef: ChangeDetectorRef
  ) {}

  changeDetection() {
    this._cdRef.detectChanges();
  }
}
