import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../Card";
import "../styles/home.css";
import DetailPage from "./DetailPage";

export const Home = () => {
  const [data, setData] = useState([]);

  const options = {
    method: "GET",
    url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
    headers: {
      "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      "x-rapidapi-key": "47099885b7msha569d88eaf12779p1db488jsnab1b570843ec",
    },
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchData = async () => {
    const response = await axios.request(options);
    setData(response.data);
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <section className="homeSection">
      <div className="container">
        <div className="title-container">
          <h1>Meilleurs jeux gratuits pour PC et navigateur en 2022 !</h1>
          <span>354 jeux gratuits trouvés dans notre liste !</span>
        </div>

        <div className="game-container">
          {data.splice(0, 28).map((game) => {
            return (
              <Link
                to={`/details/${game.id}`}
                element={<DetailPage />}
                key={game.id}
              >
                <Card data={game} />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
