import React from 'react'
import './Featured.css'
import { CircularProgressbar } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
function Featured() {
  return (
    <div className='featured'>
      <div className="top">
        <h1 className='title'>Total Revenue</h1>
        <MoreVertIcon className='titleIcon'/>
      </div>

      <div className="bottom">
        <div className="featuredChart">
            <CircularProgressbar value={60} text='60%' strokeWidth={4}/>
        </div>

        <p className="title">Total sales made today</p>
        <p className="amount">$420</p>
        <p className="desc">
            Previous transactions processing. Last payments may not be included in this.
        </p>

        <div className="summary">
            <div className="item">
                <div className="itemTitle">Target</div>
                <div className="itemResult positive">
                <KeyboardArrowUpIcon/>
                    <div className="resultAmount">
                        $12.4k
                    </div>
                </div>
            </div>
            <div className="item">
                <div className="itemTitle">Last Week</div>
                <div className="itemResult negative">
                    <KeyboardArrowDownIcon/>
                    <div className="resultAmount">
                        $19.4k
                    </div>
                </div>
            </div>
            <div className="item">
                <div className="itemTitle">Last Month</div>
                <div className="itemResult positive">
                    <KeyboardArrowUpIcon/>
                    <div className="resultAmount">
                        $356.7k
                    </div>
                </div>
            </div>
        </div>

      </div>
    </div>
  )
}

export default Featured