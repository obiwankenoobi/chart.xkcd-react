import chartXkcd from 'chart.xkcd';
import React, {useRef, useState, useEffect} from "react"



const Pie = ({ config }) => {
    const ref = useRef();
    useEffect(() => {
        if (ref.current) {
            const myChart = new chartXkcd.Pie(ref.current, config); 
        }
    })

    return (
        <svg id="line" ref={ref}/>
    )
}
export default Pie;