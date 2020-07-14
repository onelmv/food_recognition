import React from 'react';
import './ImageRecognition.css'

const ImageRecognition =({url, ingredients})=>{
/* 
    let block = "";
    let i =0;
    while(ingredients[i].value >= 0.80){
        block += `<li>${ingredients[i]}</li>`
    }
 */


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
                                <th>Code</th>
                                <th>Company</th>
                            </tr>
                        </thead>
                        </table>
                    </div>
                    <div class="tbl-content">
                        <table cellpadding="0" cellspacing="0" border="0">
                        {/*     <tbody>
                                <tr>
                                    <td>AAC</td>
                                    <td>AUSTRALIAN COMPANY </td>
                                    
                                </tr>
                                <tr>
                                    <td>AAD</td>
                                    <td>AUSENCO</td>
                                    
                                </tr>
                                <tr>
                                    <td>AAX</td>
                                    <td>ADELAIDE</td>
                                    
                                </tr>
                                
                            </tbody> */}
                        </table>
                    </div>
                </section>
              
            </div>
        </div>
    )
}

export default ImageRecognition