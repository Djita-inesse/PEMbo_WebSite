import { Button } from '@mui/material';
import React from 'react';
import EastIcon from '@mui/icons-material/East';
import '../../css/Page.css';

type Props = {};

const HomePage = (props: Props) => {
  return (
    <div className='Containerpage'>
        <div className='title'>  <p >Overview</p><div >   <Button variant="contained">+ New Dashboard</Button></div> </div>

       <div className='Containerprincipal'> 
          <div className='Container'>
            <div className='subContainer'>
              <div className='elmtCOntener'>
                <div className='icon'>
                  <img src="../../assets/images/PEMBO.png"  />
                  </div>
                  <div className='data'>
                    <p>Done Tasks</p>
                    <h4>50 </h4>
                </div>
              </div>
              <hr />
              <div className='moreContener'>
                <button>see all tasks</button>
              </div>
            </div>
          </div>

          <div className='Container'>
            <div className='subContainer'>
              <div className='elmtCOntener'>
                <div className='icon'>
                  <img src="../../assets/images/PEMBO.png"  />
                  </div>
                  <div className='data'>
                    <p>Done Tasks <EastIcon sx={{fontSize:'12px'}}/> </p>
                    <h4>50 </h4>
                </div>
              </div>
              <hr />
              <div className='moreContener'>
                <button>see all tasks</button>
              </div>
            </div>
          </div>


          <div className='Container'>
            <div className='subContainer'>
              <div className='elmtCOntener'>
                <div className='icon'>
                  <img src="../../assets/images/PEMBO.png"  />
                  </div>
                  <div className='data'>
                    <p>Done Tasks</p>
                    <h4>50 </h4>
                </div>
              </div>
              <hr />
              <div className='moreContener'>
                <button>see all tasks</button>
              </div>
            </div>
          </div>
        </div>
     </div>
  
   
  );
};

export default HomePage;