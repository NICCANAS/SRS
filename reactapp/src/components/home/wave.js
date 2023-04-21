import Footer from "../navigation/Footer";
import { connect } from 'react-redux'

function wave() {
    return (
        <div className="wave">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#7dd3fc" fill-opacity="1" d="M0,96L34.3,128C68.6,160,137,224,206,256C274.3,288,343,288,411,266.7C480,245,549,203,617,197.3C685.7,192,754,224,823,224C891.4,224,960,192,1029,176C1097.1,160,1166,160,1234,154.7C1302.9,149,1371,139,1406,133.3L1440,128L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
            </svg>
        </div>
    )
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, {

})(wave)

