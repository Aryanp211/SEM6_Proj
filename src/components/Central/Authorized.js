import React, { Component } from 'react'
import CentralCard from './CentralCard'
import PendingRequest from './PendingRequest'
import Grid from '@material-ui/core/Grid';


class Authorized extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            clicked:false,
            name:'',
            status:'Authorized',
            category:['Education','Agriculture','Transportation','Infrastructure','Technology','Energy','Enviornment','Health']
             
        }
        // this.handleClick=this.handleClick.bind(this)
    }
    
    handleClick=e=>{
        console.log(e.target.value)
        this.setState({
            clicked:true,
            name:e.target.value,
            // status:'Pending'
        })
        
    }

    render() {
    
        return (
            <div>
                <Grid container spacing={3}>
                {this.state.category.map((mapitem)=>{
                    return ( 
                      
                        <Grid item xs={4}>
                        <CentralCard category={mapitem} status='Authorized'></CentralCard>
                        </Grid>
                        
                )})}
                </Grid>
            </div>
        )
    }
}

export default Authorized