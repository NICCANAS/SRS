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
              <div class="mb-3">
                <div class="relative mb-4 flex w-full align-start">
                  <input
                    type="search"
                    class="relative mx-0  block  min-w-0 flex-initial w-2/5 rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                    placeholder="Busca tu servicio o necesidad Aqui!"
                    aria-label="Search"
                    aria-describedby="button-addon3" />
                  <button
                    class="relative z-[2] rounded-r border-2 border-primary px-6 py-2 text-xs font-medium uppercase text-primary transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
                    type="button"
                    id="button-addon3"
                    data-te-ripple-init>
                    Buscar
                  </button>
                </div>
              </div>
              <p className="mt-16 text-2xl max-w-3xl leading-8 text-black "> Comienza tu busqueda de cualquier tipo de servicios!</p>
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