import chartXkcd from 'chart.xkcd';
import React, {useRef, useState, useEffect} from "react"



const XY = ({ config }) => {
    const ref = useRef();
    useEffect(() => {
        if (ref.current) {
            const myChart = new chartXkcd.XY(ref.current, config); 
        }
    })

    return (
        <svg ref={ref}/>
    )
}
export default XY;