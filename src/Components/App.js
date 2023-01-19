import { connect } from "react-redux"
import Main from "./Main";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router";
import * as actions from "../redux/actions"

function mapStateToProps(state)
{
    return{
        posts:state.posts,
        comments: state.comments
    }
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators(actions, dispatch) 
}

const App = withRouter(connect(mapStateToProps , mapDispatchToProps)(Main));

export default App ;