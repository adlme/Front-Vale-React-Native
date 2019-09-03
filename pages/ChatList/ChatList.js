import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
// import './ChatList.min.css';
import withAuth from '../../components/withAuth';
import authService from '../../services/auth-service'
import chatService from '../../services/chat-service'


const ChatList = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const classToggle = isOpen ? ' is-opened' : '';
  const [chats,setChats] = useState();

  useEffect(()=>{
    authService.me(props.user._id)
    .then(response => {
      setChats(response.chats)
    })
  },[props.user._id])

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <section className="chatlist">
      <span onClick={toggle} className={`toggle add-chat${classToggle}`}>+</span>
      
      {chats < 1 && 
        <p className="no-chat">You don't have any open chats, start talking to friends!</p>
      }
        {chats && chats.map((chat)=>{
          console.log('chaaaaat',chat)
          return(
            <article className="item-chat-list" key={chat._id}>
              {props.user.username === chat.userOne.username 
              ? (<img alt={chat.userTwo.username} src={chat.userTwo.profileImg}/>)
              : (<img alt={chat.userOne.username} src={chat.userOne.profileImg}/>)
              }
               
              <Link to={`/chat/${chat.sala}`}><p>{props.user._id === chat.userOne._id ? chat.userTwo._id : chat.userOne._id}</p></Link>
            </article>
          )
        })}
    </section>
  )
}

export default withAuth(ChatList)