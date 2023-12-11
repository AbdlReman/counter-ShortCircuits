import React, { useState } from "react";

const ShortCircuits = () => {
  const [test, setTest] = useState(3);

  return (
    <>
      {/* <div className="container text-center">
        <h1>
            {test && 'Hello from the AND operator'}
            //is ka matlab ha agr condition true ha tu 'Hello from the AND operator' ho warna agr condition true ni ha  tu test show ho
        </h1>
        <h1>
            {test || 'Hello from the OR operator'}
             //is ka matlab ha agr condition false ha tu  'Hello from the OR operator' show ho warna agr condition true ha  tu test show ho
        </h1>
        </div> */}

      {
        test >= 5 ? (
          <h1 className="text-success">Greater than 5</h1>
        ) : (
          <h5 className="text-danger">Smaller than 5</h5>
        )
        //? agr ya   >= 5 to <h1 className='text-success'>Greater than 5</h1> : is ka matlab warna
      }
    </>
  );
};

export default ShortCircuits;
