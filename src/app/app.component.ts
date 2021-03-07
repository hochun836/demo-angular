import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, ElementRef, NgZone, OnInit, Renderer2, ViewChild } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild('container', { static: true }) containerRef: ElementRef<HTMLDivElement>;

  constructor(
    public zone: NgZone,
    private renderer: Renderer2,
    private overlayContainer: OverlayContainer,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
  ) { }

  ngOnInit(): void {
    this.renderer.addClass(this.containerRef.nativeElement, 'light-theme');
    this.renderer.addClass(this.overlayContainer.getContainerElement(), 'light-theme');
    const url = this.domSanitizer.bypassSecurityTrustResourceUrl('assets/image/angular.svg');
    this.matIconRegistry.addSvgIconInNamespace('custom-svg', 'angular', url);
    this.matIconRegistry.registerFontClassAlias('fontawesome', 'fa');
    this.zone.onUnstable.subscribe(() => { console.log('##### 事件 - 發生') });
    this.zone.onStable.subscribe(() => { console.log('##### 事件 - 結束') });
  }
}
