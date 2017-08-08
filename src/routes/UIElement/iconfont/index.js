import React from 'react'
import { Iconfont } from '../../../components'
import { Table, Row, Col } from 'antd'
import styles from './index.less'

const iconlist = ['Cherry', 'Cheese', 'Bread', 'Beer', 'Beet', 'Bacon', 'Banana', 'Asparagus', 'Apple']

const IcoPage = () => <div className="content-inner">
  {/*<ul className={styles.list}>*/}
    {/*{iconlist.map(item => <li key={item}><Iconfont className={styles.icon} type={item} /><span className={styles.name}>{item}</span></li>)}*/}
  {/*</ul>*/}
  {/*<h2 style={{ margin: '16px 0' }}>Props</h2>*/}
  <Row>
    <Col lg={18} md={24}>
      <Table
        rowKey={(record, key) => key}
        pagination={false}
        bordered
        scroll={{ x: 800 }}
        columns={[
          {
            title: '标题',
            dataIndex: 'logName',
          },
          {
            title: '内容预览',
            dataIndex: 'logCont',
          },
          {
            title: '问题是否已处理',
            dataIndex: 'logTrue',
          },
          {
            title: '发表时间',
            dataIndex: 'logData',
          },
        ]}
        dataSource={[
          {
            logName: '设备维修日志',
            logCont: '三号厅大厅筒灯损坏，需要保修',
            logTrue: '未处理',
            logData: '2017-2-20',
          }]}
      />
    </Col>
  </Row>
</div>

export default IcoPage
