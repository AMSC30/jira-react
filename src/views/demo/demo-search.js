export default ({ name, setName, personId, userList, changePersonId }) => {
    return (
        <div>
            <input type="text" value={name} onChange={evt => setName(evt.target.value)} />

            <select
                value={personId}
                placeholder="请输入项目名称"
                onChange={evt => {
                    console.log(evt.target.value)
                    changePersonId(evt.target.value)
                }}
            >
                <option value="">全部</option>
                {userList.map(user => (
                    <option key={user.id} value={user.id}>
                        {user.name}
                    </option>
                ))}
            </select>
        </div>
    )
}
