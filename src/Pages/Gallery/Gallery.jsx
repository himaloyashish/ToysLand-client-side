import React from 'react';
import './Gallery.css'

const Gallery = () => {
    return (
        <div className='py-20 gallery'>
            <div className='text-center '>
                <h2 className='text-4xl mt-6 text-white font-bold'>ToysLand Gallery</h2>
                <hr className='border-2 bg-slate-200 w-1/3 m-auto mb-3 mt-3' />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 justify-center items-center w-10/12 m-auto sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA0UP3wTwX5rkTC16bYTw2UECeJ0VFFsrRbQ&usqp=CAU" alt="" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA0UP3wTwX5rkTC16bYTw2UECeJ0VFFsrRbQ&usqp=CAU" alt="" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq-WvjCODO6okIZtu-tM3M9EoXZLG0eIdRHw&usqp=CAU" alt="" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1ECcbg8Ip9Jg8HQtk7fRJ4g1H4sMn5cPLxw&usqp=CAU" alt="" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo4w1lO2JjF-eVZCYkYDqds1kwqyxps8wfaA&usqp=CAU" alt="" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1ECcbg8Ip9Jg8HQtk7fRJ4g1H4sMn5cPLxw&usqp=CAU" alt="" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9WMTAdks1YB45ds_POW_UxCKxTOHSHE9YzA&usqp=CAU" alt="" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDjgXsq8AEGOE99rIxU6iloVvQea64mRnl0w&usqp=CAU" alt="" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDjgXsq8AEGOE99rIxU6iloVvQea64mRnl0w&usqp=CAU" alt="" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA0UP3wTwX5rkTC16bYTw2UECeJ0VFFsrRbQ&usqp=CAU" alt="" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq-WvjCODO6okIZtu-tM3M9EoXZLG0eIdRHw&usqp=CAU" alt="" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo4w1lO2JjF-eVZCYkYDqds1kwqyxps8wfaA&usqp=CAU" alt="" />
            </div>
        </div>
    );
};

export default Gallery;