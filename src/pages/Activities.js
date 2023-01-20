import * as React from 'react';
import Navbar from '../components/Navbar';
import Title from '../components/Title';
import Card from '../components/Card';
import axiosConfig from '../services/axiosConfig';
import moment from 'moment';
import 'moment/locale/id';
import ModalActivity from '../components/ModalActivity';

const Activities = () => {
    const [activities, setActivities] = React.useState([])
    const [sumClicked, setSumClicked] = React.useState(0);
    const [showModal, setShowModal] = React.useState(false);
    const [IDActivity, setIDActivity] = React.useState('');

    React.useEffect(() => {
        axiosConfig.get('/activity-groups')
            .then(response => {return response.data.data})
            .then(resp => {setActivities(resp)})
    },[sumClicked]);

    const handleClickAdd = () => {
        let clicked = sumClicked + 1;

        const data = {title: 'New Activity'}
        axiosConfig.post('/activity-groups',data)
            .then(response => {return response.data.data})
            .then(resp => {setSumClicked(clicked)})
    }

    return(
        <>
            <Navbar />
            {showModal?
                <ModalActivity
                    isShowModal = {setShowModal}
                    idActivity = {IDActivity}
                    setSumClicked = {setSumClicked}
                />
                :
                <></>
            }
            <div className='px-14'>
                <div className='container grid grid-cols-4 py-4' data-cy="info-page">
                    <div className='col-start-1 col-span-2 inline-flex'>
                        <Title script='Activity'/>
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
                            data-cy="activity-add-button"
                            onClick={handleClickAdd}
                        > 
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                            Tambah
                        </button>
                    </div>
                </div>
                <div className='grid grid-cols-4 gap-8'>
                {activities.map(item=> {
                    const dateIndo = moment(item.created_at).format('LL');

                    return(
                        <Card 
                            title={item.title}
                            date={dateIndo}
                            id={item.id}
                            url={`/detail/${item.id}`}
                            handleModal = {setShowModal}
                            setIDActivity={setIDActivity}
                        />
                    )
                })}
                <div data-cy="modal-delete"></div>
                </div>
            </div>
        </>
    )
}

export default Activities