import * as React from 'react';
import Navbar from '../components/Navbar';
import InfoPage from '../components/InfoPage';
import Card from '../components/Card';
import axiosConfig from '../services/axiosConfig';
import moment from 'moment';
import 'moment/locale/id';

const Activities = () => {
    const [activities, setActivities] = React.useState([])

    React.useEffect(() => {
        axiosConfig.get('/activity-groups')
            .then(response => {return response.data.data})
            .then(resp => {setActivities(resp)})
    },[]);

    return(
        <>
            <Navbar />
            <div className='px-14'>
                <InfoPage titlePage='Activity' showAddBtn={true}/>
                <div className='grid grid-cols-4 gap-8'>
                {activities.map(item=> {
                    const dateIndo = moment(item.created_at).format('LL');

                    return(
                        <Card 
                            title={item.title}
                            date={dateIndo}
                            id={item.id}
                            url={`/detail/${item.id}`}
                        />
                    )
                })}
                </div>
            </div>
        </>
    )
}

export default Activities