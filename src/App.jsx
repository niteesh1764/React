import Header from "./components/Header"
import Inputer from "./components/Inputer"
import Result from "./components/Result"
import { calculateInvestmentResults , formatter } from "./util/investment"

function App() {
  return (
    <>
      <Header />
      <Inputer />
    </>
  )
}

export default App
