import * as React from "react";
import axiosConfig from '../services/axiosConfig'

const ModalTodo = (props) => {
    const {
        title,
        isShowModal,
        idActivity,
        setClickedSaveModal,
        rows
    } = props

    let isEditMode = (title.indexOf("Edit") >= 0);

    const [bodyReq, setBodyReq] = React.useState({
        priority: isEditMode ? rows.priority : 'very-high',
        title:isEditMode ? rows.title : '', 
        activity_group_id:idActivity}
    );

    const handleSave = async () => {
        if(isEditMode){
            await axiosConfig.patch('todo-items/'+rows.id, bodyReq)
                .then(response => { return response.data })
                .then(resp => {})
        } else {
            await axiosConfig.post('todo-items',bodyReq)
                .then(response => { return response.data })
                .then(resp => {})
        }

        isShowModal(false)
        setClickedSaveModal(Math.random())
    }

    return (
        <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none w-3/6 my-6 mx-auto max-w-3xl">
                {/* <div className="relative "> */}
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                            <label className="text-lg font-semibold">{title}</label>
                            <button onClick={() => {isShowModal(false)}}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 stroke-gray-400">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/*body*/}
                        <div className="p-6 flex-auto">
                            <div data-cy="modal-add-name-input">
                                <p>Nama List Item</p>
                                <input 
                                    className="
                                        px-2 py-3 w-full 
                                        border-solid focus:outline-2 focus:ring-sky-500
                                        rounded-md" 
                                    placeholder="Tambahkan nama Activity"
                                    onChange={(e) => {
                                        setBodyReq({
                                            ...bodyReq,
                                            title: e.target.value 
                                        })
                                    }}
                                    value={bodyReq.title}
                                />
                            </div>
                            <div data-cy="modal-add-priority-title">
                                <p>Priority</p>
                                <select
                                    onChange={(e) => {
                                        setBodyReq({
                                            ...bodyReq,
                                            priority: e.target.value 
                                        })
                                    }} data-cy="modal-add-priority-dropdown"
                                    defaultValue={bodyReq.priority}
                                >
                                    <option value="very-high">
                                        Very High
                                    </option>
                                    <option value="high">
                                        High
                                    </option>
                                    <option value="normal">
                                        Medium
                                    </option>
                                    <option value="low">
                                        Low
                                    </option>
                                    <option value="very-low">
                                        Very Low
                                    </option>
                                </select>
                            </div>
                        </div>
                        
                        {/*footer*/}
                        <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                            <button 
                                type="button"
                                className="
                                    bg-sky-500 
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
                                data-cy="modal-add-save-button"
                                onClick={handleSave}
                                disabled={!(bodyReq.hasOwnProperty('title') && bodyReq.title ? true : false)}
                            >
                                Simpan
                            </button>
                        </div>
                    </div>
                {/* </div> */}
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black" onClick={() => {isShowModal(false)}}></div>
        </>
    )
}

export default ModalTodo;
