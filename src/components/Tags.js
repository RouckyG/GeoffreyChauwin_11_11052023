import React from 'react';

const Tags = (props) => {

    return <ul className='tags'>
        {props.tags.map((tag)=>{ return <li>{tag}</li> })}
    </ul>

}

export default Tags
