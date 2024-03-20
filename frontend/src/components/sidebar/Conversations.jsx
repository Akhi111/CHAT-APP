import Convers from "./Convers";
import useGetConversations from "../../hooks/useGetConversations";
// import { getRandomEmoji } from "../../utils/emojis";

const Conversations = () => {
  const {loading, conversations}= useGetConversations();
  
  return (
    <div className='py-2 flex flex-col overflow-auto'>

    {conversations.map((conversation,idx) => (
      <Convers
      key={conversation._id}
      conversation={conversation}
      // emoji= {getRandomEmoji()}
      lastIdx={idx === conversations.length - 1}
      />
    ))}
      {loading ? <span className="loading loading-spinner mx-auto"></span> : null}
      
    </div>
  )
}

export default Conversations;