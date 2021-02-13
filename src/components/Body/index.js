import React from 'react';
import Title from '../Title';
import Lorem from '../Lorem';
import PlaceHolder from '../PlaceHolder';
import CodeCard from "../CodeCard"
import Resume from '../Resume';

const Body = () => {
    return (
        <>
        <div className="my-14">
        <Title />
        <Lorem />
        <CodeCard />
        <Resume />
        <PlaceHolder />
        </div>       
    </>
    )

}

export default Body