import { connect } from 'react-redux'

function Barbusq() {
    return (
        <div class="flex justify-between p-4 pb-90 bg-white mt-3 rounded-xl shadow-lg ">
            <div class="flex items-center space-x-6 pr-8">
                <div class="flex gap-8">
                    <div class="relative">
                        <details class="group [&_summary::-webkit-details-marker]:hidden">
                            <summary
                                class="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600"
                            >
                                <span class="text-sm font-medium"> Filtro fecha </span>

                                <span class="transition group-open:-rotate-180">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        class="h-4 w-4"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                        />
                                    </svg>
                                </span>
                            </summary>

                            <div
                                class="z-50 group-open:absolute group-open:start-0 group-open:top-auto group-open:mt-2"
                            >
                                <div class="w-96 rounded border border-gray-200 bg-white">
                                    <header class="flex items-center justify-between p-4">
                                        <span class="text-sm text-gray-700"> Filtrar por</span>
                                    </header>

                                    <ul class="space-y-1 border-t border-gray-200 p-4">
                                        <li>
                                            <label for="FilterInStock" class="inline-flex items-center gap-2">
                                                <input
                                                    type="radio"
                                                    id="FilterInStock"
                                                    class="h-5 w-5 rounded border-gray-300"
                                                />

                                                <span class="text-sm font-medium text-gray-700">
                                                    Fecha mas Nueva
                                                </span>
                                            </label>
                                        </li>

                                        <li>
                                            <label
                                                for="FilterPreOrder"
                                                class="inline-flex items-center gap-2"
                                            >
                                                <input
                                                    type="radio"
                                                    id="FilterPreOrder"
                                                    class="h-5 w-5 rounded border-gray-300"
                                                />

                                                <span class="text-sm font-medium text-gray-700">
                                                    Fecha mas antigua
                                                </span>
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </details>
                    </div>

                    <div class="relative">

                    </div>
                </div>

            </div>
            <div class="flex justify-between w-1/5">
                <div class="flex items-center border-2 p-2 rounded-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input type="text" placeholder="Search" class="ml-2 outline-none w-full" />
                </div>
            </div>
        </div>
    )

}


const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps, {

})(Barbusq)
