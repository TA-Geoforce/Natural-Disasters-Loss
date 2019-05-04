import React from 'react'

const width = 1500;
const height = 500;
const bg = '#ffffff';

function Legend(){
    return(
        <svg width='140' height='50'>
        <rect x={0} y={0} width={width} height={height} fill={bg}/>
            <g transform='translate(10 0)'>
            <rect style={{fill: '#1a5624', width:'18', height:'18'}} />
            <text x='24' y='9' dy='0.35em'>under $5,000,000 loss</text>
            </g>
            <g transform='translate(10 20)'>
            <rect style={{fill: '#542437', width:'18', height:'18'}} />
            <text x='24' y='9' dy='0.35em'>over $5,000,000 loss</text>
            </g>
        </svg>

    );
}

export default Legend;