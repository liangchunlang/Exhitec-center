import React, { PropTypes } from 'react'
import { Table, Tag } from 'antd'
import styles from './recentSales.less'
import { color } from '../../../utils'

const status = {
  1: {
    color: color.green,
    text: '值班中',
  },
  2: {
    color: color.red,
    text: '已下班',
  },
}

function RecentSales ({ data }) {
  const columns = [
    {
      title: '名字',
      dataIndex: 'name',
    }, {
      title: '值班状态',
      // dataIndex: 'status',
      render: (text, it) => {
        if (it.price > 8) {
          return (
            <Tag color={status[2].color}>{status[2].text}</Tag>
          )
        } else {
          return (
            <Tag color={status[1].color}>{status[1].text}</Tag>
          )
        }
      },
    }, {
      title: '上班时间',
      dataIndex: 'date',
      // render: text => new Date(text).format('HH:mm:ss'),
    }, {
      title: '今日值班时间',
      dataIndex: 'price',
      render: (text) => {
        if (text > 8) {
          return (
            <span style={{ color: status[2].color }}>{text}小时</span>
          )
        }else {
          return (
            <span style={{ color: status[1].color }}>{text}小时</span>
          )
        }
      },
    },
  ]
  return (
    <div className={styles.recentsales}>
      <Table pagination={false} columns={columns} rowKey={(record, key) => key} dataSource={data.filter((item, key) => key < 5)} />
    </div>
  )
}

RecentSales.propTypes = {
  data: PropTypes.array,
}

export default RecentSales
