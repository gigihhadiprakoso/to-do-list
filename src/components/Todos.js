import * as React from 'react';
import TodoItem from './TodoItem';

const Todos = (props) =>{
    const {
        items,
        setTitleModal,
        isShowModal,
        isShowModalDelete,
        setRowData
    } = props

    return(
        <>
            {items?
                items.map((item) => {
                    return(
                        <TodoItem 
                            id={item.id}
                            isActive={item.is_active}
                            priority={item.priority}
                            title={item.title}
                            key={item.id}
                            isShowModal={isShowModal}
                            isShowModalDelete={isShowModalDelete}
                            setTitleModal={setTitleModal}
                            setRowData={setRowData}
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
