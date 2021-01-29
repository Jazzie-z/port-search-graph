import { Alert } from 'antd'
import { staticText } from 'constants/resource'

const ErrorMsg = ({ message, description }) => {
    return (
        <div style={{ maxWidth: '500px', margin: 10 }}>
            <Alert
                message={message}
                description={description}
                type="error"
                showIcon
                closable
            />
        </div>
    )
}
ErrorMsg.defaultProps = {
    message: staticText.error.message,
    description: staticText.error.description
}
export default ErrorMsg
