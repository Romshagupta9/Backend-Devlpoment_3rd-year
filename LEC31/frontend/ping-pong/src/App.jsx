import { useEffect,useRef } from "react"
import { useState } from "react"

function App() {
  let [ws,setWs]=useState(null);//to create state variable
     //useEffect? == used to side-effect
    useEffect(()=>{
      const socket = new WebSocket("ws://localhost:8888");
      socket.onmessage=(e)=>{
        console.log(e.data);
      }
      setWs(socket);
    },[])

  function sendMessage() {
    // send message to server
    let message=inputRef.current.value
    ws.send(message);
  }
  return (
    <>
      <h1>Ping Pong</h1>
      <input ref ={inputRef} type="text" />
      <button onClick={sendMessage}>Send</button>
    </>
  )
}

export default App


//useState and useRef mei difference
//useState -> used to store data which is used to render the component
//useRef -> used to store data which is not used to render the component