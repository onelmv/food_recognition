import React from 'react';
import './ImageRecognition.css'

const ImageRecognition =({url, ingredients})=>{

    
    const dataTable=()=>{
        
        let block = [];
        
        for(let i=0; i< ingredients.length;i++){
           
            console.log(ingredients[i].name)
            block.push(<tr><td>{ingredients[i].name}</td><td>{ingredients[i].value}</td></tr>)
        }
        console.log(block)
        return block;
    }

  
    const generateTable=()=>{
        if(url){

            return (
                <div className='border'>
                    
                    <section>
      
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
                                <tbody >
                                    
                                    {dataTable().map(i=>i)}
                                </tbody>
                            </table>
                        </div>
                    </section>
                  
                </div>
            )
        }
    }
        
     

    return (
        <div className='center w-70 ma3 flex-wrap items-center flex-row justify ' >
            <img src={url} alt=""/>
            
            {generateTable()}
            
        </div>
    )
}

export default ImageRecognition