import { connect } from 'react-redux'
import CardServs from "../../components/list-services/cardservs"
import Barbusq from '../../components/list-services/barbusq'



function ModEmp() {
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

})(ModEmp)