import React from 'react';
import './styles/system.scss'

const SystemReq = ({data}) => {
  return (
      <section className='system_req'>
            <h1><span>graphics :</span> {data.graphics} </h1>
            <h1><span>memory :</span> {data.memory} </h1>
            <h1><span>os :</span> {data.os} </h1>
            <h1><span>processor :</span> {data.processor} </h1>
            <h1><span>storage :</span> {data.storage} </h1>
      </section>
  );
};

export default SystemReq;
