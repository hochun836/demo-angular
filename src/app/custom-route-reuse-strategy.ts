import { ActivatedRouteSnapshot, DetachedRouteHandle, RouteReuseStrategy } from '@angular/router';

/**
 * 參考1: https://blog.kevinyang.net/2018/11/06/ng-RouteReuseStrategy/
 * 參考2: https://github.com/angular/angular/blob/11.0.5/packages/router/src/route_reuse_strategy.ts#L33-L60
 *
 * 除了 implements RouteReuseStrategy
 * 也可 extends BaseRouteReuseStrategy
 */

export class CustomRouteReuseStrategy implements RouteReuseStrategy {

  public static handlers: { [key: string]: DetachedRouteHandle } = {};

  constructor () {
    console.log('CustomRouteReuseStrategy created ...');
  }

  // =========================
  // 判斷路由是否能重複使用
  // =========================
  public shouldDetach(route: ActivatedRouteSnapshot): boolean {
    // 默認所有的路由設定都可以重複使用
    // 可透過 route.data 的方式來設定重複使用的規則

    console.log(route);
    console.log(route.data['reuse']);

    return true;
  }

  // =========================
  // 當路由離開時，會觸發此方法
  // =========================
  public store(
    route: ActivatedRouteSnapshot,
    handle: DetachedRouteHandle
  ): void {
    // 將目前路由內容暫存起來
    CustomRouteReuseStrategy.handlers[route.routeConfig.path] = handle;
  }

  // =========================
  // 當路由進入時，可判斷是否還原路由的暫存內容
  // =========================
  public shouldAttach(route: ActivatedRouteSnapshot): boolean {
    return (
      !!route.routeConfig && !!CustomRouteReuseStrategy.handlers[route.routeConfig.path]
    );
  }

  // =========================
  // 從 Cache 中取得對應的暫存內容
  // =========================
  public retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
    if (!route.routeConfig) {
      return null;
    }
    return CustomRouteReuseStrategy.handlers[route.routeConfig.path];
  }

  // =========================
  // 判斷是否同一路由
  // =========================
  public shouldReuseRoute(future: ActivatedRouteSnapshot, current: ActivatedRouteSnapshot): boolean {
    return future.routeConfig === current.routeConfig;
  }
}
