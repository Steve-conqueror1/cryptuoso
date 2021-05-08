import { PageHeader } from "../components/shared/PageHeader";
import React, { useState } from "react";
import robotsStyles from "./../styles/Robots.module.scss";
import Link from "next/link";
import { createApolloClient } from "./../lib/apolloClient";
import { LOAD_ROBOTS } from "./../lib/queries/getAllRobots";

export const getServerSideProps = async () => {
    const client = createApolloClient();
    const result = await client.query({
        query: LOAD_ROBOTS
    });

    return {
        props: {
            result
        }
    };
};

const RobotsList = ({ result }) => {
    const { data } = result;
    const { robots } = data;

    const [numberOfRobots, setNumberOfRobots] = useState(10);

    const handleFetchNext = () => {
        setNumberOfRobots(numberOfRobots + 10);
    };

    const handleFetchPrevious = () => {
        setNumberOfRobots(numberOfRobots - 10);
    };

    const dataLength = robots.length;

    return (
        <>
            <PageHeader>
                <title>Robots List</title>
            </PageHeader>
            <h2 className={robotsStyles.header}>View Our Trading</h2>
            <div className={robotsStyles.grid}>
                {robots
                    .slice(numberOfRobots - 10, numberOfRobots)
                    .map((robot, index) => {
                        const urlPath = `/robots/robot/${robot.id}`;

                        return (
                            <div key={index} className={robotsStyles.card}>
                                <Link href={urlPath}>
                                    <div className={robotsStyles.robot}>
                                        <div className="img">
                                            <img
                                                src={`https://robohash.org/${index}/?size=75x75`}
                                                alt="Robot"
                                            />
                                        </div>
                                        <div>
                                            <p>
                                                <span
                                                    className={
                                                        robotsStyles.part
                                                    }
                                                >
                                                    ID:
                                                </span>{" "}
                                                {robot.id}
                                                <br />
                                                <span
                                                    className={
                                                        robotsStyles.part
                                                    }
                                                >
                                                    Robot Code:{" "}
                                                </span>{" "}
                                                {robot.id}
                                            </p>
                                            <p className={robotsStyles.detail}>
                                                View robot details{" "}
                                                <span
                                                    className={
                                                        robotsStyles.part
                                                    }
                                                >
                                                    &#8594;
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        );
                    })}
            </div>
            <div className={robotsStyles.pagination}>
                {numberOfRobots <= 10 ? null : (
                    <div onClick={handleFetchPrevious}> &#8592;Previous</div>
                )}{" "}
                {dataLength - numberOfRobots > 10 ? (
                    <div onClick={handleFetchNext}>Next &#8594;</div>
                ) : null}
            </div>
        </>
    );
};

export default RobotsList;
