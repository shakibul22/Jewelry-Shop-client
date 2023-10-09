import { Table } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import JewelryCard from './JewelryCard';

const AllJewelry = () => {
    const [allJewelrys, setAllJewelrys] = useState([]);
  
    useEffect(() => {
      fetch('http://localhost:5000/allJewelry')
        .then(res => res.json())
        .then(data => setAllJewelrys(data))
    }, []);
  
  
  
    return (
      <div className='p-3 ' style={{ backgroundImage: "url('https://images.pexels.com/photos/1323712/pexels-photo-1323712.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }} >
  
        <div className="text-center mt-4 ">
          <h2 className="text-orange-500 text-3xl font-bold mb-4">Our All Jewelry</h2>
          <p className="p-3">The majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
        </div>

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          
  
          <Table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
  
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Seller Name
                </th>
                
                <th scope="col" className="px-6 py-3">
                 price
                </th>
                <th scope="col" className="px-6 py-3">
                 Quantity
                </th>
                
               
              </tr>
            </thead>
            <tbody>
              {
                allJewelrys.map((jewelry)=><JewelryCard jewelry={jewelry} key={jewelry._id}></JewelryCard>)
              }
         
            </tbody>
          </Table>
          
            
         
      
        </div>
  
      </div>
    );
};

export default AllJewelry;