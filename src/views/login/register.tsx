import { useAuthContext } from 'context/auth-context'
import { Form, Button, Input } from 'antd'

export default () => {
    const authContext = useAuthContext()
    const handleSubmit = (user: { username: string; password: string }) => {
        authContext.register(user)
    }
    return (
        <Form colon labelCol={{ span: 6 }} onFinish={handleSubmit}>
            <Form.Item
                label="用户名"
                name="username"
                rules={[{ required: true, message: '请输入用户名' }]}
            >
                <Input placeholder="用户名" type="text" />
            </Form.Item>

            <Form.Item
                label="密码"
                labelAlign="right"
                name="password"
                rules={[{ required: true, message: '请输入密码' }]}
            >
                <Input placeholder="密码" type="password" />
            </Form.Item>
            <Button htmlType="submit" type="primary">
                注册
            </Button>
        </Form>
    )
}
