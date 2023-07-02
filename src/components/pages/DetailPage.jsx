import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';
import SectionDetails from '../SectionDetails';
import { Link } from 'react-router-dom';
import { ArrowBackOutlined } from '@material-ui/icons'
import '../styles/detailsPages.css'

const DetailPage = () => {

    const {id} = useParams();
    const [data, setData] = useState([]); 

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const fetchData = async () =>{
        const response = await axios.request(options);
        setData(response.data);

        console.log(response.data);
    }

    useEffect(() => {
        fetchData();
    }, [fetchData]);
    


const options = {
  method: 'GET',
  url: 'https://free-to-play-games-database.p.rapidapi.com/api/game',
  params: {id: {id}},
  headers: {
    'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
    'x-rapidapi-key': '47099885b7msha569d88eaf12779p1db488jsnab1b570843ec'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});




  return(

        <section className='detailPage'>
            <div className="nav">
              <Link to='./pages/Home.jsx'>
               <ArrowBackOutlined/> HOME
              </Link>
            </div>

            <div className="details-container">
              <div className="details-img">
                  <img src={data.thumbnail} alt="" />
                  <span className="status"> {data.status} </span>
              </div>
              <div className="details-body">
                 <SectionDetails data={data}/>
                  
              </div>
            </div>
        </section>    
    
    );
};

export default DetailPage;
