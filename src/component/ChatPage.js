import { useEffect, useRef } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/ChatSlice";

const ChatPage = () => {

    const messagelist = useSelector(store => store.chat.messageList)
    const input = useRef(null)
    const dispatch = useDispatch();
    useEffect(() => {
        const i = setInterval(() => dispatch(addMessage({name :"Shivam", message :"hello India"+ Math.floor((Math.random() * 100) + 1)})), 1000)
        
        return () => {
            clearInterval(i)
        }
    }, [])
    
    const onSubmit = (e) => {
        e.preventDefault();
        const val = input.current.value;
        if (!val) return;
        dispatch(addMessage({ name: "Test", message: val }));
        input.current.value = null;
    }
    if (!messagelist.length) return null; 
    return (
        <div>
        <div className="w-96 flex flex-col-reverse bg-grey-500 shadow-lg rounded-lg h-[500px] p-2 overflow-scroll ">
            {
            messagelist.map((data, index) => <ChatMessage key={index} data={ data} />)
            }
            </div>
            <form onSubmit={(e)=>onSubmit(e)}>
            <input className="w-84" type="text"  ref={input}></input><button onClick={e=>onSubmit(e)}>Submit</button>
        </form>
       
        </div>
    )
}

export default ChatPage;