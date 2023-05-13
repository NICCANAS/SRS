import { Typewriter } from 'react-simple-typewriter'
function Header() {
  return (
    <main>
      <div className="relative px-6 lg:px-8">
        <div className="mx-auto max-w-full xl:mx-12 xl:pt-40 xl:pb-64 lg:pt-40 lg:pb-48 pt-24 pb-12  ">
          <div>
            <div>
              <h1 className="text-4xl font-semibold tracking-tight pb-16  sm:text-7xl " >
                Busquedas de <span> </span>
                <Typewriter 
                  words={['Servicios', 'Empresas', 'Pymes!']}
                  loop={0}
                  cursor
                  cursorStyle='_'
                  typeSpeed={120}
                  deleteSpeed={50}
                  delaySpeed={1000}
                // onLoopDone={handleDone}
                // onType={handleType}
                />
              </h1>
              <p className="mb-40 text-2xl max-w-3xl leading-8 text-black "> Comienza tu busqueda de cualquier tipo de servicios!</p>
            </div>
            <div className="absolute inset-x-0 top-[calc(100%-20rem)] -z-10 transform-gpu overflow-hidden bg-white blur-sm lg:top-[calc(100%-45rem)] sm:top-[calc(100%-30rem)]">
              <img src="https://www.itvibes.com/site/wp-content/uploads/2020/03/Local-Maps-1024x530.jpg" className='w-full h-full object-cover'/>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Header