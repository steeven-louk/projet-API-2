import React from 'react';

const Screenshot = ({data}) => {
   
  return (
      <section className='screenShot'>
            <div className="screenShot-container">
                {data.map((item) =>{
                   return (
                       <div key={item.id} className='screenShot-img'>
                          <img src={ item.image } alt="" />
                       </div>
                   )
                })}
            </div> 
      </section>
  );
};

export default Screenshot;
