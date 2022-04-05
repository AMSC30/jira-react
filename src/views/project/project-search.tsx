import { Form, Input, Select } from 'antd'
import { useState } from 'react'
import { IUser } from './project'

interface IProps {
    list: IUser[] | null
}
interface IParam {
    keyword?: string
    id?: string | number
}
export default ({ list }: IProps) => {
    const [param, setParam] = useState<IParam>({
        keyword: '',
        id: ''
    })
    const handleChange = (data: IParam) => {
        setParam({
            ...param,
            ...data
        })
    }
    return (
        <Form layout="inline">
            <Form.Item label="">
                <Input
                    value={param.keyword}
                    onChange={evt => handleChange({ keyword: evt.target.value })}
                    placeholder="输入项目名称"
                />
            </Form.Item>
            <Form.Item label="">
                <Select value={param.id} onChange={val => handleChange({ id: val })}>
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
