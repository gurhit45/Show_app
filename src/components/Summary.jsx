import React, { useEffect, useState } from 'react'
import MovieForm from './MovieForm';

function Summary({showID, showData}) {
    const [showSummary, setShowSummary] = useState([]);
    const [showModal, setModal] = useState(false);

    const handleClose = () => setModal(false);
    const handleOpen = () => setModal(true);
    const handleSuccess = () => {setModal(false); alert("Tickets Booked")}

    useEffect(() => {
        setShowSummary(showData.filter((item) => (item.show.id === showID)))
    }, [showID])
  return (
    <>
        <p>{showSummary[0]?.show?.summary.replace(/(<([^>]+)>)/ig, '')}</p>
        { showSummary.length > 0 && <button className="btn book__movie" onClick={handleOpen}>Book Tickets</button>}
        { showSummary.length > 0 && (<MovieForm showSummary={showSummary} handleOpen={handleOpen} handleClose={handleClose} showModal={showModal} handleSuccess={handleSuccess} />)}
    </>
  )
}

export default Summary
