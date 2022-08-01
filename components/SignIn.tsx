import React, { useState } from "react";

import {Button, Checkbox, Form, Input} from 'antd';


import { PasswordPattern, EmailPattern } from '../utils/pattern';
import useInputEmail from '../common/useInputEmail';

interface ddd{
    text: React.KeyboardEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLInputElement>
}

const SignIn: React.FC = () => {
    const email = useInputEmail('', '');

    const onFinish = (values: any) => {
        console.log('Success:', values);
        // axios
    };

    return (
        <Form
            name="basic"
            labelCol={{span: 3}}
            wrapperCol={{span: 22}}
            initialValues={{remember: true}}
            onFinish={onFinish}
            autoComplete="off"
        >
            <Form.Item
                label="Email"
                name="Email"
                rules={[
                    {
                        pattern: EmailPattern,
                        message: '올바른 이메일을 입력해주세요.',
                    },
                    {
                        required: true,
                        message: '이메일을 입력해주세요.'
                    }
                ]}
            >
                <Input
                    placeholder="Name"
                    value={email.value}
                    onChange={email.onChange}
                />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[
                    {
                        pattern: PasswordPattern,
                        message: '8자 이상의 영문, 숫자만 사용 가능합니다.',
                    },
                    {
                        required: true,
                        message: '비밀번호를 입력해주세요.'
                    }
                ]}
            >
                <Input.Password placeholder="비밀번호"/>
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked" wrapperCol={{offset: 8, span: 16}}>
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{offset: 8, span: 16}}>
                <Button
                    type="primary"
                    htmlType="submit"
                    disabled={false}
                >
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default SignIn;