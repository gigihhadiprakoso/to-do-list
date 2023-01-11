import * as React from 'react';
import ButtonCust from './ButtonCust';
import Title from './Title'
import { useNavigate } from 'react-router-dom'

const InfoPage = (props) => {
    
    const titlePage = props.titlePage
    const showAddBtn = props.showAddBtn
    const showBackBtn = props.showBackBtn
    const showRenameBtn = props.showRenameBtn

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

    return (
        <div className='container grid grid-cols-4 py-4' data-cy="info-page">
            <div className='col-start-1 col-span-2 inline-flex'>
                { showBackBtn ?  <button onClick={handleBackBtn}>{backBtn()}</button> : <></>}
                <Title script={titlePage} data-cy="activity-title"/>  
                { showRenameBtn ? <button onClick={() => {}}>{renameBtn()}</button> : <></>}
            </div>
            <div className='col-span-2 relative'>
                { showAddBtn ? 
                <ButtonCust 
                    value="Tambah" 
                    icon="plus" 
                    type="info"
                    data-cy="activity-add-button"/>
                    :
                    <></>
                }
            </div>
        </div>
    )
}

export default InfoPage;
