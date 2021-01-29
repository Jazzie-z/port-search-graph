import moment from 'moment'

export const DATE_FORMATS = {
    xAxis: 'MMM DD',
    server: 'YYYY-MM-DD'
};

export const convertToTimeStamp = (day) => moment(day).valueOf();

export const formatTimeStamp = (timeStamp) => moment(timeStamp).format(DATE_FORMATS.xAxis);

export const formatGraphData = (data) => {
    return data?.map(e => ({ ...e, day: convertToTimeStamp(e.day) }))
}

export const filterDataWithinRange = (data, dateRange) => {
    if (data && dateRange) {
        return data.filter(e => moment(e.day).isSameOrAfter(dateRange[0].format(DATE_FORMATS.server)) &&
            moment(e.day).isSameOrBefore(dateRange[1].format(DATE_FORMATS.server)))
    }
    return data
}