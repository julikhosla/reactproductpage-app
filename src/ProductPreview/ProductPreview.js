import React from 'react';
import classes from './ProductPreview.module.css';
export default function ProductPreview(props) {
    const currentHour = new Date().getHours() > 9 ? new Date().getHours() : '0'+ new Date().getHours();
    const currentMinutes = new Date().getMinutes() > 9 ? new Date().getMinutes() : '0'+ new Date().getMinutes();
        return (
            <div className={classes.ProductPreview}>                
            <img src={props.currenPreviewImg} alt="Product preview" />
            {props.showHeartBeat ? 
    <div className={classes.HeartbeatData}>
        <i className="fa fa-heartbeat" aria-hidden="true"></i><p>78</p>
        </div> : 
    <div className={classes.TimeData}>{currentHour}:{currentMinutes}</div>}
            </div>
        )
}
