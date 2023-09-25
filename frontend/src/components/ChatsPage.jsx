import { PrettyChatWindow } from 'react-chat-engine-pretty'
import { api_id } from '../config/config';

const ChatsPage = (props) => {
    return <div style={{height: "100vh"}}>
        <PrettyChatWindow
            projectId={api_id}
            username={props.user.username}
            secret={props.user.secret}
            style={{height: "100%"}}
        />
    </div>
}

export default ChatsPage