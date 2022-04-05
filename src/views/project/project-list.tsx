import { Table, TableColumnsType } from 'antd'
import { IProject, IUser } from './project'

interface IProps {
    list: IProject[]
    userList: IUser[]
}

export default ({ list, userList }: IProps) => {
    const columns: TableColumnsType<IProject> = [
        {
            title: '名称',
            dataIndex: 'name'
        },
        {
            title: '部门',
            dataIndex: 'organization'
        },
        {
            title: '负责人',
            dataIndex: 'personId',
            render(val, row, index) {
                return <span>{userList.find(user => user.id === val)?.name}</span>
            }
        },
        {
            title: '创建时间',
            dataIndex: 'created'
        }
    ]

    return <Table rowKey="id" columns={columns} dataSource={list} />
}
