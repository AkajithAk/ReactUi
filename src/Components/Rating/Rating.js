import React, { useEffect, useState } from "react";
import './Rating.css';

function Rating() {
    // 😔🙂😆🤣😉😊😇🥰😋🤑
    const [data,setData] = useState(0)
    const [emoji,setEmoji] = useState('')
    useEffect(()=>{
        if(data == 0){
            setEmoji("😔")
        }else if(data == 10){
            setEmoji("🙂")
        }else if(data == 20){
            setEmoji("😆")
        }else if(data == 30){
            setEmoji("🤣")
        }else if(data == 40){
            setEmoji("😉")
        }else if(data == 50){
            setEmoji("😊")
        }else if(data == 60){
            setEmoji("😇")
        }else if(data == 70){
            setEmoji("🥰")
        }else if(data == 80){
            setEmoji("🤩")
        }else if(data == 90){
            setEmoji("😋")
        }else if(data == 100){
            setEmoji("🤑")
        }
    },[data])
    return(
        <div>
            <h1>{emoji}</h1>
            <input className={data>50?'heigh':'less'} type="range" min="0" max="100" step="10" value={data} onChange={(e)=>setData(e.target.value)} />
            <h1>{data}</h1>
        </div>
    );
}
export default Rating;