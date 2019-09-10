import chartXkcd from 'chart.xkcd';
import React, {useRef, useState, useEffect} from "react"



const Radar = ({ config }) => {
    const ref = useRef();
    useEffect(() => {
        if (ref.current) {
            const myChart = new chartXkcd.Radar(ref.current, config); 
        }
    })

    return (
        <svg ref={ref}/>
    )
}
export default Radar;