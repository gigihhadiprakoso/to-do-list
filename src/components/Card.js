import {
    Link
} from 'react-router-dom'

const Card = (props) => {
    const title = props.title
    const date = props.date
    const id = props.id
    const url = props.url

    return(
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg p-2" key={id} data-cy="card-list-activity">
            { url ?
                <Link to={url}>
                    <div className="px-6 py-4 pb-14">
                        <div className="font-bold text-xl mb-2">{title}</div>
                    </div>
                </Link>
                :
                <div className="px-6 py-4 pb-14">
                    <div className="font-bold text-xl mb-2">{title}</div>
                </div>
            }
            <div className="px-6 pt-4 pb-2 grid grid-cols-4">
                <div className="col-span-2">
                    <p className="text-gray-400">{date}</p>
                </div>
                <div className="col-span-2 float-right">
                    <div className="float-right">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" className="stroke-gray-400 w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                        </svg>
                    </div>
                </div>
                {/* <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span> */}
            </div>
        </div>
    )
}

export default Card;