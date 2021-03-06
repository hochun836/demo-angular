import { OverlayContainer } from '@angular/cdk/overlay';
import { Query } from '@angular/compiler/src/core';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-angular-material',
  templateUrl: './angular-material.component.html',
  styleUrls: ['./angular-material.component.scss']
})
export class AngularMaterialComponent implements OnInit {

  @ViewChild('container', { static: true }) container: ElementRef<HTMLDivElement>;

  theme = 'custom-theme-1';

  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;

  constructor(
    private overlayContainer: OverlayContainer
  ) { }

  ngOnInit(): void {
    this.container.nativeElement.classList.add(this.theme);
    this.overlayContainer.getContainerElement().classList.add(this.theme);
  }

  toggleTheme() {
    const originalTheme = this.theme;
    this.theme = this.theme === 'custom-theme-1' ? 'custom-theme-2' : 'custom-theme-1';
    this.container.nativeElement.classList.remove(originalTheme);
    this.container.nativeElement.classList.add(this.theme);
    this.overlayContainer.getContainerElement().classList.remove(originalTheme);
    this.overlayContainer.getContainerElement().classList.add(this.theme);
  }
}
