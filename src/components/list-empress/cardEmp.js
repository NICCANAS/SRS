import { connect } from 'react-redux'
//import CardServsemp from "../list-empress/cardEmp"

function CardServsemp(props) {
    return (

        /* Rescatar servicios de la empresa */
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

                {/* Imagen del servicio */}
                <div class="hidden sm:block sm:basis-56">
                    <img
                        alt="service_img"
                        src={props.imagenUrl}
                        class="aspect-square h-full w-full object-cover"
                    />
                </div>

                <div class="flex flex-1 flex-col justify-between">
                    <div class="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                        {/* Titulo del servicio */}
                        <a>
                            <h3 class="font-bold uppercase text-gray-900">
                                {props.nombre}
                            </h3>
                        </a>

                        {/* Descripcion del servicioo por la xita se me esta poniendo dobles teclas joldan aiua */}

                        <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                            {props.descripcion}
                        </p>
                    </div>
                </div>
            </article>
        </div>

    )

}




const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps, {

})(CardServsemp)