import { connect } from 'react-redux'

function CardServs() {
    return (
        <div class="w-9/12 items-center m-8">
            <article class="flex bg-white transition hover:shadow-xl">
                <div class="rotate-180 p-2 [writing-mode:_vertical-lr]">
                    <time
                        datetime="2022-10-10"
                        class="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
                    >
                        <span>2022</span>
                        <span class="w-px flex-1 bg-gray-900/10"></span>
                        <span>Oct 10</span>
                    </time>
                </div>

                <div class="hidden sm:block sm:basis-56">
                    <img
                        alt="Guitar"
                        src="https://airsolutions.com.pe/wp-content/uploads/2021/02/WhatsApp-Image-2021-02-08-at-1.45.46-PM-1-1.jpeg"
                        class="aspect-square h-full w-full object-cover"
                    />
                </div>

                <div class="flex flex-1 flex-col justify-between">
                    <div class="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                        <a href="#">
                            <h3 class="font-bold uppercase text-gray-900">
                                Limpieza y reparacion acondicionadores
                            </h3>
                        </a>

                        <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                            dolores, possimus pariatur animi temporibus nesciunt praesentium dolore
                            sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta,
                            voluptates neque explicabo tempora nisi culpa eius atque dignissimos.
                            Molestias explicabo corporis voluptatem?
                        </p>
                    </div>

                    <div class="sm:flex sm:items-end sm:justify-end">
                        <a
                            href="/CasiMoney"
                            class="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
                        >
                            Read Blog
                        </a>
                    </div>
                </div>
            </article>
        </div>

    )

}




const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps, {

})(CardServs)