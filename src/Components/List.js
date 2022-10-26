import React from 'react'

class List extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
     
    render() { 
        for(let i=0; i<this.props.b_name; i++) {
            return(
                <>
                <ul>
                    <li>
                        {this.props.b_name[i]}
                    </li>
                    <li>
                        {this.props.slug[i]}
                    </li>
                    <li>
                        {this.props.vb_name[i]}
                    </li>
                </ul>
                </>
            )
        }
    }
}
 
export default List;