import React, { Component } from 'react'
import './dashboard.css'



import Typography from '@material-ui/core/Typography';
import 'bootstrap/dist/css/bootstrap.min.css';

import AreaChart from './Area chart';

class Dashboard extends Component {
	
  render() {
    return (
        <div>
			
				
		
			
        <div className='para1' >
				<h1>One time loan for $75000
				</h1>
			
					<h4>
					for a down payment of your future home &nbsp; &nbsp; &nbsp; &nbsp;
					<span className="badge badge-pill badge-primary" > start one time loan</span>
					</h4> 
			
					<h2>Impact targectory
					&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
					<span className='rcorner' >recalculate</span>
						</h2>
						<div className='chart'>
						<AreaChart/>	
						</div>
					
   <div className='box1'>
	    well funded  <span>&#8505;</span>
  </div>
  <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
          facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
          gravida rutrum quisque non tellus.
        </Typography>
		</div>	
		
		</div>
    )
  }
}

export default Dashboard;
/*

			<div className='main-title'>
				<img src={logo} alt='logo'></img>
    			<h1  >               Prudential          </h1>
				<h2> | Paricipant</h2>

		
			</div>
			
			
			
			
			
			<span style={{fontSize:'20px'}}>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
		</span>*/