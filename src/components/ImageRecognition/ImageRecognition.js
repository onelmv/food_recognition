import React from 'react';

const ImageRecognition =({url})=>{
    return (
        <div className='center w-50 ma3' >
            <img src={url} alt=""/>
        </div>
    )
}

export default ImageRecognition