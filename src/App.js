import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import 'antd/dist/antd.css';
import { getPorts } from 'actions/portAction';
import Filter from 'components/Filter/Filter';

const App = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPorts())
    }, [])
    return (
        <div>
            <Filter />
        </div>
    )
}

export default App