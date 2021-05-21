import React, { Component } from 'react'

import{ connect} from 'react-redux'


export class Favorite extends Component {
    render() {
        return (
            <div>
                hello
                
            </div>
        )
    }
}
function mapStateProps(state){
    return {
        var:state,
    }
}

export default connect(mapStateProps)(Favorite)
