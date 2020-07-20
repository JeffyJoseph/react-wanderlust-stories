// default export + named export
import React from "react";
import AppContext from "../context/appContext";

const Cities = () => {
  return (
    <AppContext.Consumer>
      {(ctx) => {
        const { cities, selectCity } = ctx;
        return (
          <div className="cities_wrapper">
            <ul className="cities_list">
              {cities.map((item) => {
                const classes = `city_pic ${item.imgClass}`;
                console.log(item);
                return (
                  <li
                    onClick={() => selectCity(item)}
                    className="city_item"
                    key={item.id}
                  >
                    <div className="city_card">
                      <div className={classes}></div>
                      <div className="city_content">
                        <div className="city_title"> {item.name}</div>
                        <p className="city_text">
                          Country: {item.country}
                        </p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      }}
    </AppContext.Consumer>
  );
};

export default Cities;
