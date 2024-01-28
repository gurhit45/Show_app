import Screen from "./Screen"
import "../src/assets/custom.css"
import 'react-loading-skeleton/dist/skeleton.css';
import { useState } from "react"

function App() {
  const [showID, setShowID] = useState(0);
  const [showData, setShowData] = useState([]);
  const [loading, setLoading] = useState(true);
  return (
    <section className="main__wrapper">
      <Screen showID={showID} setShowID={setShowID} showData={showData} setShowData={setShowData} loading={loading} setLoading={setLoading} />
    </section>
  )
}

export default App
