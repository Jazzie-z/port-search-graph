import { Spin, Checkbox, Card } from 'antd';
import ErrorMsg from 'components/ErrorMsg/ErrorMsg';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';
import { GRAPH_FILTER } from 'actions';
import styles from './Graph.module.css'
import { filterDataWithinRange, formatTimeStamp } from 'utils/dateHelper';
import { graphTypes } from 'constants/resource';
const CheckboxGroup = Checkbox.Group;

const Graph = () => {
    const { data, loading, error, dateRange, filter = [] } = useSelector(state => state.graph)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch({ type: GRAPH_FILTER, payload: ['mean'] })
    }, [dispatch])
    if (loading) return <Spin size="large" style={{ display: 'block' }} />
    if (error) return <ErrorMsg description={error.message} />
    const onChange = (payload) => {
        dispatch({ type: GRAPH_FILTER, payload })
    }
    if (data)
        return (
            <div className={styles.wrapper}>
                <ResponsiveContainer width={'75%'} height={300}>
                    <LineChart
                        width={1200}
                        height={300}
                        data={filterDataWithinRange(data, dateRange)}
                        margin={{
                            top: 5, right: 30, left: 20, bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis
                            dataKey="day"
                            type="number"
                            tickFormatter={formatTimeStamp}
                            tickCount={10}
                            domain={dateRange?.map(e => e.valueOf()) || ['auto', 'auto']} />
                        <YAxis
                            domain={['dataMin - 10', 'dataMax + 10']}
                            unit={' $'}
                        />
                        <Tooltip />
                        {graphTypes.map((e, i) => filter.includes(e) ? <Line connectNulls key={i} type="step" dataKey={e} stroke="red" dot={false} /> : '')}
                    </LineChart>
                </ResponsiveContainer>
                <Card title="Graph Type" className={styles.card}>
                    <CheckboxGroup className={styles.checkbox} options={graphTypes} value={filter} onChange={onChange} />
                </Card>
            </div>
        )
    return null
}

export default Graph
