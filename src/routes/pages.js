export default [
  {
    path: '/',
    component: () => import(/* webpackChunkName: "layout-default" */ '../layouts/Default.vue'),
    meta: { auth: false },
    children: [
      {
        path: '',
        name: 'page.home',
        component: () => import(/* webpackChunkName: "page-home" */ '../views/pages/Home.vue')
      }
    ]
  }
]
