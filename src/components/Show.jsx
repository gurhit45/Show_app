import axios from 'axios';
import React from 'react'
import { useEffect } from 'react'
import defaultImage from "../assets/no-image.png";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import ShowLoader from './ShowLoader';

function Show({setShowID, showData, setShowData, loading, setLoading}) {
    useEffect(() => {
        axios.get('https://api.tvmaze.com/search/shows?q=all')
        .then(function (response) {
            setShowData(response.data);
            setLoading(false);
        })
        .catch(function (error) {
            console.log(error);
        })
    }, [])

    const defaultImg = (e) => {
        e.target.src = defaultImage;
    }

    const showSummary = (sId) => {
        setShowID(sId);
        window.scrollTo(0,0)
    }

    const SHOW = showData.map((el) => (
    <figure key={el.show.id}>
        <img src={el.show.image?.original} alt={el.show.name} onError={defaultImg} className='img-fluid' />
        <figcaption>
            <h4>{el.show.name || <Skeleton/> }</h4>
            <button className='btn showSummary' onClick={() => showSummary(el.show.id)}>Summary</button>
        </figcaption>
    </figure>
    ))
    
  return (
    <>
        {loading ? (<ShowLoader items={10} />) : SHOW}
    </>
  )
}

export default Show
