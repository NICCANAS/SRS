import { connect } from 'react-redux'
import CardServsemp from "../list-empress/cardEmp"



function IniEmp() {
    return (

        <div className="w-9/12">
            <div className="p-4 text-gray-500">
                <CardServsemp/>
            </div>
        </div>


    )
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps, {

})(IniEmp)