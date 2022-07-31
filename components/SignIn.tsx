import {Button, Checkbox, Form, Input} from 'antd';

const SignIn: React.FC = () => {
    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    const onEmailKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement> ) => {
        console.log(e.target.value);
    }

    const onPwKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement> ) => {
        console.log(e.target.value);
    }

    return (
        <Form
            name="basic"
            labelCol={{span: 5}}
            wrapperCol={{span: 20}}
            initialValues={{remember: true}}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label="Email"
                name="Email"
                rules={[{required: true, message: 'Please input your username!'}]}
            >
                <Input onKeyDown={onEmailKeyDown}/>
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[{required: true, message: 'Please input your password!'}]}
            >
                <Input.Password onKeyDown={onPwKeyDown}/>
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked" wrapperCol={{offset: 8, span: 16}}>
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{offset: 8, span: 16}}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default SignIn;