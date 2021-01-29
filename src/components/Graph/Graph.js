import { Spin } from 'antd';
import ErrorMsg from 'components/ErrorMsg/ErrorMsg';
import { useSelector } from 'react-redux';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';
import styles from './Graph.module.css'
import { formatTimeStamp } from 'utils/dateHelper';
import { graphTypes } from 'constants/resource';

const Graph = () => {
    const { data, loading, error} = useSelector(state => state.graph)
    if (loading) return <Spin size="large" style={{ display: 'block' }} />
    if (error) return <ErrorMsg description={error.message} />
    if (data)
        return (
            <div className={styles.wrapper}>
                <ResponsiveContainer width={'75%'} height={300}>
                    <LineChart
                        width={1200}
                        height={300}
                        data={data}
                        margin={{
                            top: 5, right: 30, left: 20, bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis
                            dataKey="day"
                            tickFormatter={formatTimeStamp}
                            tickCount={10}/>
                        <YAxis
                            domain={['dataMin - 10', 'dataMax + 10']}
                        />
                        <Tooltip />
                        {graphTypes.map((e, i) => <Line connectNulls key={i} type="step" dataKey={e} stroke="red" dot={false} />)}
                    </LineChart>
                </ResponsiveContainer>
            </div>
        )
    return null
}

export default Graph
