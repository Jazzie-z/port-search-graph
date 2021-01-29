import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPorts } from 'actions/portAction';

const App = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPorts())
    }, [])
    return (
        <div>
            
        </div>
    )
}

export default App