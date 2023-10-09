import React from 'react';

const JewelryCard = ({jewelry}) => {
    const {_id, name,price,sellerName,quantity} = jewelry;
  return (
    
      <tr className="bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-600">

        <td className="px-6 py-4">
         {name}
        </td>
        <td className="px-6 py-4">
          {sellerName}
        </td>
       
        <td className="px-6 py-4">
          {price}
        </td>
        <td className="px-6 py-4">
          {quantity}
        </td>
       
      </tr>
    );
};

export default JewelryCard;
