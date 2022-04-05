import { Form, Input, Select } from 'antd'
import { IUser, IParam } from './project'

interface IProps {
    list: IUser[] | null
    param: IParam
    handleChange: (data: IParam) => void
}

export default ({ list, param, handleChange }: IProps) => {
    return (
        <Form style={{ marginBottom: '10px' }} layout="inline">
            <Form.Item label="">
                <Input
                    value={param.name}
                    onChange={evt => handleChange({ name: evt.target.value })}
                    placeholder="输入项目名称"
                />
            </Form.Item>
            <Form.Item label="">
                <Select value={param.personId} onChange={val => handleChange({ personId: val })}>
                    <Select.Option value="">负责人</Select.Option>
                    {list
                        ? list.map(user => (
                              <Select.Option value={user.id} key={user.id}>
                                  {user.name}
                              </Select.Option>
                          ))
                        : null}
                </Select>
            </Form.Item>
        </Form>
    )
}
