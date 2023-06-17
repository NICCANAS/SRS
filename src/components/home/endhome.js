import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

function Endhome() {
    return (
        <section>
            <div
                className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8"
            >
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                    <div
                        className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full"
                    >
                        <img
                            alt="Ultima foto Interesados en nuestra paginas"
                            src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                            className="absolute inset-0 h-full w-full object-cover"
                        />

                    </div>

                    <div className="lg:py-24">
                        <h2 className="text-3xl font-bold sm:text-4xl">¿Interesado en nuestra pagina?</h2>

                        <p className="mt-4 text-gray-600">
                            No solamente está pagina de interesado en pymes y empresas grandes si no que tambien busca al usuario
                            común y corriente a buscar servicios para que esten en el alcanze de la mano del cliente.
                            Unete Ya!
                        </p>

                        <button className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400">
                        <Link to="/Register"> Registrate hoy!</Link>
                        </button>
                    </div>
                </div>
            </div>
        </section>


    )
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, {

})(Endhome)

