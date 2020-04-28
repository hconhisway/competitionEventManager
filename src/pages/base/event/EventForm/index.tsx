import * as React from 'react';
import Form, { FormComponentProps } from 'antd/lib/form';
import { FILTER_FORM_LAYOUT } from '@/constant';
import { Input } from 'antd';
import styles from './index.scss';
//import { DatePicker } from 'antd';
import { InputNumber } from 'antd';
import { Select } from 'antd';

const { Option } = Select;

import { compose, withState } from 'recompose';
import { EventEditModel } from '@/interfaces/event';
import ModalButtons from '@/components/ModalButtons';
//const dateFormat = 'YYYY-MM-DD';

export interface UserFormProps extends FormComponentProps {
  saving: boolean;
  detailData?: EventEditModel;
  onClose: () => void;
  onSubmit: (data: EventEditModel) => void;
}

class UserForm extends React.PureComponent<UserFormProps> {
  public componentDidMount() {
    const { detailData } = this.props;
    if (detailData) {
      this.props.form.setFieldsValue(detailData);
    }
  }

  public handleSubmit = () => {
    this.props.form.validateFields({ force: true }, (error: Error, values: EventEditModel) => {
      if (error) {
        return;
      }
      this.props.onSubmit(values);
    });
  };

  public render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form layout="horizontal" className={styles.form}>
        <Form.Item label="比赛项目名称" {...FILTER_FORM_LAYOUT}>
          {getFieldDecorator('competitionEventName', {
            rules: [
              {
                required: true,
                message: '请输入比赛项目',
              },
            ],
          })(<Input placeholder="请输入" />)}
        </Form.Item>

       {/*<Form.Item label="开始时间" {...FILTER_FORM_LAYOUT}>
          {getFieldDecorator('planStartAt', {
            rules: [
              {
                required: true,
                message: '请输入开始时间',
              },
            ],
          })(<Input placeholder="请输入" />)}
        </Form.Item>*/}
        
        <Form.Item label="开始时间" {...FILTER_FORM_LAYOUT}>
          {getFieldDecorator('planStartAt', {
            rules: [
              {
                required: true,
                message: '请输入开始时间',
              },
            ],
          })(<Input placeholder="请输入" />)}
        </Form.Item>

        <Form.Item label="结束时间" {...FILTER_FORM_LAYOUT}>
          {getFieldDecorator('planEndAt', {
            rules: [
              {
                required: true,
                message: '请输入结束时间',
              },
            ],
          })(<Input placeholder="请输入"/>)}
        </Form.Item>

        <Form.Item label="状态" {...FILTER_FORM_LAYOUT}>
          {getFieldDecorator('status', {
            rules: [
              {
                required: false,
                message: '请输入状态',
              },
            ],
          })(<Select defaultValue="1" style={{ width: 120 }} placeholder="请选择">
          <Option value="1">1未开始</Option>
          <Option value="2">2进行中</Option>
          <Option value="3">3已结束</Option>
          </Select>)}
        </Form.Item>

        <Form.Item
          label="组别"
          style={{ width: '100%' }}
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 19 }}
        >
        {getFieldDecorator('suiteType')(<Select defaultValue="1" style={{ width: 120 }} placeholder="请选择">
                                        <Option value="1">1成人组</Option>
                                        <Option value="2">2青少年组</Option>
                                        <Option value="3">3老年组</Option>
                                        </Select>)}

        </Form.Item>
        <ModalButtons
          onCancel={this.props.onClose}
          onOk={this.handleSubmit}
          loading={this.props.saving}
        />
      </Form>
    );
  }
}

export default compose<
  {},
  {
    saving: boolean;
    detailData?: EventEditModel;
    onClose: () => void;
    onSubmit: (data: EventEditModel) => void;
  }
>(withState('vehicleList', 'changeVehicleList', []))(Form.create()(UserForm));