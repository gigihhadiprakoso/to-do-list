import axiosConfig from '../services/axiosConfig';
import * as React from 'react';

const ModalDelete = (props) => {
    const {
        isShowModal,
        funcDelete,
        title
    } = props

    /* const [title, setTitle] = React.useState('');

    React.useEffect(() => {
        const fetch = (id) => {
            axiosConfig.get('/activity-groups/'+id)
                .then(response => {return response.data})
                .then(resp => {setTitle(resp.title)})
        }

        fetch(idActivity)
    },[idActivity]); */

    const handleConfirmDelete = async () => {
        await funcDelete();
        // await axiosConfig.delete('/activity-groups/'+idActivity,{})
        //     .then(response => {return response.data})

        isShowModal(false)
    }

    return (
        <>
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none w-auto my-6 mx-auto max-w-3xl" id="ModalDelete" data-cy="modal-delete">
            {/* <div className="relative w-auto my-6 mx-auto max-w-3xl"> */}

                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    {/* <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                        <label className="text-lg font-semibold">{title}</label>
                        <button onClick={closeModal}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 stroke-gray-400">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div> */}

                    {/*body*/}
                    <div 
                        className="
                        p-6 flex-auto mt-6
                        items-center justify-center"
                    >
                        <div className="justify-center">
                            <div data-cy="contained-modal-title-vcenter">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-28 h-28 stroke-red-500 text-center items-center">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                            </svg>
                            </div>
                            {/* Apakah anda yakin ingin menghapus activity <strong>"{title}"</strong> */}
                            {title}
                        </div>
                    </div>
                    
                    {/*footer*/}
                    <div className="flex items-center p-6 rounded-b content-center modal-footer">
                        <button
                            className="
                                btn
                                bg-slate-200
                                rounded-full
                                font-bold 
                                text-sm 
                                mx-2
                                px-8 py-4
                                outline-none 
                                focus:outline-none 
                                ease-linear transition-all duration-150
                            "
                            onClick={() => isShowModal(false)}
                            data-cy="modal-delete-cancel-button"
                        >
                            Batal
                        </button>
                        <button 
                            type="button"
                            className="
                                bg-red-500 
                                text-white 
                                rounded-full
                                active:bg-emerald-600 
                                font-bold 
                                text-sm 
                                mx-2
                                px-8 py-4
                                outline-none 
                                focus:outline-none 
                                ease-linear transition-all duration-150"
                            onClick={handleConfirmDelete}
                            data-cy="modal-delete-confirm-button"
                        >
                            Hapus
                        </button>
                    </div>
                </div>
            {/* </div> */}
        </div>
        <div 
            className="opacity-25 fixed inset-0 z-40 bg-black"
            onClick={() => isShowModal(false)}
        >
        </div>
    </>
    )
}

export default ModalDelete;