import React from 'react';

const HOCRed = (props) => {
    return (
        <div>
           <h2 style={{backgroundColor:"red",width:"200px"}}><props.cmp/> Red Counter</h2> 
           <h2 style={{backgroundColor:"Green",width:"200px"}}><props.cmp/>Green Counter</h2> 
           <h2 style={{backgroundColor:"Blue",width:"200px"}}><props.cmp/>Blue Counter</h2> 
           <h2 style={{backgroundColor:"pink",width:"200px"}}><props.cmp/>pink Counter</h2> 
        </div>
    );
};

export default HOCRed;