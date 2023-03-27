import React, { useEffect, useState } from 'react';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import SingleData from '../SingleData/SingleData';

const Cards = () => {
  const [data, setData] = useState([]);
  const [singleDatas, setSingleDatas] = useState({})
  const [seeMore, setSeeMore] = useState(false);
  const [uniqueId, setUniqueId] = useState(null);

  // const [spinner, setSpinner] = useState(true);

  const handleSeeMore = () =>{
    setSeeMore(true);
  };

  const handleSort =() =>{
    const sortData = data.sort((a, b) =>{
      return new Date(b.published_in) - new Date(a.published_in);
    });
    setData([...data, sortData]);
  }

  useEffect(()=> {
fetch(`https://openapi.programming-hero.com/api/ai/tool/${uniqueId}`)
.then(res => res.json())
.then(data => setSingleDatas(data.data))
  },[uniqueId]);

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

  },[]);
  return (
    <>
     <span onClick={handleSort}>
     <Button>Short By Date</Button>
     </span>
    <div className='grid grid-cols-1 lg:grid-cols-3 md:px-5 px-5 lg:px-12 gap-5 my-6 md:grid-cols-2'>
      {
      data?.slice(0, seeMore? 12 : 6).map(singleData => <SingleData singleData = {singleData} key={singleData.id} setUniqueId = {setUniqueId}/>)
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
        <Modal  singleDatas= {singleDatas}/>
    </>
  );
};

export default Cards;