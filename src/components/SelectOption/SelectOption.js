import { Col, Select } from 'antd'
const { Option } = Select;
const SelectOption = ({ options, value, onChange, placeholder }) => {
    return <Col span={8}>
        <Select
            showSearch
            style={{ width: 200 }}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
        >
            {options.map(({ code, name }, i) => <Option key={i} value={code}>{name}</Option>)}
        </Select>
    </Col>
}
SelectOption.defaultProps = {
    options: [],
    value: null,
    onChange: () => { },
    placeholder: null
}
export default SelectOption