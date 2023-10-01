import { useEffect } from "react"
import { useSelector } from "react-redux"
import { fetchUsers, addUser } from "../store"
import Skeleton from "./Skeleton"
import Button from './Button'
import { useThunk } from "../hooks/useThunk"



function UsersList() {
    const [doFetchUsers, isLoadingUsers, loadingUsersError] = useThunk(fetchUsers)
    // we got 3 array's elements in 
    // the same order that we returned in the useThunk 

    // useThunk - is a custom hook
    // we need it to incapsulate logic of dispatching users' fetching
    // and to manage a local state (by useState)
    // local state = info about loading status and probable error value

    const [doCreateUser, isCreatingUser, creatingUserError] = useThunk(addUser)


    const { data } = useSelector((state) => {
        return state.users // {data: [], isLoading: false, error: null}
    })

    useEffect(() => {
        doFetchUsers()
    }, [doFetchUsers])

    if (isLoadingUsers) {
        return <Skeleton times={12} className="h-10 w-full" />
    }
    if (loadingUsersError) {
        return <div>Error data...</div>
    }

    const renderedUsers = data.map((user) => {
        return <div key={user.id} className="mb-2 border rounded">
            <div className="flex p-2 justify-between items-center cursor-pointer">
                {user.name}
            </div>
        </div>
    })
    const handleUserAdd = () => {
        doCreateUser()
    }


    return <div>
        <div className="flex flex-row justify-between m-3">
            <h1 className="m-2 text-xl">Users</h1>
            <Button loading={isCreatingUser} onClick={handleUserAdd}>+ Add User</Button>
            {creatingUserError && 'Error creating user'}
        </div>
        {renderedUsers}
    </div>
}

export default UsersList