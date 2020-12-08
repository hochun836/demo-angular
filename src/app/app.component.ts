import { Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  private _routerSubscription: any;
  breadcrumbs = [];

  ENV_NAME = environment.ENV_NAME;
  title = 'demo-angular';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public zone: NgZone,
  ) { }

  ngOnInit(): void {
    this._routerSubscription = this.router.events.subscribe(event => {
      // console.log('#', event);
      // console.log('#', event, this.activatedRoute);
      if (event instanceof NavigationEnd) {
        console.log('#', event, this.activatedRoute);
        this.breadcrumbs.length = 0;
        this.createBreadcrumbs(this.activatedRoute);
      }
    });
    this.zone.onUnstable.subscribe(() => { console.log('##### 事件 - 發生') });
    this.zone.onStable.subscribe(() => { console.log('##### 事件 - 結束') });
  }

  activate(e) {
    console.log('activate route', e);
  }

  createBreadcrumbs(route: ActivatedRoute) {

    const children: ActivatedRoute[] = route.children;
    if (children.length === 0) {
      return;
    }

    for (const child of children) {
      if (child.outlet !== 'primary') {
        continue;
      }
      const breadcrumb = {
        label: child.snapshot.data['breadcrumb'],
        url: child.snapshot.routeConfig.path,
      };
      if (child.component) {
        this.breadcrumbs.push(breadcrumb);
      }
      return this.createBreadcrumbs(child);
    }
  }

  ngOnDestroy(): void {
      this._routerSubscription.unsubscribe();
  }
}
