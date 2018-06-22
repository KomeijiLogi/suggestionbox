import React, { Component } from 'react';
import { Form, Input, Tooltip, Icon, Cascader, Select, Upload, Checkbox, Button, AutoComplete,Radio } from 'antd';
import './fetchform.css'

const FormItem = Form.Item;
const Option = Select.Option;

const RadioGroup = Radio.Group;

const residences = [{
    value: 'wghq',
    label: '威高集团总部',

}, {
    value: 'yyzp',
    label: '医用制品集团',

},
    {
        value: 'yyjt',
        label: '药业集团',

    },
    {
        value: 'xyjh',
        label: '血液净化集团',

    },
    {
        value: 'swkj',
        label: '生物科技集团',

    },
    {
        value: 'xlsy',
        label: '医疗商业集团',

    },
    {
        value: 'gkcl',
        label: '骨科材料集团',

    },
    {
        value: 'fdc',
        label: '房地产集团',

    },
    {
        value: 'xnhc',
        label: '心内介入耗材集团',

    },
    {
        value: 'jrkg',
        label: '金融控股集团',

    }
];

class  fetchform extends React.Component{
    state={
        data:[]

    }
    normFile = (e) => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    }
    componentDidMount(){

    }

    render(){

        const { getFieldDecorator } = this.props.form;


        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        };
        const prefixSelector = getFieldDecorator('prefix', {
            initialValue: '86',
        })(
            <Select style={{ width: 70 }}>
                <Option value="86">+86</Option>
                <Option value="87">+87</Option>
            </Select>
        );

        return (
            <Form className="fetchForm">
                <FormItem
                    {...formItemLayout}
                    label="标题"
                >

                    {getFieldDecorator('title',{
                        rules:[{required:true,message:'请输入标题'}]
                    })(
                        <Input readOnly="true"/>

                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="留言类型"
                >
                    {getFieldDecorator('radio-group',{
                        rules:[{required:true,message:'请选择留言类型'}]
                    })(
                        <RadioGroup>
                            <Radio value="a">管理建议</Radio>
                            <Radio value="b">产品质量反馈</Radio>
                            <Radio value="c">风险提报</Radio>
                            <Radio value="d">投诉</Radio>
                            <Radio value="e">其他</Radio>
                        </RadioGroup>
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label={(
                        <span>
              被反映岗位或人&nbsp;
                            <Tooltip title="被反映岗位或人的名称">
                <Icon type="question-circle-o" />
                    </Tooltip>
                     </span>
                    )}
                >
                    {getFieldDecorator('nickname', {
                        rules: [{ required: true, message: '请输入被反映岗位或人', whitespace: true }],
                    })(
                        <Input readOnly="true"/>
                    )}
                </FormItem>


                <FormItem
                    {...formItemLayout}
                    label="所属集团"
                >
                    {getFieldDecorator('residence', {
                        initialValue: ['集团总部'],
                        rules: [{ type: 'array', required: true, message: '请选择所属集团!' }],
                    })(
                        <Cascader options={residences} />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="手机号"
                >
                    {getFieldDecorator('phone', {
                        rules: [{ required: true, message: '请输入手机号' }],
                    })(
                        <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="意见"
                >
                    {
                        getFieldDecorator('suggest',{
                            rules:[{required:true,message:'请输入意见!'}]
                        })(

                            <textarea style={{height:'30vw',width:'100%'}} readOnly="true"></textarea>
                        )
                    }
                </FormItem>

                <FormItem
                    {...formItemLayout}
                    label="附件"

                >
                    {getFieldDecorator('download', {

                    })(
                        <div className="fileDown">

                        </div>
                    )}
                </FormItem>

                <FormItem
                    {...formItemLayout}
                    label="反馈"
                >
                    {
                        getFieldDecorator('feedback',{
                            rules:[{required:false,message:''}]
                        })(

                            <textarea style={{height:'30vw',width:'100%'}} readOnly="true"></textarea>
                        )
                    }
                </FormItem>
                <FormItem>
                    {
                        getFieldDecorator('account',{
                            rules:[{required:false}]
                        })(<Input type="hidden" />)
                    }

                </FormItem>
                <FormItem>
                    {
                        getFieldDecorator('username',{
                            rules:[{required:false}]
                        })(<Input type="hidden" />)
                    }

                </FormItem>
            </Form>

        );
    }

}
const FetchDetailform = Form.create()(fetchform);
export default  FetchDetailform;
