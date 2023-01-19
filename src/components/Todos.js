import * as React from 'react';
import TodoItem from './TodoItem';

const Todos = (props) =>{
    const {
        items,
        setTitleModal,
        isShowModal,
        setIdTodo
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
                            setTitleModal={setTitleModal}
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
