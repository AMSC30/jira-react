export default ({ list, userList }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>名称</th>
                    <th>骑手</th>
                </tr>
            </thead>
            <tbody>
                {list.map((item, index) => (
                    <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{userList.find(user => user.id === item.personId)?.name || '未知'}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
