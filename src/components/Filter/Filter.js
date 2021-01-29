import { useEffect, useState } from 'react';
import { DatePicker, Space, Spin } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import ErrorMsg from 'components/ErrorMsg/ErrorMsg';
import PortSelector from 'components/PortSelector/PortSelector'
import styles from './Filter.module.css'
import { DATE_FILTER } from 'actions';

const { RangePicker } = DatePicker;

const Filter = () => {
    const [dateRange, setDateRange] = useState(null);
    const { data, error, loading } = useSelector(state => state.port)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: DATE_FILTER, payload: dateRange })
    }, [dispatch, dateRange])
    const onDateChange = (date) => {
        setDateRange(date)
    }
    if (loading) return <Spin size="large" className={styles.spinner} />
    if (error) return <ErrorMsg />
    return (
        <Space direction="vertical" size={20} className={styles.container}>
            <PortSelector ports={data} />
            <RangePicker onChange={onDateChange} value={dateRange} />
        </Space>
    )
}

export default Filter
