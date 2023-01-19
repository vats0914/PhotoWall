import React, {Component} from 'react'
import PhotoWall from './PhotoWall'
import AddPhoto from './AddPhoto'
import {Link, Route } from 'react-router-dom'
import Single from './single'

class Main extends Component {
    // constructor() {
    //     super()
        
    // }

    state={loading :true}

    componentDidMount()
    {
        this.props.startLoadingPost().then(()=>
        {
            this.setState({loading:false})
        })
        this.props.startLoadingComment()  

    }

    
    

    render() {
        // console.log(this.props)
        return ( 
        
        <div>
            <h1>
                <Link to='/'>
                    PhotoWall
                </Link>
            </h1>
            <Route exact path = "/" render={() => (
                 <div>
                      <PhotoWall {...this.props}/>
                 </div>

            )}/> 

            <Route path= "/AddPhoto" render = {({history}) => (
                <AddPhoto {...this.props} />
            )}/>
            <Route path='/single/:id' render={(params)=>(
                <Single loading={this.state.loading} {...this.props} {...params}/>
            )
            }/>
            
         </div>
        )
    }

}


export default Main