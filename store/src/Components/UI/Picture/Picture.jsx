import React from 'react';

function Picture({id, imgId, src, ...props}) {
    return (
        <div className='picture' id = {id}>
            <img id={imgId} src={src}/>
        </div>
    );
}

export default Picture;