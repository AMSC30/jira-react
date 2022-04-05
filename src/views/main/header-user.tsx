import { useAuthContext } from 'context/auth-context'
import { Button, Dropdown, Menu } from 'antd'

export default () => {
    const { user, logout } = useAuthContext()
    return (
        <Dropdown
            overlay={
                <Menu>
                    <Menu.Item key={'logout'}>
                        <Button onClick={logout} type={'link'}>
                            登出
                        </Button>
                    </Menu.Item>
                </Menu>
            }
        >
            <Button type={'link'} onClick={e => e.preventDefault()}>
                Hi, {user ? user.name : ''}
            </Button>
        </Dropdown>
    )
}
