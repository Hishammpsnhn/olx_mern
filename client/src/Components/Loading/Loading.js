import React from 'react'
import { TailSpin, } from 'react-loader-spinner'

function Loading() {
    return (
        <div style={{}}>
            <div style={{ margin: 'auto', width: '60%',}} >
                <TailSpin color="#00BFFF" height={30} width={100} /> 
                
            </div>
        </div>
    )
}

export default Loading