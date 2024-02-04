import { PrettyChatWindow } from 'react-chat-engine-pretty'

const ChatsPage = (props) => {
  return <div style={{ height: '100vh' }}>
    <PrettyChatWindow 
      projectId='16b41807-2c79-4927-b888-2efa52d1b40c'
      username={props.user.username}
      secret={props.user.secret}
      style={{ height: '100%' }}
    />
  </div>
}


export default ChatsPage