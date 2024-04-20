import React, { useRef } from 'react';

const ScrollToParticularSection = () => {

    const ref= useRef();

    const data=[
        {
            label:"First Card",
            style:{
                width:"100%",
                height:"600px",
                background:"red"
            }
        },
        {
            label:"Second Card",
            style:{
                width:"100%",
                height:"600px",
                background:"green"
            }
        },
        {
            label:"Third Card",
            style:{
                width:"100%",
                height:"600px",
                background:"blue"
            }
        },
        {
            label:"Fourth Card",
            style:{
                width:"100%",
                height:"600px",
                background:"pink"
            }
        },
        {
            label:"Fifth Card",
            style:{
                width:"100%",
                height:"600px",
                background:"yellow"
            }
        }
    ]

    function handleScrollToParticularSection(){
        let  pos=ref.current.getBoundingClientRect().top

        window.scrollTo({
            top:pos,
            behavior:"smooth"
        })
    }



    return (
        <div>
            <h1>Scroll to a particular section</h1>
            <button onClick={handleScrollToParticularSection}>Click to Scroll</button>
            {
                data.map((dataItem,index)=> <div ref={index===3 ? ref:null} style={dataItem.style}>
                    <h3>{dataItem.label}</h3>
                </div>)
            }
        </div>
    );
}

export default ScrollToParticularSection;
