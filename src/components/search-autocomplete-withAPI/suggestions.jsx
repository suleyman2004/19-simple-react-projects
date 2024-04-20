import React from 'react';

const Suggestions = ({data, handleClick}) => {
    return (
        <div>
            {
                data && data.length ?
                data.map((item,index)=> <li style={{listStyle:"none",cursor:"pointer"}} onClick={handleClick} key={index}>{item}</li>)
                :null
            }
        </div>
    );
}

export default Suggestions;
