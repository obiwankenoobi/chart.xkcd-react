import chartXkcd from 'chart.xkcd';
import React, {useRef, useState, useEffect} from "react"



const Bar = ({ config }) => {
    const ref = useRef();
    useEffect(() => {
        if (ref.current) {
            const myChart = new chartXkcd.Bar(ref.current, config); 
        }
    })

    return (
        <svg id="line" ref={ref}/>
    )
}
export default Bar;