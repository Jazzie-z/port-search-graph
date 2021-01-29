import { useEffect, useState } from 'react';
import { Row } from 'antd'
import { useDispatch } from 'react-redux';
import { getGraphData } from 'actions/graphAction';
import SelectOption from 'components/SelectOption/SelectOption';
import { staticText } from 'constants/resource';

const PortSelector = ({ ports }) => {
    const [activePort, setActivePort] = useState({ origin: null, destination: null });
    const dispatch = useDispatch()
    useEffect(() => {
        if (activePort.origin && activePort.destination) {
            dispatch(getGraphData(activePort))
        }
    }, [activePort])
    return (<Row justify={'space-between'}>
        <SelectOption options={ports.filter(e => e.code !== activePort.destination)}
            value={activePort.origin}
            onChange={(val) => setActivePort(prev => ({ ...prev, origin: val }))}
            placeholder={staticText.port.origin} />
        <SelectOption options={ports.filter(e => e.code !== activePort.origin)}
            value={activePort.destination}
            onChange={(val) => setActivePort(prev => ({ ...prev, destination: val }))}
            placeholder={staticText.port.destination} />
    </Row>
    )
}
PortSelector.defaultProps = {
    ports: [],
}

export default PortSelector
