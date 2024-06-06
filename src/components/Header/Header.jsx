import React from "react";
import "./header.css";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "primereact/button";
import { Badge } from "primereact/badge";
import { useSelector } from "react-redux";

const Header = () => {
  const dataR = useSelector((state) => state.AddFav.addwatchList);
  console.log(dataR);
  const navigate = useNavigate();
  const navigateHandle = (params) => {
    // params.preventDefault();
    if (params === "movie") {
      navigate("/explore/movie");
    } else {
      navigate("/explore/tv");
    }
  };
  return (
    <>
      <div className="header">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="listing">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <a
                      href=""
                      onClick={() => {
                        navigateHandle("movie");
                      }}
                      className="text-white"
                    >
                      Movies
                    </a>
                  </li>
                  <li>
                    <a className="logoHighlight">SRK+ OTT APP</a>
                  </li>
                  <li>
                    <a
                      href=""
                      onClick={() => {
                        navigateHandle("tv");
                      }}
                      className="text-white"
                    >
                      TV Shows
                    </a>
                  </li>
                  <li>
                    <Link to="">Favourites</Link>
                  </li>
                  <li>
                    <Button type="button" label="Favraoute Movie  ">
                      <Badge value={dataR.length || 0}></Badge>
                    </Button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
