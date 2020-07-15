import React from 'react';
import './ImageRecognition.css'

const ImageRecognition =({url, ingredients})=>{

    
 

        let block = [];
        
        for(let i=0; i< ingredients.length;i++){
            /* const {name, value} = i; */
            console.log(ingredients[i].name)
            block.push(<tr><td>{ingredients[i].name}</td><td>{ingredients[i].value}</td></tr>)
        }
        console.log(block)
        


    return (
        <div className='center w-70 ma3' >
            <img src={url} alt=""/>
            <div className='border'>
                
                <section>
  
                    <h1>Fixed Table header</h1>
                    <div class="tbl-header">
                        <table cellpadding="0" cellspacing="0" border="0">
                        <thead>
                            <tr>
                                <th>Ingredients</th>
                                <th>Probability</th>
                            </tr>
                        </thead>
                        </table>
                    </div>
                    <div class="tbl-content">
                        <table cellpadding="0" cellspacing="0" border="0">
                            <tbody>
                                
                                {block.map(i=>i)}
                            </tbody>
                        </table>
                    </div>
                </section>
              
            </div>
        </div>
    )
}

export default ImageRecognition