import * as React from 'react';
import TodoItem from './TodoItem';
import ModalEdit from './ModalEdit';

const Todos = (props) =>{
    const items = props.items

    const [showModal, setShowModal] = React.useState(false);
    // const [dataModal, setDataModal] = React.useState([]);
    // const [buttonModal, setButtonModal] = React.useState([])

    const fields = [
        {id:"name", label:"Nama List Item",type:"text",},
        {id:"priority", label:"Priority",type:"select",}
    ]

    const buttons = ['save']

    return(
        <>
            { showModal ? 
                <ModalEdit
                    closeModal={() => {setShowModal(false)}} 
                    title='Edit Item'
                    fields={fields}
                    // rows={dataModal}
                    buttons={buttons}
                /> 
                : 
                null
            }
            {items?
                items.map((item) => {
                    return(
                        <TodoItem 
                            id={item.id}
                            isActive={item.is_active}
                            priority={item.priority}
                            title={item.title}
                            key={item.id}
                            onEdit={setShowModal}
                        />
                    )
                })
            :
                null
            }
        </>
    );
}

export default Todos
