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


function AlmostPay(props, { children }) {
    //ID usuario activo
    const userID = localStorage.getItem('loggedId');
    const userType = localStorage.getItem('loggedType');

    const [fechaseleccionada, CambiarFechSelect] = useState(new Date());
    const [webpayData, setWebpay] = useState("");
    const [botonActivo, setBotonActivo] = useState(false);

    const [checkboxSelected, setcheckboxSelected] = useState([]);

    const handleChangeCheckbox = e => {
        console.log(e.target.value);
        var auxiliar = null;
        if (checkboxSelected.includes(e.target.value)) {
            auxiliar = checkboxSelected.filter(elemento => elemento !== e.target.value);
        } else {
            auxiliar = checkboxSelected.concat(e.target.value);
        }
        setcheckboxSelected(auxiliar);

    }

    //API de oracle
    async function returnOracle(string) {
        const params = {
            query: string,//las query no deben terminar en ";"
        }
        const res = await axios.get('http://127.0.0.1:8000/oracleAPI/', { params });
        return res.data.query;
    }



    async function createWebpayButton() {
        let maxID = await returnOracle("SELECT NVL(MAX(ID_ORD), 0) FROM ORDEN_SERV");
        let orderID = parseInt(maxID)+1;
        /*let sqlresponse =*/ await returnOracle("INSERT INTO ORDEN_SERV VALUES("+orderID+",'"+fechaseleccionada.toString()+"','',"+props.id+","+userID+","+4+","+1+","+0+")");
        const params  = {
            buy_order: orderID,
            amount: props.valor,//recoger el valor del prop para pasarlo a la funcion webpay
          }
        const res = await axios.get('http://127.0.0.1:8000/webpayAPI/', { params });
        setWebpay(res.data);
        //Establecer que se pueda ocupar el formulario despues de establecer los objetos de webpay
        setBotonActivo(true);
    }

    console.log(fechaseleccionada)

    return (
        <section>
            <div class="relative mx-auto max-w-screen-xl px-4 py-8">
                <div class="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
                    <div class="grid grid-cols-2 gap-4 md:grid-cols-1">
                        <img
                            alt="Les Paul"
                            src={props.imgURL}
                            class="aspect-square w-full rounded-xl object-cover"
                        />
                    </div>
                    <div class="sticky top-0">
                        <div class="mt-8 flex justify-between">
                            <div class="max-w-[35ch] space-y-2">
                                <h1 class="text-xl font-bold sm:text-2xl">
                                    {props.nombre}
                                </h1>

                                <p class="text-sm">{props.empresaRut}</p>


                                {/* Aca va lo de la estrellitas */}
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

                            <p class="text-lg font-bold">${props.valor} CLP</p>
                        </div>

                        <div class="mt-4">
                            <div class="prose max-w-none">
                                <p>
                                    {props.descripcion}
                                </p>
                            </div>
                        </div>
                        
                        {/* Dia disponibles para el servicio */}
                        <div class="mt-4">
                            <div class="prose max-w-none">
                                <p>
                                    FECHAS EN DURO
                                </p>
                            </div>
                        </div>

                        <form class="mt-8 mb-8">

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

                        <input onClick={createWebpayButton} type="checkbox" id='joemama' onChange={handleChangeCheckbox} /> Aceptar terminos y condiciones

                        <div class="mt-8 flex gap-4">

                            <form method="post" action={webpayData.url}>
                                <input type="hidden" name="token_ws" value={webpayData.token}/>
                                <input disabled={!botonActivo} type="submit" value="Ir a pagar" className='bg-green-600 px-5 py-3 text-xs font-medium text-white hover:bg-green-500'/>
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