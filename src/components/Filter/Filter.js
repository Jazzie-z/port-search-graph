import { useState } from 'react';
import { DatePicker, Space, Spin } from 'antd';
import { useSelector } from 'react-redux';
import ErrorMsg from 'components/ErrorMsg/ErrorMsg';
import PortSelector from 'components/PortSelector/PortSelector'
import styles from './Filter.module.css'

const { RangePicker } = DatePicker;

const Filter = () => {
    const [dateRange, setDateRange] = useState(null);
    const { data, error, loading } = useSelector(state => state.port)
    const onDateChange = (date) => {
        setDateRange(date)
    }
    if (loading) return <Spin size="large" className={styles.spinner} />
    if (error) return <ErrorMsg/>
    return (
        <Space direction="vertical" size={20} className={styles.container}>
            <PortSelector ports={data} />
            <RangePicker onChange={onDateChange} value={dateRange} />
        </Space>
    )
}

export default Filter
