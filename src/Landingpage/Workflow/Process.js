import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import cabsorb from "../../assets/cabsorp.png";
import cemisiones from "../../assets/cemisiones.png";
import steps from "../../assets/steps.png";
import srcssinks from "../../assets/srcs-sinks.png";

const Process = () => {
  const process = [
    {
      id: 0,
      img_src: cabsorb,
      description: "Calculation of carbon absorption",
    },
    {
      id: 1,
      img_src: cemisiones,
      description: "Calculation of carbon emissions",
    },
    {
      id: 2,
      img_src: steps,
      description: "Summing Up",
    },
    {
      id: 3,
      img_src: srcssinks,
      description: "Identification of Sources and Sinks",
    },
  ];
  const [step, setStep] = useState(process);
  const changeCard = (curEle) => {
    const {img_src,description} = curEle
        setStep({img_src},{description})
        
    }
 
  return (
    <div>
      <div id="workflow">
        <nav className="workflow-section">
          <ul>
            {step.map((curEle) => {
              return (
                <>
                  <li className="step">
                    <NavLink>
                      <button onClick={changeCard}>{curEle.id}</button>
                    </NavLink>
                  </li>
                  <div></div>
                </>
              );
            })}
          </ul>
        </nav>
      </div>
      <div>
        {step.map((curEle) => {
          return (
            <div className="blog-posts">
              <div className="post">
                <img src={curEle.img_src} className="post-img" />
                <div className="post-content">
                  <h3>{curEle.description}</h3>
                  <span className="date">Read More</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Process;
