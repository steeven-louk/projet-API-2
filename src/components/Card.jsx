import React from 'react';
import './styles/card.css'

const Card = ({data}) => {
  return (

        <section className="card-container">
            <div className="card">
                <div className="card-img">
                    <img src={data.thumbnail} alt="" />
                </div>
                <div className="card-body">
                    <h2 className="card-title"> {data.title} </h2>
                    <p className="desc"> {data.short_description} </p>
                </div>
                <div className="card-footer">
                    <span> {data.platform} </span>
                </div>
            </div>
        </section>

    );
};

export default Card;
