import styled from '@emotion/styled'
import useMount from 'hooks/use-mount'
import { useState } from 'react'
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
export default () => {
    const [userList, setUserList] = useState<IUser[] | null>(null)

    useMount(() => {
        httpGet('users', null).then(setUserList)
    })

    return (
        <ListContainer>
            <ProjectSearch list={userList}></ProjectSearch>
            <ProjectList></ProjectList>
        </ListContainer>
    )
}

const ListContainer = styled.div`
    padding: 2rem;
`
