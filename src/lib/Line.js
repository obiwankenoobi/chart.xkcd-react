import chartXkcd from 'chart.xkcd';
import React, {useRef, useState, useEffect} from "react"



const Line = ({ config }) => {
    const ref = useRef();
    useEffect(() => {
        if (ref.current) {
            const myChart = new chartXkcd.Line(ref.current, config); 
        }
    })

    return (
        <svg ref={ref}/>
    )
}
export default Line;