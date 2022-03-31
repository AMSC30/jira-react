import DemoSearch from './demo-search'
import DemoList from './demo-list'
import { useEffect, useState } from 'react'
import { debounce, normalizeQuery } from './util'

const baseURL = process.env.REACT_APP_API_URL

export default () => {
    const [name, setName] = useState('')
    const [personId, changePersonId] = useState('')

    const [list, setList] = useState([])
    const [userList, setUserList] = useState([])

    useEffect(() => {
        fetch(`${baseURL}/users`).then(async res => {
            if (res.ok) {
                setUserList(await res.json())
            }
        })
    }, [])

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(
        debounce(() => {
            const params = {
                name_like: name,
                personId
            }
            fetch(`${baseURL}/projects?${normalizeQuery(params)}`).then(async res => {
                if (res.ok) {
                    setList(await res.json())
                }
            })
        }, 1000),
        [name, personId]
    )

    return (
        <div>
            <DemoSearch
                name={name}
                setName={setName}
                userList={userList}
                personId={personId}
                changePersonId={changePersonId}
            ></DemoSearch>
            <DemoList list={list} userList={userList}></DemoList>
        </div>
    )
}
