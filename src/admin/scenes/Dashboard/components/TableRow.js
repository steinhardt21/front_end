import React from 'react'

export const TableRow = () => {

    const user = this.props.user

    return (
        <tr>
            <td>{user.name}</td>
        </tr>
    )
}

export default TableRow