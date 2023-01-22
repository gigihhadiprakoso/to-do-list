

const DotPriority = (props) => {
    const {
        level
    } = props

    const getColor = (level) => {
        switch (level) {
            case 'very-high':
                return 'bg-red-500';
            case 'high':
                return 'bg-orange-500';
            case 'normal':
                return 'bg-emerald-600';
            case 'low':
                return 'bg-cyan-700';
            case 'very-low':
                return 'bg-violet-800';
            default:
                return '';
        }
    }


    return(
        <div className={`rounded-full w-4 h-4 my-auto ${getColor(level)}`} data-cy="dot-priority"></div>
    )
}

export default DotPriority;
