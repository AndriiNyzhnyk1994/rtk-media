import { GoTrash } from 'react-icons/go'
import Button from './Button'
import { removeUser } from '../store'
import { useThunk } from '../hooks/useThunk'
import ExpandeblePanel from './ExpandeblePanel'

function UsersListItem({ user }) {

    const [doRemoveUser, isLoading, error] = useThunk(removeUser)

    const handleClick = () => {
        doRemoveUser(user)
    }

    const header = <>
        <Button className='mr-3' loading={isLoading} onClick={handleClick}>
            <GoTrash />
        </Button>
        {error && <div>Error deleting user</div>}
        {user.name}
    </>

    return (
        <ExpandeblePanel header={header}>
            CONTENT
        </ExpandeblePanel>
    )
}

export default UsersListItem