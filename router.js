import Vue from 'vue'
import Router from 'vue-router'
import Index from '~/pages/index'
import Second from '~/pages/second'
import PageSubdomain from '~/pages/subdo'

Vue.use(Router)

export function createRouter(ssrContext, createDefaultRouter, routerOptions) {
    let routes = [];
    const hostname = ssrContext ? ssrContext.req.headers.host : location.host;
    console.log(hostname)
    if (hostname.split('.').length === 3) {
        console.log('llegue al 3')
        routes = [
            {
                path: '/',
                component: PageSubdomain,
            }
        ];
    }
    else if (hostname.split('.').length === 2) {
        console.log('llegue al 2')
        routes = [
            {
                path: '/',
                component: Index,
            }
        ];
    }
    else if (hostname.split('.').length === 1) {
        console.log('llegue al 1')
        routes = [
            {
                path: '/',
                component: Index,
            }
        ];
    }  

    console.log(routes)
    
    return new Router({
        mode: 'history',
        routes,
    })
}