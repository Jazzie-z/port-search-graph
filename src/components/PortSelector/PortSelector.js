import { Row } from 'antd'
import SelectOption from 'components/SelectOption/SelectOption';
import { staticText } from 'constants/resource';

const PortSelector = ({ ports }) => {
    return (<Row justify={'space-between'}>
        <SelectOption options={ports} placeholder={staticText.port.origin} />
        <SelectOption options={ports} placeholder={staticText.port.destination} />
    </Row>
    )
}
PortSelector.defaultProps = {
    ports: [],
}

export default PortSelector
