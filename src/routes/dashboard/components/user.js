import React, { PropTypes } from 'react'
import { Button } from 'antd'
import styles from './user.less'
// import CountUp from 'react-countup'
import { color } from '../../../utils'


function User ({ avatar, name, email, sales, sold }) {
  return (<div className={styles.user}>
    <div className={styles.header}>
      <div className={styles.headerinner}>
        <div className={styles.avatar} style={{ backgroundImage: `url(${avatar})` }} />
        <h5 className={styles.name}>{name}</h5>
        <p>{email}</p>
      </div>
    </div>
    <div className={styles.number}>
      <div className={styles.item}>
        <p>年龄</p>
        <p style={{ color: color.green }}>{sales}</p>
      </div>
      <div className={styles.item}>
        <p>职位</p>
        <p style={{ color: color.blue }}>{sold}</p>
      </div>
    </div>
    <div className={styles.footer}>
      <Button type="ghost" size="large">查看详细资料</Button>
    </div>
  </div>)
}

User.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  email: PropTypes.string,
  sales: PropTypes.string,
  sold: PropTypes.string,
}

export default User
