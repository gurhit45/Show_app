import React from 'react'
import Show from "./components/Show"
import Summary from './components/Summary'

function Screen({showID, setShowID, showData, setShowData, loading, setLoading}) {
  return (
    <div className="container">
        <div className="row">
            <div className="col-6 col-md-3">
                <div className="left__wrapper">
                    <Show showID={showID} setShowID={setShowID} showData={showData} setShowData={setShowData} loading={loading} setLoading={setLoading} />
                </div>
            </div>
            <div className="col-6 col-md-9">
                <div className="right__wrapper">
                    <Summary showID={showID} setShowID={setShowID} showData={showData} setShowData={setShowData} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Screen
