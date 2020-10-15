import React from 'react'
import classes from './ProductDetails.module.css'

export default function ProductDetails(props) {
  const coloroptions = props.data.colorOptions.map((item,pos) => {
    const classArr = [classes.ProductImage];
    if(pos === props.currentPrevPos){
      classArr.push(classes.SelectedProductImage);
    }
    return (
    <img key={pos} className={classArr.join(' ')} src={item.imageUrl} alt={item.styleName} onClick = {()=> props.onColorOptionClick(pos)}/>
      )
    })
    const featureoption = props.data.featureList.map((item, pos) => {
      const featureArrClass = [classes.FeatureItem]
      if(pos === 1 && props.showHeartBeatSect ){
        featureArrClass.push(classes.SelecetdFeatureItem)
      } else if(pos === 0 && !props.showHeartBeatSect ){
        featureArrClass.push(classes.SelecetdFeatureItem)
      } 
      return (
      <button key={pos} className={featureArrClass.join(' ')} onClick={()=>props.onfeatureItemClick(pos)}>{item}</button>
      )
    })
        return (           
          <div className={classes.ProductData}>
          <h1 className={classes.ProductTitle}>{props.data.title}</h1>
          <p className={classes.ProductDescription}>{props.data.description}</p>
          <h3 className={classes.SectionHeading}>Select Color</h3>
          <div>
            {coloroptions}            
            </div>      
          <h3 className={classes.SectionHeading}>Features</h3> 
          <div>
            {featureoption}
          </div>
          <button className={classes.PrimaryButton}>Buy Now</button>
          </div> 
        )
}
