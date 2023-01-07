import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import InfoPage from "../components/InfoPage";
import * as React from "react";
import axiosConfig from '../services/axiosConfig';
import Todos from "../components/Todos";

const DetailActivity = () => {
    const [activity, setActivity] = React.useState([]);
    const {id} = useParams();

    React.useEffect(() => {
        axiosConfig.get('/activity-groups/'+id)
            .then(response => {return response.data})
            .then(resp => {setActivity(resp)})
    },[])

    return(
        <>
            <Navbar />
            <div className='px-14'>
                <InfoPage 
                    titlePage={activity.title} 
                    showAddBtn={true}
                    showBackBtn={true}
                    showRenameBtn={true}
                />
                <Todos 
                    items={activity.todo_items}
                />
            </div>
        </>
    )
}

export default DetailActivity;