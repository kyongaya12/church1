import React from 'react'

var bgColors = { "Default": "#81b71a",
                    "Blue": "#00B1E1",
                    "Cyan": "#37BC9B",
                    "Green": "#8CC152",
                    "Red": "#E9573F",
                    "Yellow": "#F6BB42",
                    "black":"#000000"
};

const Footer = () => {
    return (
        <div style={{backgroundColor: bgColors.black}}>
                 <section className=""> 
        
        <div className="container " >
                   <div className="row bg-footer">
                       <div className="col-md-12 ">                              
   </div>
   <div className="row ">
   <h2 class="text-md-center py-5">규칙적으로 예배드리는 장소 </h2>
   </div>
   <div className="row vk-bottom-margin">
   <div className="col-md-4">
   <h3> 뉴욕: 프러싱</h3>
   Sunday 11 AM<br/>
   Sheraton LaGuardia East Hotel 7Floor<br />
   135-20 39th Ave, Flushing, NY 11354
   
       </div>
       <div className="col-md-4">
         <h3>뉴욕: 브랑스</h3>
       Wendesday 7:30 PM<br/>
      Residence Inn by Marriott New York <br/>
      at Metro Ctr Atrium 1776<br/>
   Eastchester Road, Bronx, NY 10461
   </div>
   
       <div className="col-md-4">
         <h3>텍사스</h3>
       Sunday 11 AM, Friday 7:30 PM<br/> 
       ECM Freedom Arena<br/>
   1701 N. Fielder Rd<br/>
   Arlington, TX 76012
       </div>
       
   </div>
   
   ​</div>
           </div></section>
        </div>
    )
}

export default Footer
