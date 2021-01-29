import moment from 'moment'

export const DATE_FORMATS = {
    xAxis: 'MMM DD',
    server: 'YYYY-MM-DD'
};

export const formatTimeStamp = (timeStamp) => moment(timeStamp).format(DATE_FORMATS.xAxis);