import React, { useState } from 'react';
import Description from './variables/Description';
import Screenshot from './variables/Screenshot';
import SystemReq from './variables/System_Req';
import './styles/Section.css'

const SectionDetails = ({data}) => {
    const [card, setCard] = useState('')
  return (
    <section>

        <div className="changeBox">
            <button className='stateChangeButton' onClick={()=> setCard('card1')}>description</button>
            <button className='stateChangeButton' onClick={()=> setCard('card2')}>screenshots</button>
            <button className='stateChangeButton' onClick={()=> setCard('card3')}>system_requirements</button>
        </div>

        <div>
            {card ==='card1' && <Description data={data.description} />} 
            {card ==='card2' && <Screenshot data={data.screenshots} />  }
            {card ==='card3' && <SystemReq data={data.minimum_system_requirements} />  }
        </div>

    </section>

  );
};

export default SectionDetails;
