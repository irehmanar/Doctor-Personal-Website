import React from 'react'
import './Featured.css'
import { CircularProgressbar } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
function Featured({income}) {
  return (
    <div className='featured'>
      <div className="top">
        <h1 className='title'>Total Revenue</h1>
        <MoreVertIcon className='titleIcon'/>
      </div>

      <div className="bottom">
        <div className="featuredChart">
            <CircularProgressbar value={30} text='30%' strokeWidth={4}/>
        </div>

        <p className="title">Total income made today</p>
        <p className="amount">Rs. {income}</p>
        <p className="desc">
            Previous transactions processing. Pending appointments may not be included in this.
        </p>

        <div className="summary">
            <div className="item">
                <div className="itemTitle">Target</div>
                <div className="itemResult positive">
                <KeyboardArrowUpIcon/>
                    <div className="resultAmount">
                        Rs.12k
                    </div>
                </div>
            </div>
            <div className="item">
                <div className="itemTitle">Last Week</div>
                <div className="itemResult negative">
                    <KeyboardArrowDownIcon/>
                    <div className="resultAmount">
                        Rs. 3.4k
                    </div>
                </div>
            </div>
            <div className="item">
                <div className="itemTitle">Last Month</div>
                <div className="itemResult positive">
                    <KeyboardArrowUpIcon/>
                    <div className="resultAmount">
                        Rs.12k
                    </div>
                </div>
            </div>
        </div>

      </div>
    </div>
  )
}

export default Featured