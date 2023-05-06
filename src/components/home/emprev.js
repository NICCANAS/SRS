import { connect } from 'react-redux'

function Emprev() {
    return (
        <div>
            <div class="min-w-screen min-h-screen  flex items-center justify-center py-5">
                <div class="w-full border-t border-b  px-5 py-16 md:py-24 ">
                    <div class="w-full max-w-6xl mx-auto">
                        <div class="text-center max-w-xl mx-auto">
                            <h1 class="text-6xl md:text-7xl font-bold mb-5 text-gray-600">Lo que opinan las pymes.</h1>
                            <h3 class="text-xl mb-5 font-light">Registradas en SRS.</h3>
                            <div class="text-center mb-10">
                                <span class="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
                                <span class="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                                <span class="inline-block w-40 h-1 rounded-full bg-indigo-500"></span>
                                <span class="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                                <span class="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
                            </div>
                        </div>
                        <div class="-mx-3 md:flex items-start">
                            <div class="px-3 md:w-1/3">
                                <div class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5  font-light mb-6">
                                    <div class="w-full flex mb-4 items-center">
                                        <div class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                            <img src="https://i.pravatar.cc/100?img=1" alt=""/>
                                        </div>
                                        <div class="flex-grow pl-3">
                                            <h6 class="font-bold text-sm uppercase text-gray-600">Kenzie Edgar.</h6>
                                        </div>
                                    </div>
                                    <div class="w-full">
                                        <p class="text-sm leading-tight"><span class="text-lg text-gray-400 mr-1">"</span>SRS Salvo a mi pequeña pyme que recien voy partiendo, consegui nueva clientela y una nueva forma de trabajar! muchas gracias SRS<span class="text-lg leading-none italic  text-gray-400 ml-1">"</span></p>
                                    </div>
                                </div>
                                <div class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                                    <div class="w-full flex mb-4 items-center">
                                        <div class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                            <img src="https://i.pravatar.cc/100?img=2" alt=""/>
                                        </div>
                                        <div class="flex-grow pl-3">
                                            <h6 class="font-bold text-sm uppercase text-gray-600">Stevie Tifft.</h6>
                                        </div>
                                    </div>
                                    <div class="w-full">
                                        <p class="text-sm leading-tight"><span class="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>ay cabron<span class="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                                    </div>
                                </div>
                            </div>
                            <div class="px-3 md:w-1/3">
                                <div class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                                    <div class="w-full flex mb-4 items-center">
                                        <div class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                            <img src="https://i.pravatar.cc/100?img=3" alt=""/>
                                        </div>
                                        <div class="flex-grow pl-3">
                                            <h6 class="font-bold text-sm uppercase text-gray-600">Tommie Ewart.</h6>
                                        </div>
                                    </div>
                                    <div class="w-full">
                                        <p class="text-sm leading-tight"><span class="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, obcaecati ullam excepturi dicta error deleniti sequi.<span class="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                                    </div>
                                </div>
                                <div class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                                    <div class="w-full flex mb-4 items-center">
                                        <div class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                            <img src="https://i.pravatar.cc/100?img=4" alt=""/>
                                        </div>
                                        <div class="flex-grow pl-3">
                                            <h6 class="font-bold text-sm uppercase text-gray-600">Charlie Howse.</h6>
                                        </div>
                                    </div>
                                    <div class="w-full">
                                        <p class="text-sm leading-tight"><span class="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto inventore voluptatum nostrum atque, corrupti, vitae esse id accusamus dignissimos neque reprehenderit natus, hic sequi itaque dicta nisi voluptatem! Culpa, iusto.<span class="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                                    </div>
                                </div>
                            </div>
                            <div class="px-3 md:w-1/3">
                                <div class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                                    <div class="w-full flex mb-4 items-center">
                                        <div class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                            <img src="https://i.pravatar.cc/100?img=5" alt=""/>
                                        </div>
                                        <div class="flex-grow pl-3">
                                            <h6 class="font-bold text-sm uppercase text-gray-600">Nevada Herbertson.</h6>
                                        </div>
                                    </div>
                                    <div class="w-full">
                                        <p class="text-sm leading-tight"><span class="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, voluptatem porro obcaecati dicta, quibusdam sunt ipsum, laboriosam nostrum facere exercitationem pariatur deserunt tempora molestiae assumenda nesciunt alias eius? Illo, autem!<span class="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                                    </div>
                                </div>
                                <div class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                                    <div class="w-full flex mb-4 items-center">
                                        <div class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                            <img src="https://i.pravatar.cc/100?img=6" alt=""/>
                                        </div>
                                        <div class="flex-grow pl-3">
                                            <h6 class="font-bold text-sm uppercase text-gray-600">Kris Stanton.</h6>
                                        </div>
                                    </div>
                                    <div class="w-full">
                                        <p class="text-sm leading-tight"><span class="text-lg text-gray-400 mr-1">"</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem iusto, explicabo, cupiditate quas totam!<span class="text-lg text-gray-400 ml-1">"</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, {

})(Emprev)

