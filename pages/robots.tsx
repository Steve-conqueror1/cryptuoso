import {PageHeader} from '../components/shared/PageHeader';
import React, { useEffect } from "react";
import robotsStyles from './../styles/Robots.module.scss';
import Link from "next/link";
import { LOAD_ROBOTS } from './../lib/queries/getAllRobots';
import { gql, useQuery} from '@apollo/client';





// export const getStaticProps = async () => {
//     const { data, error, loading } = await client.query({
//       query: gql`
//         query Robots {
//           robots(limit:10) {
//             id
//             code            
//           }
//         }
//       `,
//     });

//     return {
//       props: {        
//         data:data
//       },
//    };
// }





const RobotsList = () => {   

   const {error, loading, data} = useQuery(LOAD_ROBOTS);
   console.log("data....", data)

   
    const handleOnClick = () => {
         
    }

    useEffect(() => {
        console.log("data....", data)
    }, [data])



    return (    
        <>
            <PageHeader>
                <title>Robots List</title>
            </PageHeader>           
            <h2 className={robotsStyles.header}>View Our Trading</h2>
            {/* <div  className={robotsStyles.grid} >
            {
                robots.map((robot, index) => {
                    const urlPath = `/robots/robot/${robot.id}`

                    return(                 
                        <div key={index} className={robotsStyles.card}>
                            <Link href={urlPath}>
                                <div className={robotsStyles.robot}>
                                    <div className="img">
                                       <img src={`https://robohash.org/${index}/?size=75x75`} alt="Robot"/>
                                    </div>
                                    <div>
                                        <p>
                                            <span className={robotsStyles.part}>ID:</span> {robot.id}<br/>
                                            <span className={robotsStyles.part}>Robot Code: </span> {robot.id}
                                        </p>
                                        <p className={robotsStyles.detail}>View robot details <span className={robotsStyles.part}>&#8594;</span></p>
                                    </div>
                                </div>
                            </Link>
                        </div>                   
                        )
                })
            }           
            </div> */}
            <div onClick={handleOnClick} className={robotsStyles.pagination}>
                <div>Load more &#8594;</div>                
            </div>
            </>
    )
}

export default RobotsList;


