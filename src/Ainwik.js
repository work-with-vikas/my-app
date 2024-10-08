import React from 'react';
import './Component/Button.css'
const Ainwik = () => {
    let buttonName=["web-developer","App-developer","Software-developer","Data-Science","Data-Scientist","Digital-marketing","Graphing-Desigining","Data-Analystic","Ui-Ux","Python","Java","React.js","My-sql","Power-bi","Node-js"];
    return (
        <div className={styled.Ainwik}>
            {buttonName.map((vol)=>{
                <button className={styled.button}>{vol}</button>
            })}
            

        </div>
    );
}

export default Ainwik;
