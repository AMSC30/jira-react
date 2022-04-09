import styled from '@emotion/styled'
import { Typography, Button } from 'antd'
import { useAsync } from 'hooks/use-async'
import { useDebounce } from 'hooks/use-debounce'
import useMount from 'hooks/use-mount'
import { useEffect, useState } from 'react'
import { httpGet } from 'util/http'
import ProjectList from './project-list'
import ProjectSearch from './project-search'

export interface IUser {
    id: number
    name: string
    email: string
    title: string
    organization: string
    token: string
}

export interface IProject {
    id: number
    name: string
    personId: number
    pin: boolean
    organization: string
    created: number
}
export interface IParam {
    name?: string
    personId?: string | number
}
const useProjectParams = () => {
    const [param, setParam] = useState<{
        name: string
        personId: string | number
    }>({
        name: '',
        personId: ''
    })

    const newParam = useDebounce(param, 200)

    const handleChange = (data: IParam) => {
        setParam({
            ...param,
            ...data
        })
    }
    return { param, newParam, handleChange }
}
export default () => {
    const { data: userList, run: userRun } = useAsync<IUser[]>()
    const { run, error, data: projectList } = useAsync<IProject[]>()
    const { param, newParam, handleChange } = useProjectParams()
    useMount(() => {
        userRun(httpGet('users', null))
    })

    useEffect(() => {
        run(httpGet('projects', newParam))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [newParam])

    return (
        <ListContainer>
            <ProjectSearch
                list={userList}
                param={param}
                handleChange={handleChange}
            ></ProjectSearch>
            {error ? <Typography.Text type={'danger'}>{error.message}</Typography.Text> : null}
            <ProjectList dataSource={projectList || []} userList={userList || []}></ProjectList>
        </ListContainer>
    )
}

const ListContainer = styled.div`
    padding: 2rem;
`
