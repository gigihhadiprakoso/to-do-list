
const ModalEdit = (props) => {
    const {
        title,
        closeModal,
        buttons,
        fields, rows
    } = props

    const showButton = (type) => {
        switch (type) {
            case 'save':
                return (
                    <button
                        className="bg-sky-500 rounded-full px-5 py-2.5 text-center text-white inline-flex font-bold"
                    >
                        Simpan
                    </button>
                )
                break;
            case 'close':
                return(
                    <button 
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={closeModal}
                    >
                        Close
                    </button>
                )
                break;
            default:
                break;
        }
    }

    return (
        <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                            <label className="text-lg font-semibold">{title}</label>
                            <button onClick={closeModal}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 stroke-gray-400">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/*body*/}
                        <div className="p-6 flex-auto">
                            { fields.map((field) => {
                                const setHTMLInput = (type) => {
                                    switch (type) {
                                        case 'select':
                                            return(
                                                <select>
                                                    <option>Very High</option>
                                                </select>
                                            )
                                            break;
                                        case 'text':
                                            return (
                                                <input type="text" className="w-full" />
                                            )
                                            break;
                                        default:
                                            break;
                                    }
                                }
                                return(
                                    <div>
                                        <p>
                                            {field.label}
                                        </p>
                                        {setHTMLInput(field.type)}
                                    </div>
                                )
                            })}
                            
                        </div>
                        
                        {/*footer*/}
                        <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                            {buttons.length ?
                                    buttons.map((btn) => (
                                        showButton(btn)
                                    ))
                                :
                                    <></>
                            }
                            
                            {/* <button className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                // onClick={() => showModal(false)}
                            >
                                Save Changes
                            </button> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    )
}

export default ModalEdit;