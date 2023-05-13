import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

function CardServs(props) {
    return (
        <div class="w-9/12 items-center m-8">
            <article class="flex bg-white transition hover:shadow-xl">
                {/* <div class="rotate-180 p-2 [writing-mode:_vertical-lr]">
                    <time
                        datetime="2022-10-10"
                        class="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
                    >
                        <span>2033</span>
                        <span class="w-px flex-1 bg-gray-900/10"></span>
                        <span>Oct 10</span>
                    </time>
                </div> */}

                <div class="hidden sm:block sm:basis-56">
                    <img
                        alt="Guitar"
                        src={props.imagenUrl}
                        class="aspect-square h-full w-full object-cover"
                    />
                </div>

                <div class="flex flex-1 flex-col justify-between">
                    <div class="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                        <a href="#">
                            <h3 class="font-bold uppercase text-gray-900">
                                {props.nombre}
                            </h3>
                        </a>

                        <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                            {props.descripcion}
                        </p>
                    </div>

                    <div class="sm:flex sm:items-end sm:justify-end">
                        <Link
                            to={`/CasiMoney/${props.id}`}
                            class="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
                        >
                            Ver
                        </Link>
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