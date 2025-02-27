import{useState} from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  return(
    <div> 
      State : {count}
      {/* 3번 불러도 1번만 증가한다. state는 고정값을 가지기 떄문.. */}
      <button onClick={() => {
        setCount(count + 1);
        setTimeout(() => {
          // 0 출력됨
          alert(count);
        }, 1000);
      }}>
        Update</button>
    </div>
    
  )
  

}
function App() {
  const [count, setCount] = useState(0);
  const handleUpdate = () => {
    setCount(count + 1);
  };
  return (
  <div>State : {count}
    <button onClick={handleUpdate}>Update</button>
    <Counter></Counter>
  </div>
  );
};


export default App
