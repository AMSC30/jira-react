import styled from '@emotion/styled'
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
export default () => {
    const [userList, setUserList] = useState<IUser[] | null>(null)
    const [projectList, setProjectList] = useState<IProject[] | null>(null)

    const [param, setParam] = useState<{
        name: string
        personId: string | number
    }>({
        name: '',
        personId: ''
    })
    const newParam = useDebounce(param, 200)

    useMount(() => {
        httpGet('users', null).then(setUserList)
    })

    useEffect(() => {
        httpGet('projects', newParam).then(setProjectList)
    }, [newParam])

    const handleChange = (data: IParam) => {
        setParam({
            ...param,
            ...data
        })
    }
    return (
        <ListContainer>
            <ProjectSearch
                list={userList}
                param={param}
                handleChange={handleChange}
            ></ProjectSearch>
            <ProjectList list={projectList || []} userList={userList || []}></ProjectList>
        </ListContainer>
    )
}

const ListContainer = styled.div`
    padding: 2rem;
`
