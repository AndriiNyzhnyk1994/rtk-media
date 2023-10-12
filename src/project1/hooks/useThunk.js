import { useCallback,  useState } from "react"
import { useDispatch } from "react-redux"

export function useThunk(thunk) {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const dispatch = useDispatch()

    const runThunk = useCallback((arg) => {
        setIsLoading(true)
        dispatch(thunk(arg))
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