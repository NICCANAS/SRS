import { connect } from 'react-redux'
import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

function Barbusq() {


    /* El const coge el "FechaNew para que se seleccione automaticamente ah y use el formControll que era del mui que era lib del calendario" */
    const [value, setValue] = React.useState('FechaNew');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <div class="flex justify-between p-4 pb-90 bg-white mt-3 rounded-xl shadow-lg ">
            <div class="flex items-center space-x-6 pr-8">
                <div class="flex gap-8">
                    <div class="relative">
                        <details class="group [&_summary::-webkit-details-marker]:hidden">
                            <summary
                                class="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600"
                            >
                                <span class="text-sm font-medium"> Filtro fecha </span>

                                <span class="transition group-open:-rotate-180">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        class="h-4 w-4"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                        />
                                    </svg>
                                </span>
                            </summary>

                            <div
                                class="z-50 group-open:absolute group-open:start-0 group-open:top-auto group-open:mt-2"
                            >
                                <div class="w-96 rounded border border-gray-200 bg-white">
                                    <header class="flex items-center justify-between p-4">
                                        <span class="text-sm text-gray-700"> Filtrar por</span>
                                    </header>

                                    {/* Aca se hace el radioButton Para el filtrado de fecha*/}

                                    <FormControl class='space-y-1 border-t border-gray-200 p-4'>
                                        <RadioGroup
                                            aria-labelledby="demo-controlled-radio-buttons-group"
                                            name="controlled-radio-buttons-group"
                                            value={value}
                                            onChange={handleChange}
                                        >
                                            <FormControlLabel value="FechaNew"  control={<Radio />} label="Fecha mas nueva" />
                                            <FormControlLabel value="FechaOld"  control={<Radio />} label="Fecha mas antigua" />
                                        </RadioGroup>
                                    </FormControl>


                                </div>
                            </div>
                        </details>
                    </div>

                </div>

            </div>
            <div class="flex justify-between w-1/5">
                <div class="flex items-center border-2 p-2 rounded-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input type="text" placeholder="Search" class="ml-2 outline-none w-full" />
                </div>
            </div>
        </div>
    )

}


const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps, {

})(Barbusq)
