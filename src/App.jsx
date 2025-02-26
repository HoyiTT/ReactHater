

import Fruits from "./Fruits"
import Item from "./Item"
import Mailbox from "./Mailbox"
function App() {
  const fruits = ["apple", "banana", "orange"]
  return (
    <>
    <Item isDone={true} />
    <Item isDone={false} />
    <Mailbox unreadMessage={["a"]}/>
    {
      fruits.length > 0 && <Fruits fruits={fruits}/>
    }
    </>
  )
  
}

export default App
