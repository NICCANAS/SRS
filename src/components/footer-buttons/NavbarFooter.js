import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { ReactComponent as SvgLogoUsado } from '../../components/svg/logo_empresa.svg'
import { ReactComponent as SvgMalito } from '../../components/svg/malito.svg'

function NavbarFooter() {

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
                <div id='navbar' className="-ml-4 -mt-2 hidden lg:flex flex-wrap items-center justify-between sm:flex-nowrap md:px-14 px-2">
                    <Link to='/' className="ml-4 mt-2">
                        <SvgLogoUsado />
                    </Link>
                    <div className="ml-4 mt-2 flex-shrink-0 justify-end">
                        <Link to="/" name='Barritapatrahusu' id='Barritapatrahusu' type="button" class=" rotate-180  flex-row text-indigo-700 border border-indigo-700 hover:bg-indigo-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-indigo-500 dark:text-indigo-500 dark:hover:text-white dark:focus:ring-indigo-800 dark:hover:bg-indigo-500">
                            <svg aria-hidden="true" class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>

                        </Link>
                    </div>
                </div>

                <div id='navbar' className="-ml-4 -mt-2 lg:hidden flex flex-wrap items-center justify-between sm:flex-nowrap md:px-14 px-2">
                    <Link to='/' className="ml-4 mt-2">
                        <SvgLogoUsado />
                    </Link>
                    <div className="ml-4 mt-2 flex-shrink-0">
                        <div className="ml-4 mt-2 flex-shrink-0 justify-end">
                            <Link to="/" name='Barritapatrahusu' id='Barritapatrahusu' type="button" class=" rotate-180  flex-row text-indigo-700 border border-indigo-700 hover:bg-indigo-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-indigo-500 dark:text-indigo-500 dark:hover:text-white dark:focus:ring-indigo-800 dark:hover:bg-indigo-500">
                                <svg aria-hidden="true" class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
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

})(NavbarFooter)