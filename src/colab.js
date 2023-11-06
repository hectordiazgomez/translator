import React from "react";

const Colab = ({ toggle, newDescription, createPublication, newMainText, setNewDescription, setMainText }) => {
    return (
        <div className=''>
            <div className="fixed z-10 inset-0 overflow-y-auto">
                <div className="fixed inset-0 bg-gray-500 opacity-50"></div>
                <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <span
                        className="hidden sm:inline-block sm:align-middle sm:h-screen"
                        aria-hidden="true"
                    >
                        &#8203;
                    </span>
                    <div
                        className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden transform transition-all sm:my-8 sm:align-middle sm:w-1/2"
                        role="dialog"
                        aria-labelledby="modal-headline"
                    >
                        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div className="flex justify-center">
                            <p className="text-lg text-blue-600 font-semibold py-6">Contribuye</p>
                        </div>
                                <div>
                                <label className="text-gray-800 my-1 font-semibold">Español</label>
                                <input 
                                    onChange={(event) => { setNewDescription(event.target.value) }} 
                                className="border w-3/4 border-gray-600 ml-6 p-2 rounded outline-none" />
                                </div>
                            <div className="mt-6">
                                <label className="text-gray-800 pt-4 font-semibold">Awajun</label>
                                <input 
                                    value={newMainText}
                                    onChange={event => setMainText(event.target.value)}
                                className="border border-gray-600 w-3/4 ml-6 p-2 rounded outline-none" />
                            </div>
                            <div className="flex justify-center py-6">
                                <button onClick={createPublication} className="px-5 py-2 rounded bg-green-500 text-white font-semibold" >Enviar</button>
                            </div>
                        </div> 
                        <div className="bg-gray-50 px-4 mt-6 sm:mt-0 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                            <button
                                type="button"
                                className="rounded-md border border-red-600 px-5 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 outline-none text-red-500"
                                onClick={toggle}
                            >
                                Cerrar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Colab;

