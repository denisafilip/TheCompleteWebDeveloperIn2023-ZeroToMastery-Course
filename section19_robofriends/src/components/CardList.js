import React, {Fragment} from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
    return (
        <Fragment>
            {
                robots.map((robot, robotIndex) => {
                    return (
                        <Card
                            key={robotIndex}
                            id={robot.id}
                            name={robot.name}
                            email={robot.email}
                        />
                    );
                })
            }
        </Fragment>
    );
}

export default CardList;