module.exports = [
  {
    key: 'dashboard',
    name: '展馆总览',
    icon: 'laptop',
  },
  {
    key: 'users',
    name: '员工管理',
    icon: 'user',
  },
  {
    key: 'request',
    name: 'mock拦截测试',
    icon: 'api',
  },
  {
    key: 'UIElement',
    name: '日志管理',
    icon: 'camera-o',
    clickable: false,
    child: [
      {
        key: 'iconfont',
        name: '日志列表',
        icon: 'heart-o',
      },
      // {
      //   key: 'dataTable',
      //   name: 'DataTable',
      //   icon: 'database',
      // },
      // {
      //   key: 'dropOption',
      //   name: 'DropOption',
      //   icon: 'bars',
      // },
      // {
      //   key: 'search',
      //   name: 'Search',
      //   icon: 'search',
      // },
      {
        key: 'editor',
        name: '日志编辑',
        icon: 'edit',
      },
      // {
      //   key: 'layer',
      //   name: 'layer (Function)',
      //   icon: 'credit-card',
      // },
    ],
  },
  // {
  //   key: 'chart',
  //   name: 'Recharts',
  //   icon: 'code-o',
  //   child: [
  //     {
  //       key: 'lineChart',
  //       name: 'LineChart',
  //       icon: 'line-chart',
  //     },
  //     {
  //       key: 'barChart',
  //       name: 'BarChart',
  //       icon: 'bar-chart',
  //     },
  //     {
  //       key: 'areaChart',
  //       name: 'AreaChart',
  //       icon: 'area-chart',
  //     },
  //   ],
  // },
  {
    key: 'navigation',
    name: '其他',
    icon: 'setting',
    child: [
      {
        key: 'navigation1',
        name: '待添加1',
      },
      {
        key: 'navigation2',
        name: '待添加2',
        child: [
          {
            key: 'navigation21',
            name: '待添加3',
          },
          {
            key: 'navigation22',
            name: '待添加4',
          },
        ],
      },
    ],
  },
]
