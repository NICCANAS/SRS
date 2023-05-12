import { connect } from 'react-redux'

function CardServsemp() {
    return (

        /* Aca jordan solo quiero que se liste los servicios para ver que servicios tiene esa empresa
        Ej: Que la empresa joemama tiene 20 trabajos que se listen solo los 20 servicios que tiene joemama nada mas.
        */
        <div class="w-9/12 items-center m-8">
            <article class="flex bg-white transition hover:shadow-xl">
                <div class="rotate-180 p-2 [writing-mode:_vertical-lr]">

                    {/* Esto de time Quiero que solo se rescate el dia que se creo la publicacion. */}
                    <time
                        datetime="2022-10-10"
                        class="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
                    >
                        <span>2033</span>
                        <span class="w-px flex-1 bg-gray-900/10"></span>
                        <span>Oct 10</span>
                    </time>
                </div>

                <div class="hidden sm:block sm:basis-56">
                    <img
                        alt="peruanito"
                        src="https://airsolutions.com.pe/wp-content/uploads/2021/02/WhatsApp-Image-2021-02-08-at-1.45.46-PM-1-1.jpeg"
                        class="aspect-square h-full w-full object-cover"
                    />
                </div>

                <div class="flex flex-1 flex-col justify-between">
                    <div class="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                        {/* Titulo del servicio */}
                        <a>
                            <h3 class="font-bold uppercase text-gray-900">
                                Limpieza y reparacion acondicionadores
                            </h3>
                        </a>

                        {/* Descripcion del servicioo por la xita se me esta poniendo dobles teclas joldan aiua */}

                        <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                            dolores, possimus pariatur animi temporibus nesciunt praesentium dolore
                            sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta,
                            voluptates neque explicabo tempora nisi culpa eius atque dignissimos.
                            Molestias explicabo corporis voluptatem?
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