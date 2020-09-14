import React from 'react'
import {useLaunchInfoQuery} from '../../generated/graphql'
import LaunchDetails from './LaunchDetails'

const LaunchDetailsContainer=() =>{

    const {data,error,loading}=useLaunchInfoQuery({variables:{id:"13"}});
    if (loading){
        return<div>data is loading</div>
    }
        if (error){
            return<div>there is a error</div>

        }
        if(!data){
            return<div>please select the missing data</div>
        }
    
    return (
         <LaunchDetails data={data} /> )
    
}

export default LaunchDetailsContainer;
