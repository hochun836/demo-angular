import { OverlayContainer } from '@angular/cdk/overlay';
import { DOCUMENT } from '@angular/common';
import { Component, Inject, NgZone, OnInit, Renderer2 } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { StorageService } from './common/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    public zone: NgZone,
    private renderer: Renderer2,
    private overlayContainer: OverlayContainer,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private storage: StorageService,
    @Inject(DOCUMENT) private document: Document,
  ) { }

  ngOnInit(): void {
    const url1 = this.domSanitizer.bypassSecurityTrustResourceUrl('assets/image/angular.svg');
    const url2 = this.domSanitizer.bypassSecurityTrustResourceUrl('assets/image/light-dark.svg');
    this.matIconRegistry.addSvgIconInNamespace('custom-svg', 'angular', url1);
    this.matIconRegistry.addSvgIconInNamespace('custom-svg', 'light-dark', url2);
    this.matIconRegistry.registerFontClassAlias('fontawesome', 'fa');
    this.zone.onUnstable.subscribe(() => { console.log('##### 事件 - 發生') });
    this.zone.onStable.subscribe(() => { console.log('##### 事件 - 結束') });

    let theme = this.storage.getItem('theme');
    theme = theme === 'dark-theme' ? 'dark-theme' : 'light-theme';
    this.renderer.addClass(this.document.body, theme);
    this.renderer.addClass(this.overlayContainer.getContainerElement(), theme);
  }
}
