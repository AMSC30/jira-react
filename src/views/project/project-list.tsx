import { Table, TableColumnsType, TableProps } from 'antd'
import { Link } from 'react-router-dom'
import { IProject, IUser } from './project'

interface IProps extends TableProps<IProject> {
    userList: IUser[]
}

export default ({ userList, ...rest }: IProps) => {
    const columns: TableColumnsType<IProject> = [
        {
            title: '名称',
            render(value, project) {
                return <Link to={`/project/${project.id}`}>{project.name}</Link>
            }
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
    return <Table pagination={false} rowKey="id" columns={columns} {...rest} />
}
