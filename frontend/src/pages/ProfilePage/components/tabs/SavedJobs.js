import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { useAppContext } from '../../../../context/appContext'
import JobBox from '../JobBox'
const SavedJobs = () => {

  const {token } = useAppContext()
  const [jobs,setjobs] = useState([])

    const getsavedjob = async () => {
      await axios
        .get(`/api/v1/job/savedjobs`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setjobs(res.data.data);
          console.log(res.data.data)
        });
    };

    useEffect(()=>{
      getsavedjob()

    },[])


  const [savedlst,setsaved] = useState([])
  if(jobs.length < 1){
    return <h1>no jobs found</h1>
  }
  return (
    <div>{
      jobs.map((item,index)=>{
        return <JobBox job={item} key={index}/>
      })
      }</div>
  )
}

export default SavedJobs