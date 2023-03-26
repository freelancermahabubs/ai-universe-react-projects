import React, { useEffect, useState } from 'react';
import Button from '../Button/Button';
import SingleData from '../SingleData/SingleData';

const Cards = () => {
  const [data, setData] = useState([]);
  const [seeMore, setSeeMore] = useState(false);
  // const [spinner, setSpinner] = useState(true);
  const handleSeeMore = () =>{
    setSeeMore(true);
  }
  useEffect(()=>{
    const loadData = async () =>{
      try{
        const URL = `https://openapi.programming-hero.com/api/ai/tools`;
        const res = await fetch(URL)
        const data = await res.json()
        setData(data.data.tools)
      }
      catch(error){
        console.log(error)
      }
    };
    loadData()

  },[])
  return (
    <>
    <div className='grid grid-cols-1 lg:grid-cols-3 md:px-5 px-5 lg:px-12 gap-5 my-6 md:grid-cols-2'>
      {
      data.slice(0, seeMore? 12 : 6).map(singleData => <SingleData singleData = {singleData} key={singleData.id}/>)
      }
    </div>
{/* 
  {
    !spinner &&(
      <button  className="btn loading">loading</button>
    )
  } */}

    <div className='text-center'>
      {
        !seeMore && (
          <span style={{display: 'inline-block'}} onClick={handleSeeMore}>
        <Button>See More</Button>
        </span>
        ) 
      }
    
        </div>
    </>
  );
};

export default Cards;