import { connect } from 'react-redux'

function Card() {
    return (
        <main>
            <div class='flex items-center justify-center min-h-screen bg-gradient-to-t from-gray-900 via-purple-900 to-violet-600 bg-gradient-to-br'>
                <div class='w-full max-w-lg py-8 flex flex-row items-center justify-center mx-auto bg-[#FFFBFB] rounded-lg shadow-xl'>
                    <div class="flex flex-col md:flex-row w-3/4 md:w-5/6 space-x-0 md:space-x-8">

                    </div>
                </div>

            </div>

        </main>
    )
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps, {

})(Card)