import React from 'react';
const Modal = (props) => {
  const {accuracy, features, image_link, integrations, logo, pricing, use_cases, description} = props?.singleDatas;
  console.log(Object?.values(integrations || {}))
  return (
    <>
      <input type="checkbox" id="my-modal-5" className="modal-toggle" />
      
   <div className="modal">
    
  <div className="modal-box w-11/12 max-w-5xl">
  <div className="modal-action mb-5">
      <label htmlFor="my-modal-5" className="btn">Close</label>
    </div>
    <div className="card lg:card-side bg-base-100">
  <div className="card-body border-2 border-error mr-2 rounded-2xl bg-orange-200">
   <h2 className="card-title">{description ? description : 'Not Found'}</h2>

   <div className='flex justify-between'>
 <div>
 <h1 className='text-xl font-bold'>Features</h1>
 {
 features && Object?.values(features || {}).map((value, index ) => <p> {index +1} {value.feature_name}</p>)
 }
   </div>
   <div>
    <h1 className='text-xl font-bold'>Integrations</h1>
    {
     integrations && Object?.values(integrations || {}).map((int, index) => <p>{index + 1} {int ? int : 'not found'}</p>)
    }
   </div>
 </div>

  </div>
  <figure><img  className='w-full' src={image_link ? image_link[0] : null} alt=""/></figure>
</div>
   
  </div>
</div>
    </>
  );
};

export default Modal;