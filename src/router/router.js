import Vue from 'vue'
import Router from 'vue-router'

import cart from '../components/cart'
import catalog from '../components/catalog'
import mainPage from '../components/main-page'
import productPage from '../components/product-page'

Vue.use(Router);

let router = new Router({
    routes: [{
            path: '/',
            name: 'main-page',
            component: mainPage,

        },
        {
            path: '/catalog',
            name: 'catalog',
            component: catalog,
            props: true
        },
        {
            path: '/product-page',
            name: 'product',
            component: productPage,
        },
        {
            path: '/cart',
            name: 'cart',
            component: cart,
            props: true
        }
    ]
})

export default router;