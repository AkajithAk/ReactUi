import React, { useEffect, useState } from "react";

function LatLon(){
    const [lat,setLat]=useState()
    const [lon,setLon]=useState()

    useEffect(()=>{
        navigator.geolocation.getCurrentPosition((postion)=>{
            setLat(postion.coords.latitude)
            setLon(postion.coords.longitude)
        })
    })

    return(
        <div>
            <h1>{lat} location {lon}</h1>
        </div>
    );
}
export default LatLon;