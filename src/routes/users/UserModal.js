import React, { PropTypes } from 'react'
import { Form, Input, InputNumber, Radio, Modal, Cascader } from 'antd'
const FormItem = Form.Item
import city from '../../utils/city'

const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
}

const modal = ({
  visible,
  type,
  item = {},
  onOk,
  onCancel,
  form: {
    getFieldDecorator,
    validateFields,
    getFieldsValue,
  },
}) => {
  function handleOk () {
    validateFields((errors) => {
      if (errors) {
        return
      }
      const data = {
        ...getFieldsValue(),
        key: item.key,
      }
      onOk(data)
    })
  }

  const modalOpts = {
    title: `${type === 'create' ? '新建员工信息' : '更新员工信息'}`,
    visible,
    onOk: handleOk,
    onCancel,
    wrapClassName: 'vertical-center-modal',
  }

  return (
    <Modal {...modalOpts}>
      <Form layout="horizontal">
        <FormItem label="姓名：" hasFeedback {...formItemLayout}>
          {getFieldDecorator('name', {
            initialValue: item.name,
            rules: [
              {
                required: true,
                message: '姓名未填写',
              },
            ],
          })(<Input />)}
        </FormItem>
        <FormItem label="职位：" hasFeedback {...formItemLayout}>
          {getFieldDecorator('Job', {
            initialValue: item.Job,
            rules: [
              {
                required: true,
                message: '昵称未填写',
              },
            ],
          })(<Input />)}
        </FormItem>
        <FormItem label="性别" hasFeedback {...formItemLayout}>
          {getFieldDecorator('isMale', {
            initialValue: item.isMale,
            rules: [
              {
                required: true,
                type: 'boolean',
                message: '请选择性别',
              },
            ],
          })(
            <Radio.Group>
              <Radio value>男</Radio>
              <Radio value={false}>女</Radio>
            </Radio.Group>
          )}
        </FormItem>
        <FormItem label="年龄：" hasFeedback {...formItemLayout}>
          {getFieldDecorator('age', {
            initialValue: item.age,
            rules: [
              {
                required: true,
                type: 'number',
                message:"此处不能为空，且必须为数字"
              },
            ],
          })(<InputNumber min={18} max={100} />)}
        </FormItem>
        <FormItem label="联系方式：" hasFeedback {...formItemLayout}>
          {getFieldDecorator('phone', {
            initialValue: item.phone,
            rules: [
              {
                required: true,
                pattern: /^1[34578]\d{9}$/,
                message:"联系方式不能为空，且电话号码格式必须正确"
              },
            ],
          })(<Input />)}
        </FormItem>
        <FormItem label="电子邮箱：" hasFeedback {...formItemLayout}>
          {getFieldDecorator('email', {
            initialValue: item.email,
            rules: [
              {
                required: true,
                pattern: /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/,
                message:"邮箱不能为空，且邮箱地址格式必须正确"
              },
            ],
          })(<Input />)}
        </FormItem>
        <FormItem label="籍贯" hasFeedback {...formItemLayout}>
          {getFieldDecorator('address', {
            initialValue: item.address && item.address.split(' '),
            rules: [
              {
                required: true,
              },
            ],
          })(<Cascader
            size="large"
            style={{ width: '100%' }}
            options={city}
            placeholder="点击选择地址"
          />)}
        </FormItem>
      </Form>
    </Modal>
  )
}

modal.propTypes = {
  form: PropTypes.object.isRequired,
  visible: PropTypes.bool,
  type: PropTypes.string,
  item: PropTypes.object,
  onCancel: PropTypes.func,
  onOk: PropTypes.func,
}

export default Form.create()(modal)
