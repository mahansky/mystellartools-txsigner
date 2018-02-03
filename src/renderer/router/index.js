import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'transaction',
      component: require('@/components/Transaction').default
    },
    {
      path: '/explainer',
      name: 'explainer',
      component: require('@/components/Explainer').default
    },
    {
      path: '/signer',
      name: 'signer',
      component: require('@/components/Signer').default
    },
    {
      path: '/result',
      name: 'result',
      component: require('@/components/Result').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
