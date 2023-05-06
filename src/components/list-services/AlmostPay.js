import { connect } from 'react-redux'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { esES } from '@mui/x-date-pickers/locales';

/* Se supone que esto es para limitar los dias ya pasados pero no se como hacerlo correr ya que solamente esto deja que la pagina tire al layout en blanco.*/

/*
  const datepickerDisableFuture = document.getElementById('datepicker-disable-future');
  new Datepicker(datepickerDisableFuture, {
    disableFuture: true
  });
*/


function AlmostPay({ children }) {

    const [fechaseleccionada, CambiarFechSelect] = useState(new Date()) 

    async function createWebpayButton() {
        const res = await axios.get('http://127.0.0.1:8000/webpayAPI/');
        setData(res.data);
        console.log(res.data);
        console.log("restoken: " + res.data.token);
        console.log("resamoun: " + res.data.amount);
    }

    const [data, setData] = useState(null);

    console.log(fechaseleccionada)

    return (
        <section>
            <div class="relative mx-auto max-w-screen-xl px-4 py-8">
                <div class="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
                    <div class="grid grid-cols-2 gap-4 md:grid-cols-1">
                        <img
                            alt="Les Paul"
                            src="https://airsolutions.com.pe/wp-content/uploads/2021/02/WhatsApp-Image-2021-02-08-at-1.45.46-PM-1-1.jpeg"
                            class="aspect-square w-full rounded-xl object-cover"
                        />


                    </div>

                    <div class="sticky top-0">

                        <div class="mt-8 flex justify-between">
                            <div class="max-w-[35ch] space-y-2">
                                <h1 class="text-xl font-bold sm:text-2xl">
                                    Limpieza y reparacion acondicionadores
                                </h1>

                                <p class="text-sm">Empresa JoeMama Se supone que aca deberia dirigir al perfil de la empresa</p>

                                <div class="-ms-0.5 flex">
                                    <svg
                                        class="h-5 w-5 text-yellow-400"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                        />
                                    </svg>

                                    <svg
                                        class="h-5 w-5 text-yellow-400"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                        />
                                    </svg>

                                    <svg
                                        class="h-5 w-5 text-yellow-400"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                        />
                                    </svg>

                                    <svg
                                        class="h-5 w-5 text-yellow-400"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                        />
                                    </svg>

                                    <svg
                                        class="h-5 w-5 text-gray-200"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                        />
                                    </svg>
                                </div>
                            </div>

                            <p class="text-lg font-bold">$120.000 CLP</p>
                        </div>

                        <div class="mt-4">
                            <div class="prose max-w-none">
                                <p>
                                    Me robe este peruano de otra pagina en la cual realmente realizaban trabajos
                                    de limpieza asi que me robe su imagen equisde
                                </p>
                            </div>
                        </div>

                        <form class="mt-8">

                            <fieldset>
                                <legend class="mb-1 text-sm font-medium">Elige tu fecha</legend>
                                <LocalizationProvider dateAdapter={AdapterDayjs}
                                    localeText={esES.components.MuiLocalizationProvider.defaultProps.localeText}
                                    value={fechaseleccionada}
                                >
                                    {children}
                                    <MobileDatePicker onChange={CambiarFechSelect}
                                    inputFormat="dd-mm-yyyy"
                                    />
                                </LocalizationProvider>
                            </fieldset>

                        </form>

                        <div class="mt-8 flex gap-4">
                            <button onClick={createWebpayButton} type="" className='bg-green-600 px-5 py-3 text-xs font-medium text-white hover:bg-green-500"'>Ejecutar Webpay</button>

                            <form method="post" action="{{response.url}}">
                                <input type="hidden" name="token_ws" value="{{response.token}}" />
                                <input type="submit" value="Ir a pagar" />
                            </form>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}




const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps, {

})(AlmostPay)