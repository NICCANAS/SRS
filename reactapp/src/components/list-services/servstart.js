import { connect } from 'react-redux'

import {
    Datepicker,
    Input,
    initTE,
  } from "tw-elements";
  
  initTE({ Datepicker, Input });
  
  const datepickerDisableFuture = document.getElementById('datepicker-disable-future');
  new Datepicker(datepickerDisableFuture, {
    disableFuture: true
  });

function Casipago() {
    return (
        <section>
            <div class="relative mx-auto max-w-screen-xl px-4 py-8">
                <div class="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
                    <div class="grid grid-cols-2 gap-4 md:grid-cols-1">
                        <img
                            alt="Les Paul"
                            src="https://images.unsplash.com/photo-1456948927036-ad533e53865c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                            class="aspect-square w-full rounded-xl object-cover"
                        />

                        <div class="grid grid-cols-2 gap-4 lg:mt-4">
                            <img
                                alt="Les Paul"
                                src="https://images.unsplash.com/photo-1456948927036-ad533e53865c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                                class="aspect-square w-full rounded-xl object-cover"
                            />

                            <img
                                alt="Les Paul"
                                src="https://images.unsplash.com/photo-1456948927036-ad533e53865c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                                class="aspect-square w-full rounded-xl object-cover"
                            />

                            <img
                                alt="Les Paul"
                                src="https://images.unsplash.com/photo-1456948927036-ad533e53865c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                                class="aspect-square w-full rounded-xl object-cover"
                            />

                            <img
                                alt="Les Paul"
                                src="https://images.unsplash.com/photo-1456948927036-ad533e53865c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                                class="aspect-square w-full rounded-xl object-cover"
                            />
                        </div>
                    </div>

                    <div class="sticky top-0">
                        <strong
                            class="rounded-full border border-blue-600 bg-gray-100 px-3 py-0.5 text-xs font-medium tracking-wide text-blue-600"
                        >
                            Pre Order
                        </strong>

                        <div
                            class="relative mb-3"
                            id="datepicker-disable-future"
                            data-te-input-wrapper-init>
                            <input
                                type="text"
                                class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                placeholder="Select a date" />
                            <label
                                for="floatingInput"
                                class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                            >Select a date</label
                            >
                        </div>

                        <div class="mt-8 flex justify-between">
                            <div class="max-w-[35ch] space-y-2">
                                <h1 class="text-xl font-bold sm:text-2xl">
                                    Fun Product That Does Something Cool
                                </h1>

                                <p class="text-sm">Highest Rated Product</p>

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

                            <p class="text-lg font-bold">$119.99</p>
                        </div>

                        <div class="mt-4">
                            <div class="prose max-w-none">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                                    veniam dicta beatae eos ex error culpa delectus rem tenetur,
                                    architecto quam nesciunt, dolor veritatis nisi minus inventore,
                                    rerum at recusandae?
                                </p>
                            </div>

                            <button class="mt-2 text-sm font-medium underline">Read More</button>
                        </div>

                        <form class="mt-8">
                            <fieldset>
                                <legend class="mb-1 text-sm font-medium">Color</legend>

                                <div class="flex flex-wrap gap-1">
                                    <label for="color_tt" class="cursor-pointer">
                                        <input
                                            type="radio"
                                            name="color"
                                            id="color_tt"
                                            class="peer sr-only"
                                        />

                                        <span
                                            class="group inline-block rounded-full border px-3 py-1 text-xs font-medium peer-checked:bg-black peer-checked:text-white"
                                        >
                                            Texas Tea
                                        </span>
                                    </label>

                                    <label for="color_fr" class="cursor-pointer">
                                        <input
                                            type="radio"
                                            name="color"
                                            id="color_fr"
                                            class="peer sr-only"
                                        />

                                        <span
                                            class="group inline-block rounded-full border px-3 py-1 text-xs font-medium peer-checked:bg-black peer-checked:text-white"
                                        >
                                            Fiesta Red
                                        </span>
                                    </label>

                                    <label for="color_cb" class="cursor-pointer">
                                        <input
                                            type="radio"
                                            name="color"
                                            id="color_cb"
                                            class="peer sr-only"
                                        />

                                        <span
                                            class="group inline-block rounded-full border px-3 py-1 text-xs font-medium peer-checked:bg-black peer-checked:text-white"
                                        >
                                            Cobalt Blue
                                        </span>
                                    </label>
                                </div>
                            </fieldset>

                            <fieldset class="mt-4">
                                <legend class="mb-1 text-sm font-medium">Size</legend>

                                <div class="flex flex-wrap gap-1">
                                    <label for="size_xs" class="cursor-pointer">
                                        <input
                                            type="radio"
                                            name="size"
                                            id="size_xs"
                                            class="peer sr-only"
                                        />

                                        <span
                                            class="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white"
                                        >
                                            XS
                                        </span>
                                    </label>

                                    <label for="size_s" class="cursor-pointer">
                                        <input
                                            type="radio"
                                            name="size"
                                            id="size_s"
                                            class="peer sr-only"
                                        />

                                        <span
                                            class="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white"
                                        >
                                            S
                                        </span>
                                    </label>

                                    <label for="size_m" class="cursor-pointer">
                                        <input
                                            type="radio"
                                            name="size"
                                            id="size_m"
                                            class="peer sr-only"
                                        />

                                        <span
                                            class="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white"
                                        >
                                            M
                                        </span>
                                    </label>

                                    <label for="size_l" class="cursor-pointer">
                                        <input
                                            type="radio"
                                            name="size"
                                            id="size_l"
                                            class="peer sr-only"
                                        />

                                        <span
                                            class="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white"
                                        >
                                            L
                                        </span>
                                    </label>

                                    <label for="size_xl" class="cursor-pointer">
                                        <input
                                            type="radio"
                                            name="size"
                                            id="size_xl"
                                            class="peer sr-only"
                                        />

                                        <span
                                            class="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white"
                                        >
                                            XL
                                        </span>
                                    </label>
                                </div>
                            </fieldset>

                            <div class="mt-8 flex gap-4">
                                <div>
                                    <label for="quantity" class="sr-only">Qty</label>

                                    <input
                                        type="number"
                                        id="quantity"
                                        min="1"
                                        value="1"
                                        class="w-12 rounded border-gray-200 py-3 text-center text-xs [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    class="block rounded bg-green-600 px-5 py-3 text-xs font-medium text-white hover:bg-green-500"
                                >
                                    Dirigir al pago.
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>

    )

}




const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps, {

})(Casipago)