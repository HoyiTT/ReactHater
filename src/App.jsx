import Greeting from "./Greeting"
import Destination from "./Destination"
import Container from "./Container"
function App() {
  const destinations = [
    {
      place : "seoul",
      description : "The capital of Korea"
    },
  ]
  return (
    <div>
      
      <Container>여행 지역</Container>
      <Destination place={"Paris"} description={"The city of love"} />
      <Destination {...destinations[0]}/>
      <Destination />
    </div>
  )
}

export default App
