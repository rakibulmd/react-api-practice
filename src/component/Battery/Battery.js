import React from "react";
import zero from "./Battery/zero.png";
import twenty from "./Battery/20.png";
import fifty from "./Battery/50.png";
import eighty from "./Battery/80.png";
import full from "./Battery/100.png";

const Battery = (props) => {
    // console.log(twenty);
    return (
        // First way by changing src value
        <div>
            <img style={{ width: "100px" }} src={props.name} alt="" />
            <br />
            {/* Second way by changing display property */}
            <img
                style={
                    props.value === 100
                        ? { display: "inline", width: "100px" }
                        : { display: "none" }
                }
                src={full}
                alt=""
            />
            <img
                style={
                    props.value < 100 && props.value >= 80
                        ? { display: "inline", width: "100px" }
                        : { display: "none" }
                }
                src={eighty}
                alt=""
            />
            <img
                style={
                    props.value < 80 && props.value >= 40
                        ? { display: "inline", width: "100px" }
                        : { display: "none" }
                }
                src={fifty}
                alt=""
            />
            <img
                style={
                    props.value < 40 && props.value > 0
                        ? { display: "inline", width: "100px" }
                        : { display: "none" }
                }
                src={twenty}
                alt=""
            />
            <img
                style={
                    props.value === 0
                        ? { display: "inline", width: "100px" }
                        : { display: "none" }
                }
                src={zero}
                alt=""
            />
        </div>
    );
};

export default Battery;
