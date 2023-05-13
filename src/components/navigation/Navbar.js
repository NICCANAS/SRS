import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { ReactComponent as SvgLogoUsado } from '../../components/svg/logo_empresa.svg'
import { ReactComponent as SvgMalito } from '../../components/svg/malito.svg'

function Navbar() {

    window.onscroll = function () { scrollFunction() }

    function scrollFunction() {
        if (document.getElementById('navbar')) {
            if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                document.getElementById('navbar').classList.add('shadow-navbar');
                document.getElementById('navbar').classList.add('bg-white');
            } else {
                document.getElementById('navbar').classList.remove('shadow-navbar');
                document.getElementById('navbar').classList.remove('bg-white');
            }
        }
    }

    return (
        <nav data-scroll data-scroll-id="hey" id='navbar' className='w-full py-6 top-0 transition duration-300 ease-in-out z-40 fixed'>

            <div className="px-4 sm:px-6">
                <div className="-ml-4 -mt-2 hidden lg:flex flex-wrap items-center justify-between sm:flex-nowrap md:px-14 px-2">
                    <Link to='/' className="ml-4 mt-2">
                        <SvgLogoUsado />
                    </Link>
                    <div className="ml-4 mt-2 flex-shrink-0 justify-end">
                        <Link to="/Login" className="inline-flex ml-12 items-center rounded-md border bg-orange-button px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-gray-900 transition duration-300 ease-in-out focus:outline-none focus:ring-2  focus:ring-offset-2 bg-sky-600">
                            Iniciar sesión
                        </Link>
                    </div>
                </div>

                <div id='navbar' className="-ml-4 -mt-2 lg:hidden flex flex-wrap items-center justify-between sm:flex-nowrap md:px-14 px-2">
                    <Link to='/' className="ml-4 mt-2">
                        <SvgMalito />
                    </Link>
                    <div className="ml-4 mt-2 flex-shrink-0">
                        <div className="ml-4 mt-2 flex-shrink-0 justify-end">
                            <Link to="/Login" id='button' className="inline-flex ml-1 p-1 items-center rounded-md border bg-orange-button text-base font-medium text-white shadow-sm hover:bg-gray-900 transition duration-300 ease-in-out focus:outline-none focus:ring-2  focus:ring-offset-2 bg-sky-600">
                                Iniciar sesión
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </nav>
    )
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, {

})(Navbar)