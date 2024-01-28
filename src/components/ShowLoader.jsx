import React from 'react'
import Skeleton from 'react-loading-skeleton'

function ShowLoader({items}) {
    return (Array(items).fill(0).map((_, index) => (<div key={index} className='skeleton__wrapper'>
    <div className="img__wrapper">
        <Skeleton height={350} style={{marginBottom: '.6rem'}} />
    </div>
    <div className="title__wrapper">
        <Skeleton height={30} style={{marginBottom: '.6rem'}} />
    </div>
    <div className="btn__wrapper">
        <Skeleton height={20} width='40%' />
    </div>
</div>)))
}

export default ShowLoader
