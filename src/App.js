import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import 'antd/dist/antd.css';
import { getPorts } from 'actions/portAction';
import Filter from 'components/Filter/Filter';
import Graph from 'components/Graph/Graph';

const App = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPorts())
    }, [dispatch])
    return (
        <div>
            <Filter />
            <Graph />
        </div>
    )
}

export default App