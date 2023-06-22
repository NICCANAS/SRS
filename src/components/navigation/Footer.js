import { connect } from 'react-redux'
import { ReactComponent as SvgGuasa } from './../svg/guasa.svg'
import { ReactComponent as SvgGithub } from './../svg/github.svg'
import { ReactComponent as SvgFace } from './../svg/feibu.svg'
import { ReactComponent as SvgInsta } from './../svg/insta.svg'
import { ReactComponent as SvgTwit } from './../svg/pajalito.svg'
import { Link } from 'react-router-dom'
const navigation = {
  social: [
    {
      name: 'Facebook',
      href: 'https://es-la.facebook.com/',
      icon: (props) => (
        <SvgFace />
      ),
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/',
      icon: (props) => (
        <SvgInsta />
      ),
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/login',
      icon: (props) => (
        <SvgTwit />
      ),
    },
    {
      name: 'GitHub',
      href: 'https://github.com/',
      icon: (props) => (
        <SvgGithub />
      ),
    },
    {
      name: 'guasa',
      href: 'https://web.whatsapp.com/',
      icon: (props) => (
        <SvgGuasa />
      ),
    },
  ],
}

function Footer() {
  return (
    <footer className="bg-gray-50" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-full py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-base font-medium text-gray-900"></h3>
                <ul role="list" className="mt-4 space-y-4">
                  <li hrefclassName="text-base text-gray-500 hover:text-gray-900" >
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-base font-medium text-gray-900">Contacto</h3>
                <ul role="list" className="mt-4 space-y-4">
                  <li hrefclassName="text-base text-gray-500 hover:text-gray-900" >
                    <Link to="/contacto" className="text-base text-gray-500 hover:text-gray-900">
                      Comunicate con nosotros
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-base font-medium text-gray-900">Empresa</h3>
                <ul role="list" className="mt-4 space-y-4">
                  <li hrefclassName="text-base text-gray-500 hover:text-gray-900" >
                    <Link to="/Nosotros" className="text-base text-gray-500 hover:text-gray-900">
                      Nosotros
                    </Link>
                  </li>
                  <li hrefclassName="text-base text-gray-500 hover:text-gray-900" >
                    <Link to="/Trabajo" className="text-base text-gray-500 hover:text-gray-900">
                      Trabaja con nosotros
                    </Link>
                  </li>
                  <li hrefclassName="text-base text-gray-500 hover:text-gray-900" >
                    <Link to="/Marketing" className="text-base text-gray-500 hover:text-gray-900">
                      Marketing
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-base font-medium text-gray-900">Servicios</h3>
                <ul role="list" className="mt-4 space-y-4">
                  <li hrefclassName="text-base text-gray-500 hover:text-gray-900" >
                    <Link to="/Privacidad" className="text-base text-gray-500 hover:text-gray-900">
                      Privacidad
                    </Link>
                  </li>
                  <li hrefclassName="text-base text-gray-500 hover:text-gray-900" >
                    <Link to="/Reclamo" className="text-base text-gray-500 hover:text-gray-900">
                      Reclamo
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-400 xl:text-center">&copy; 2023 SRS De InnovaTek.SA, Todos los derechos reservados papito.</p>
        </div>
      </div>
    </footer>
  )
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, {

})(Footer)
