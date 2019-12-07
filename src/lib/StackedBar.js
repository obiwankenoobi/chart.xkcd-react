import chartXkcd from 'chart.xkcd';
import React, {useRef, useState, useEffect} from "react"



const StackedBar = ({ config }) => {
    const ref = useRef();
    useEffect(() => {
        if (ref.current) {
            const myChart = new chartXkcd.StackedBar(ref.current, config);
        }
    })

    return (
        <svg ref={ref}/>
    )
}
export default StackedBar;
