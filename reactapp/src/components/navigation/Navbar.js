import {connect} from'react-redux'

function Navbar() {
    return(
        <nav className='w-full py-10 shadow-md fixed'>
            <div className='bg-white px-4 sm:px-6'>
            <div className='ml-4 -mt2 flex flex-wrap items-center justify-between sm:flex-nowrap'>
                <div className='ml-4 mt-2'>
                <h3 className='txt-lg font-medium leading-6 text-gray-900'>Secure Recruitment Service</h3>
                

                </div>
            </div>
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps,{
    
})(Navbar)