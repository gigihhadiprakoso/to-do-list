import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import * as React from "react";
import axiosConfig from '../services/axiosConfig';
import Todos from "../components/Todos";
import { useNavigate } from 'react-router-dom'
import ModalTodo from '../components/ModalTodo';

const DetailActivity = () => {

    const [showModal, setShowModal] = React.useState(false);
    const [titleModal, setTitleModal] = React.useState('');
    const [activity, setActivity] = React.useState([]);
    const [clickedSaveModal, setClickedSaveModal] = React.useState(0);
    
    const {id} = useParams();

    React.useEffect(() => {
        axiosConfig.get('/activity-groups/'+id)
            .then(response => {return response.data})
            .then(resp => {setActivity(resp)})
    },[id,clickedSaveModal])

    const navigate = useNavigate();

    const backBtn = () => {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 content-center">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
        );      
    }

    const renameBtn = () => {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 ml-4 content-center stroke-gray-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
            </svg>
        )
    }

    const handleBackBtn = () => {
        navigate("/")
    }

    const handleClickAdd = () => {
        setTitleModal('Tambah List Item')
        setShowModal(true)
    }

    return(
        <>
            <Navbar />
            { showModal ? 
                <ModalTodo
                    isShowModal={setShowModal} 
                    title={titleModal}
                    idActivity={id}
                    setClickedSaveModal={setClickedSaveModal}
                /> 
                : 
                null
            }
            <div className='px-14'>
                <div className='container grid grid-cols-4 py-4' data-cy="info-page">
                    <div className='col-start-1 col-span-2 inline-flex'>
                        <button onClick={handleBackBtn}>{backBtn()}</button>
                        <Title script={activity.title}/>
                        <button onClick={() => {}}>{renameBtn()}</button>
                    </div>
                    <div className='col-span-2 relative'>
                        <button 
                            className="
                                rounded-full 
                                float-right 
                                px-5 py-2.5 
                                text-center text-white 
                                inline-flex 
                                items-center 
                                mr-2 
                                leading-tight 
                                transition duration-150 ease-in-out 
                                bg-sky-500" 
                            type="button" 
                            data-cy="todo-add-button"
                            onClick={handleClickAdd}
                        > 
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                            Tambah
                        </button>
                    </div>
                </div>
                <Todos 
                    items={activity.todo_items}
                    setTitleModal={setTitleModal}
                    isShowModal={setShowModal}
                />
            </div>
        </>
    )
}

export default DetailActivity;
