

const DotPriority = (props) => {
    const {
        level
    } = props

    const getColor = (level) => {
        switch (level) {
            case 'very-high':
                return 'bg-red-500';
                break;
            case 'high':
                return 'bg-orange-500';
                break;
            case 'medium':
                return 'bg-emerald-600';
                break;
            case 'low':
                return 'bg-cyan-700';
                break;
            case 'very-low':
                return 'bg-violet-800';
                break;
            default:
                return '';
                break;
        }
    }


    return(
        <div className={`rounded-full w-4 h-4 my-auto ${getColor(level)}`}></div>
    )
}

export default DotPriority;