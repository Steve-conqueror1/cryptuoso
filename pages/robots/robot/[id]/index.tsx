import { gql } from "@apollo/client";
import {useRouter} from 'next/router';
import { useEffect, useState } from "react";
import {createApolloClient} from '../../../../lib/apolloClient';
import {PageHeader} from './../../../../components/shared/PageHeader';
import robotStyles from './../../../../styles/Robot.module.scss';
import {Input} from './../../../../components/Input';



export const getServerSideProps = async (context) => {
    const client = createApolloClient();   

    const id = context.params.id; 

    const result = await client.query({
        query: gql`
          query Robots {
            robots_by_pk(id: "${id}") {
                id
                name
                robot_settings {
                robot_settings
                }           
            }
          }
        `,
      });  

    return {
      props: {        
        result
      },
   };
}




const Robot = ({result}) => {
    const router = useRouter();  


    const {error, loading, data} = result;
    
    const {id, name, robot_settings} = data.robots_by_pk;

    const [settingsChange, setSettingsChange] = useState(false);

    const SettingsObj = robot_settings.robot_settings;
   

    useEffect(() => {   
        return () => {
            setSettingsChange(false); 
        }
    }, [settingsChange])
    
   
    const handleChange = (e) => {
        const objKey =  e.target['id'];
        SettingsObj[objKey] = e.target.value;
        setSettingsChange(true);       
    }

    const settings = Object.entries(SettingsObj); 
    const robotSetting = settings.map((setting, index) => {
        return (
            <>
                <span className={robotStyles.part}>{setting[0]}:</span> {setting[1]}<br/>  
            </>  
        )                     
    })
   

    const formFields = settings.map((setting, index) => {
        return (
            <>
                <span className={robotStyles.grid}> <span className={robotStyles.part}>{setting[0]}: </span> <Input id={setting[0]} onChange={handleChange} /> </span><br/>  
            </>  
        )                     
    })
    
   
    return (
        <>
            <PageHeader>
                <title>Robots Details</title>
            </PageHeader>     
            <h2 className={robotStyles.header}>Robot details</h2>
            <div  className={robotStyles.grid}>
                <h4 className={robotStyles.card}>
                    <span className={robotStyles.part}>ID:</span> {id}<br/>
                    <span className={robotStyles.part}>Robot Name: </span> {name}
                </h4>
                <h4 className={robotStyles.card}>
                    <span className={robotStyles.header}> Robot Settings </span> <br/> {robotSetting}
                </h4>             
            </div>

            <form action="">
                {formFields}
            </form>
         </>
         )
}


export default Robot;