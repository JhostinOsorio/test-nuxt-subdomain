import Vue from 'vue'
import Router from 'vue-router'
import Index from '~/pages/index'
import Second from '~/pages/second'
import PageSubdomain from '~/pages/subdo'

Vue.use(Router)

export function createRouter(ssrContext, createDefaultRouter, routerOptions) {
    let routes = [];
    const hostname = ssrContext ? ssrContext.req.headers.host : location.host;
    if (hostname.split('.').length === 1) {
        routes = [
            {
                path: '/',
                component: Second,
            }
        ];
    } else if (hostname.split('.').length === 2) {
        routes = [
            {
                path: '/',
                component: Index,
            }
        ];
    } else if (hostname.split('.').length === 3) {
        routes = [
            {
                path: '/',
                component: PageSubdomain,
            }
        ];
    }
    return new Router({
        mode: 'history',
        routes,
    })
}