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

    let content;
    if (isLoadingUsers) {
        content = <Skeleton times={12} className="h-10 w-full" />
        // while we have pending status of c, we'll show sceleton loading
    } else if (loadingUsersError) {
        content = <div>Error data...</div>
        // while we have an error in fetchUsers, we'll show error message
    } else {
        content = data.map((user) => {
            return <div key={user.id} className="mb-2 border rounded">
                <div className="flex p-2 justify-between items-center cursor-pointer">
                    {user.name}
                </div>
            </div>
        })
        // while loading success we'll show our list of users
    }

    const handleUserAdd = () => {
        doCreateUser()
    }


    return <div>
        <div className="flex flex-row justify-between m-3">
            <h1 className="m-2 text-xl">Users</h1>
            <Button loading={isCreatingUser} onClick={handleUserAdd}>+ Add User</Button>
            {creatingUserError && 'Error creating user'}
        </div>
        {content}
    </div>
}

export default UsersList