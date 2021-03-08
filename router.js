import Vue from 'vue'
import Router from 'vue-router'
import IndexMain from '~/pages/main/index'
import AboutMain from '~/pages/main/about'
import IndexLocal from '~/pages/local/index'
import IndexEcommerce from '~/pages/ecommerce/index'

Vue.use(Router)

export function createRouter(ssrContext, createDefaultRouter, routerOptions) {
    let routes = [];
    const hostname = ssrContext ? ssrContext.req.headers.host : location.host;
    console.log(hostname)
    if (hostname.split('.').length === 4) {
        console.log('llegue al 3')
        routes = [
            {
                path: '/',
                component: IndexEcommerce,
            }
        ];
    }
    else if (hostname.split('.').length === 3) {
        console.log('llegue al 3')
        if(hostname.split('.')[0] === 'www') {
            routes = [
                {
                    path: '/',
                    component: IndexMain,
                },
                {
                    path: '/about',
                    component: AboutMain,
                }
            ];
        } else {
            routes = [
                {
                    path: '/',
                    component: IndexLocal,
                }
            ];
        }
    }
    else if (hostname.split('.').length === 2) {
        console.log('llegue al 2')
        routes = [
            {
                path: '/',
                component: IndexMain,
            },
            {
                path: '/about',
                component: AboutMain,
            }
        ];
    }
    else if (hostname.split('.').length === 1) {
        console.log('llegue al 1')
        routes = [
            {
                path: '/',
                component: IndexMain,
            },
            {
                path: '/about',
                component: AboutMain,
            }
        ];
    }  

    console.log(routes)
    
    return new Router({
        mode: 'history',
        routes,
    })
}