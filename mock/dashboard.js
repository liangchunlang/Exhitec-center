import { color } from '../src/utils/theme'
const Mock = require('mockjs')
import mockStorge from '../src/utils/mockStorge'

let dataKey = mockStorge('Dashboard', Mock.mock({
  'sales|8': [
    {
      'name|+1': 1,
      '规划战略厅|30-120': 1,
      '历史文化厅|20-180': 1,
      '城市概况厅|30-230': 1,
    },
  ],
  cpu: {
    'usage|50-600': 1,
    space: 825,
    'cpu|40-90': 1,
    'data|20': [
      {
        'cpu|20-80': 1,
      },
    ],
  },
  browser: [
    {
      name: '历史文化厅',
      percent: 43.3,
      status: 1,
    },
    {
      name: '规划战略厅',
      percent: 33.4,
      status: 2,
    },
    {
      name: '城市概况厅',
      percent: 34.6,
      status: 3,
    },
    {
      name: '建设成就厅',
      percent: 12.3,
      status: 4,
    },
    {
      name: '产业发展厅',
      percent: 3.3,
      status: 1,
    },
    {
      name: '未来城市3D影院',
      percent: 2.53,
      status: 1,
    },
  ],
  user: {
    name: '小浪',
    email: '122572694@qq.com',
    sales: '25岁',
    sold: 'web前端工程师',
    avatar: 'http://117.48.197.227/langimg/lang.png',
  },
  'completed|8': [
    {
      'name|+1': 1,
      '1号厅|1200-5000': 1,
      '2号厅|1300-6000': 1,
    },
  ],
  'comments|5': [
    {
      name: '@cname',
      'status|1-3': 1,
      content: '@cparagraph(1, 3)',
      avatar () {
        return Mock.Random.image('48x48', Mock.Random.color(), '#757575', 'png', this.name.substr(0, 1))
      },
      date () {
        return `2017-${Mock.Random.date('MM-dd')} ${Mock.Random.time('HH:mm:ss')}`
      },
    },
  ],
  'recentSales|36': [
    {
      'id|+1': 1,
      name: '@cname',
      'status|1-2': 1,
      date () {
        return `${Mock.Random.time('A HH:mm:ss')}`
      },
      'price|5-10.1-2': 1,
    },
  ],
  quote: {
    name: '李华',
    title: '设备维修日志',
    content: '三号厅大厅筒灯损坏，需要保修',
    avatar: 'http://117.48.197.227/langimg/touxiang.png',
  },
  numbers: [
    {
      icon: 'laptop',
      color: color.blue,
      title: '总设备数量',
      number: 231,
    }, {
      icon: 'loading',
      color: color.green,
      title: '已开启设备',
      number: 153,
    }, {
      icon: 'poweroff',
      color: color.red,
      title: '已关闭设备',
      number: 75,
    }, {
      icon: 'team',
      color: color.peach,
      title: '当前展馆参观人数',
      number: 124,
    },
  ],
}))

module.exports = {
  'GET /api/dashboard' (req, res) {
    res.json(global[dataKey])
  },
}
