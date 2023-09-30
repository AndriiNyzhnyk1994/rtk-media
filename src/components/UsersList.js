import { useCallback, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchUsers, addUser } from "../store"
import Skeleton from "./Skeleton"
import Button from './Button'




// useThunk - is a custom hook
// we need it to incapsulate logic of dispatching users' fetching
// and to manage a local state (by useState)
// local state = info about loading status and probable error value
function useThunk(thunk) {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const dispatch = useDispatch()

    const runThunk = useCallback(() => {
        setIsLoading(true)
        dispatch(thunk())
            .unwrap()
            .catch(err => setError(err))
            .finally(() => setIsLoading(false))
        // we need `.unwrap()` method for giving `dispatch()` call 
        // default promise methods as `then` and `catch`
    }, [dispatch, thunk])

    return [runThunk, isLoading, error]
    // we return array of: 
    // - function, that dispatches a thunk (doing request and changing store data)
    // - loading status (depending on the `pending` status (runs or not))
    // - error message (if request was failed)
}

function UsersList() {
    const [doFetchUsers, isLoadingUsers, loadingUsersError] = useThunk(fetchUsers)
    // we got 3 array's elements in 
    // the same order that we returned in the useThunk 

    const [isCreatingUser, setIsCreatingUser] = useState(false)
    const [creatingUserError, setCreatingUserError] = useState(null)

    const dispatch = useDispatch()
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
        setIsCreatingUser(true)
        dispatch(addUser())
            .unwrap()
            .catch((err) => setCreatingUserError(err))
            .finally(() => setIsCreatingUser(false))
    }


    return <div>
        <div className="flex flex-row justify-between m-3">
            <h1 className="m-2 text-xl">Users</h1>
            {
                isCreatingUser
                    ? 'Creating .'
                    : <Button onClick={handleUserAdd}>+ Add User</Button>
            }
            {creatingUserError && 'Error creating user'}
        </div>
        {renderedUsers}
    </div>
}

export default UsersList