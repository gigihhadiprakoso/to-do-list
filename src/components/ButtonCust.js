

const ButtonCust = (props) => {
    const icon = props.icon
    const value = props.value
    const type = props.type

    const getIcon = (param) => {
        switch (param) {
            case 'plus':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                );
            default:
                break;
        }
    }

    const getBgColor = (param) => {
        switch (param) {
            case 'info':
                return 'bg-sky-500';
        
            default:
                break;
        }
    }

    const colorText = 'text-white';

    const style = 'rounded-full float-right px-5 py-2.5 text-center inline-flex items-center mr-2 leading-tight transition duration-150 ease-in-out '+colorText+' '+getBgColor(type);

    return (
        <button className={style} type="button" data-modal-target="default" data-modal-toggle="defaultModal" data-cy="activity-add-button"> 
            {getIcon(icon)} 
            {value}
        </button>
    )
}

export default ButtonCust;
