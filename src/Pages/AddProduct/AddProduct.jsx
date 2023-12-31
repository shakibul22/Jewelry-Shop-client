import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';

const AddProduct = () => {
    const { user } = useContext(AuthContext);
    const [pictureUrl, setPictureUrl] = useState('');
    const [name, setName] = useState('');
    const [sellerName, setSellerName] = useState('');
    const [sellerEmail, setSellerEmail] = useState('');
    const [price, setPrice] = useState('');
    const [rating, setRating] = useState('');
    const [quantity, setQuantity] = useState('');
    const [description, setDescription] = useState('');

    const handleAddToy = (event) => {
        event.preventDefault();

        const data = { pictureUrl, name, sellerName: user?.displayName,  sellerEmail: user?.email, price, rating, quantity, description, };

        fetch('https://jewelry-shop-server-gggoggy1u-shakibul22.vercel.app/PostJewelry', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire('Success', 'Added jewelry successfully!', 'success');
                }
            });
    };
    console.log(user);

    return (
        <div className="container mx-auto  p-4 mt-10 md:mt-20">

            <h1 className="text-2xl font-bold mb-8 text-center">Add A Jewelry</h1>
            <form onSubmit={handleAddToy} className=" mx-auto grid grid-cols-1 md:grid-cols-2 gap-3">

                <div className="mb-4">
                    <label htmlFor="name" className="block mb-1">
                        Name:
                    </label>
                    <input
                        type="text"
                        id="name"
                        className="w-full border border-gray-300 rounded px-3 py-2"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="sellerName" className="block mb-1">
                        Seller Name:
                    </label>
                    <input
                        type="text"
                        id="sellerName"
                        className="w-full border border-gray-300 rounded px-3 py-2"
                        value={user?.displayName}
                        onChange={(e) => setSellerName(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="sellerEmail" className="block mb-1">
                        Seller Email:
                    </label>
                    <input
                        type="email"
                        id="sellerEmail"
                        className="w-full border border-gray-300 rounded px-3 py-2"
                        value={user?.email}
                        onChange={(e) => setSellerEmail(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="pictureUrl" className="block mb-1">
                        Picture URL :
                    </label>
                    <input
                        type="text"
                        id="pictureUrl"
                        className="w-full border border-gray-300 rounded px-3 py-2"
                        value={pictureUrl}
                        onChange={(e) => setPictureUrl(e.target.value)}
                    />
                </div>

               
                <div className="mb-4">
                    <label htmlFor="price" className="block mb-1">
                        Price:
                    </label>
                    <input
                        type="number"
                        id="price"
                        className="w-full border border-gray-300 rounded px-3 py-2"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="rating" className="block mb-1">
                        Rating:
                    </label>

                    <input
                        type="number"
                        id="rating"
                        className="w-full border border-gray-300 rounded px-3 py-2"
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="quantity" className="block mb-1">
                        Available quantity:
                    </label>
                    <input
                        type="number"
                        id="quantity"
                        className="w-full border border-gray-300 rounded px-3 py-2"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="description" className="block mb-1">
                        Detail description:
                    </label>
                    <textarea
                        id="description"
                        className="w-full border border-gray-300 rounded px-3"
                        rows="2"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 h-14 md:mt-7 text-white rounded hover:bg-blue-600"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default AddProduct;