export default [
  {
    path: '/loading',
    component: () => import(/* webpackChunkName: "global-loading" */ '../global/Loading.vue')
  }
]
