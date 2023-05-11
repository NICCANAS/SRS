import { connect } from 'react-redux'
import CardServs from "../list-services/cardservs"
import Barbusq from '../list-services/barbusq'



function IniEmp() {
    return (

        <div class="w-9/12">
            <div class="p-4 text-gray-500">
                <Barbusq />
                <CardServs/>

            </div>
        </div>


    )
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps, {

})(IniEmp)