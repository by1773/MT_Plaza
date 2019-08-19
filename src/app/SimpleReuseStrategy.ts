import { RouteReuseStrategy, DefaultUrlSerializer, ActivatedRouteSnapshot, DetachedRouteHandle } from '@angular/router';

export class SimpleReuseStrategy implements RouteReuseStrategy {
    static get waitDelete(): string {
        return this._waitDelete;
    }
    static set waitDelete(value: string) {
        this._waitDelete = value;
    }


    public static handlers: { [key: string]: DetachedRouteHandle } = {};
    public static _cacheRouters: { [key: string]: any } = {};
    private static _waitDelete: string;
    public static _logout = false;

    public static deleteRouteSnapshot(name: string): void {
        // const rename = name.replace(/\//g, '_');
        // console.log(SimpleReuseStrategy.handlers);
        // if (SimpleReuseStrategy.handlers[rename]) {
        //     console.log('1111');
        //     delete SimpleReuseStrategy.handlers[rename];
        // } else {
        //     console.log('222');
        //     SimpleReuseStrategy.waitDelete = rename;
        // }
        if (SimpleReuseStrategy._cacheRouters[name]) {
            delete SimpleReuseStrategy._cacheRouters[name];
        }
        SimpleReuseStrategy.waitDelete = name;

    }
    /** 表示对所有路由允许复用 如果你有路由不想利用可以在这加一些业务逻辑判断 */
    public shouldDetach(route: ActivatedRouteSnapshot): boolean {
        // if (!route.routeConfig || route.routeConfig.loadChildren || !route.routeConfig.path) {
        //     return false;
        // }
        const arr = Object.keys(route.params);
        if ( arr.length > 0) {
        return false;
        }
        //  unuse配置为true不缓存
        if (route.routeConfig.data && route.routeConfig.data.unreuse ) {
            return false;
        }
        // 当有子路由时父级路由不可复用，否则会出现不可描述的错误^_^
        if (route.routeConfig.children) {
            return false;
        }
        return true;
    }

    /** 当路由离开时会触发。按path作为key存储路由快照&组件当前实例对象 */
    public store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
        if (SimpleReuseStrategy.waitDelete && SimpleReuseStrategy.waitDelete === route.routeConfig.path) {
            // 如果待删除是当前路由则不存储快照
            SimpleReuseStrategy.waitDelete = null;
            return;
        }
        // 退出的时候也不存储
        if (SimpleReuseStrategy._logout) {
            SimpleReuseStrategy._logout = false;
            return;
        }
        // SimpleReuseStrategy.handlers[this.getRouteUrl(route)] = handle;

        if (handle) {
            // console.log(route);
            SimpleReuseStrategy._cacheRouters[route.routeConfig.path] = {
              snapshot: route,
              handle: handle,
             // url: route['_routerState'].url.replace(/\/index\//, '')
            };
        } else {
            for (const key in SimpleReuseStrategy._cacheRouters) {
              if (route.routeConfig.path === key) {
                delete SimpleReuseStrategy._cacheRouters[route.routeConfig.path];
              }
            }
        }

    }

    /** 若 path 在缓存中有的都认为允许还原路由 */
    public shouldAttach(route: ActivatedRouteSnapshot): boolean {
        // return !!SimpleReuseStrategy.handlers[this.getRouteUrl(route)];
        return !!route.routeConfig && !!SimpleReuseStrategy._cacheRouters[route.routeConfig.path];
    }

    /** 从缓存中获取快照，若无则返回null */
    public retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
        // if (!route.routeConfig) {
        //     return null;
        // }

        // return SimpleReuseStrategy.handlers[this.getRouteUrl(route)];
        if ( !route.routeConfig || !SimpleReuseStrategy._cacheRouters[route.routeConfig.path]) {
            return null;
          }
          return SimpleReuseStrategy._cacheRouters[route.routeConfig.path].handle || null;
    }

    /** 进入路由触发，判断是否同一路由 */
    public shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
        return (future.routeConfig === curr.routeConfig) && (JSON.stringify(future.params) === JSON.stringify(curr.params));
    }

    private getRouteUrl(route: ActivatedRouteSnapshot) {
        return route['_routerState'].url.replace(/\//g, '_');
    }
}
