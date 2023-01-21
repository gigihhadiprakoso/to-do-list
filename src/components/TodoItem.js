import axiosConfig from '../services/axiosConfig'
import * as React from 'react'
import DotPriority from './DotPriority';

const TodoItem = (props) => {
    const {
        id,
        title,
        priority,
        isActive,
        setTitleModal,
    } = props

    const [classTitle, setClassTitle] = React.useState(isActive ? "" : "line-through text-gray-400" ); 

    const deleteBtn = () => {
        return(
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" className="stroke-gray-400 w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
            </svg>
        );
    }

    const renameBtn = () => {
        return(
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 content-center stroke-gray-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
            </svg>
        )
    }

    const handleChangeCheckbox = async (e) => {
        await axiosConfig.patch('/todo-items/'+id, {is_active:!e.target.checked})
            .then(response => {return response.data})
            .then(resp => {
                setClassTitle( resp.is_active ? "" : "line-through text-gray-400")
            })
    }

    return(
        <div className="rounded-lg shadow-xl px-10 py-8 overflow-hidden bg-white mb-4 text-xl font-bold" key={id}>
            <div className="grid grid-cols-8">
                <div className="col-span-6 inline-flex gap-x-6">
                    <div className="content-center form-check">
                        <input type="checkbox" 
                            className="
                                form-check-input
                                appearance-none 
                                border border-gray-300 
                                h-6 w-6 
                                rounded-none bg-white
                                checked:border-sky-500 checked:bg-sky-500
                                mt-1 align-top 
                                focus:outline-none transition duration-200
                                bg-no-repeat bg-center bg-contain 
                                float-left mr-2
                                cursor-pointer "
                            defaultChecked={!isActive}
                            onChange={handleChangeCheckbox}
                            data-cy="todo-item-checkbox"/>
                    </div>
                    <DotPriority 
                        level={priority}
                    />
                    <div data-cy="todo-title">
                        <label className={classTitle} data-cy="todo-title">{title}</label>
                    </div>
                    <button 
                        onClick={() => { 
                            // isShowModal(true)
                            setTitleModal('Edit Item')
                        }}
                    >
                        {renameBtn()}
                    </button>
                </div>
                <div className="col-span-2">
                    <div className="float-right">
                        <button data-cy="todo-item-delete-button">{deleteBtn()}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TodoItem;