import Header from "./components/Header"
import { useState } from "react"
import Inputer from "./components/Inputer"
import Result from "./components/Result"
import { calculateInvestmentResults , formatter } from "./util/investment"

function App() {
  const [userInput,setUserInput] = useState({
    initialInvestment : 10000,
    annualInvestment: 1200,
    expectedReturn:6,
    duration:10
});
function handleChange(inputIdentifier, newValue){
  setUserInput(prevUserInput => {
      return{
      ...prevUserInput, 
      [inputIdentifier] : +newValue
    }
  })
}
const inputIsValid = userInput.duration >=1;
  return (
    <>
      <Header />
      <Inputer onInputChange = {handleChange} input = {userInput}/>
      {!inputIsValid && <p className="center">Please Enter Valid Duration</p>}
      {inputIsValid && <Result input= {userInput}/>}
    </>
  )
}

export default App
