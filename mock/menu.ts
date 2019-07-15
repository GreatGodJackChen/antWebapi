export default {
  // 支持值为 Object 和 Array
  'GET /api/getMenuData':
    [{
      name: '欢迎',
      icon: 'smile',
      path: '/',
      component: './Welcome'
    },
    {
      name: 'form',
      icon: 'form',
      path: '/form',
      children: [
        {
          name: 'basic-form',
          path: '/form/basic-form',
          component: './form/basic-form',
        }
      ]
      },
      {
        path: '/list',
        icon: 'table',
        name: 'list',
        component: null,
        actions:null,
        children: [
          {
            name: 'table-list',
            path: '/list/table-list',
            component: './list/table-list',
            actions: ['add', 'save'],
          }
        ]
      },
      {
        name: 'exception',
        icon: 'warning',
        path: '/exception',
        children: [
          {
            name: '403',
            path: '/exception/403',
            component: './exception/403',
          },
          {
            name: '404',
            path: '/exception/404',
            component: './exception/404',
          },
          {
            name: '500',
            path: '/exception/500',
            component: './exception/500',
          },
        ],
      },
      {
        name: 'account',
        icon: 'user',
        path: '/account',
        children: [
          {
            name: 'center',
            path: '/account/center',
            component: './account/center',
          },
          {
            name: 'settings',
            path: '/account/settings',
            component: './account/settings',
          },
        ],
      },
      {
        component: './404',
      }]
}
