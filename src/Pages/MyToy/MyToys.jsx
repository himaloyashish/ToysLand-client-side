import React, { useContext, useEffect, useState } from 'react';


import './MyToys.css'
import { AuthContext } from '../../Provider/AuthProvider';
import MyToysRow from '../MyToysRow/MyToysRow';
import { Helmet } from 'react-helmet';

const MyToys = () => {

    const [asc, setAsc] = useState(true)

    const { user } = useContext(AuthContext)
    const [toys, setToys] = useState([])

    useEffect(() => {
        fetch(`https://toy-verse-server-assignment.vercel.app/myToys/${user?.email}`)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [user, asc])





    return (
        <div className='toyBGC py-8 pb-40'>
            <Helmet>
                <title>ToysLand | My Toys</title>
            </Helmet>
            <h2 className='text-3xl text-center text-[#343131] py-5 font-bold'>Here all the toys you have added</h2>
            <hr className='border-4 border-b-gray-800  w-2/4 m-auto mb-8 mt-3' />

            <button onClick={() => setAsc(!asc)} className='text-xl btn mb-4  py-3 font-bold items-center'>{asc ? 'Price: High to low' : 'Price: Low to high'}</button>
            <div className="overflow-x-auto w-full">
                <table className="table w-full toyBGC ">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Toy Name</th>
                            <th>Sub-Category</th>
                            <th>price</th>
                            <th>Available Quantity</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            toys.map(toy => <MyToysRow
                                key={toy._id}
                                toy={toy}
                                toys={toys}
                                setToys={setToys}
                            ></MyToysRow>)
                        }
                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default MyToys;