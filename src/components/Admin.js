import React from 'react'
import { useAddAccountsMutation, useDeleteAccountsMutation, useGetAccountsQuery, useUpdateAccountsMutation } from '../api/adminSlices'
const Admin = () => {
    const { data, error, isLoading } = useGetAccountsQuery()
    const [addAccount, response] = useAddAccountsMutation()
    const [deleteAccounts, setDeletesAccount] = useDeleteAccountsMutation()
    const [updateAccount] = useUpdateAccountsMutation()

    return (
        <div className='Admin'>
            <p>Admin Components:</p>
            {
                data && data.map(acc => (
                    <p style={{ color: 'green' }}>
                        {acc.id}:{acc.amount}
                        <button onClick={() => deleteAccounts(acc.id)} >Delete</button>
                        <button onClick={() => updateAccount({ id: acc.id, amount: 10})}>Update</button>
                    </p>
                ))
            }
            <button onClick={() => addAccount(100000, data.length + 1)}>Adaccount</button>
        </div>
    )
}

export default Admin
