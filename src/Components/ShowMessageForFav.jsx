import { useContext, useEffect, useState } from 'react';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

function ShowMessageForFav({ message, updateAddedToFavs }) {

    return (
        <div
            aria-live="polite"
            aria-atomic="true"
            className="bg-dark position-relative"
            style={{ minHeight: '100px' }}
        >
            <ToastContainer position="top-end" className="p-3" >
                <Toast>
                    <Toast.Header className='space-x-4'>
                        <div className="flex justify-between">
                            <img
                                src="src\assets\assets\icons\strong.png"
                                className="rounded me-2 h-8 w-8 invert"
                                alt=""
                            />
                            <button onClick={() => { updateAddedToFavs(false) }} className='font-bold text-white hover:text-red-500 hover:shadow-md'> X </button>
                        </div>
                        <strong className="me-auto text-green-500 font-semibold text-xl px-2">Success</strong>
                        <small className="text-muted text-slate-300">just now</small>
                    </Toast.Header>
                    <Toast.Body className='text-white'>{message}</Toast.Body>

                </Toast>

            </ToastContainer>
        </div>
    );
}

export default ShowMessageForFav;