import React,{Component} from 'react';
import classes from './App.module.css';
import ProductData from './Utils/ProductData';
import ProductDetails from './ProductDetails/ProductDetails';
import ProductPreview from './ProductPreview/ProductPreview';
import TopBar from './TopBar/TopBar'
class App extends Component  {
  state = {
    productData: ProductData,
    currentPos:0,
    showHeartBeatSection:false
  }
  onColorOptionClick = (pos) => {
    this.setState({
      currentPos:pos
    })
  }
  onfeatureItemClick = (pos) => {
    let showHeart = false;
    if(pos === 1){
      showHeart = true
    }
    this.setState({
      showHeartBeatSection: showHeart
    })
  }
  render(){
    return (
      <div className="App">
        <TopBar/>
        <div className={classes.MainContainer}>
          <div className={classes.ProductPreview}>
          { <ProductPreview currenPreviewImg = {this.state.productData.colorOptions[this.state.currentPos].imageUrl} showHeartBeat = {this.state.showHeartBeatSection}/> }
          </div>
          <div className={classes.ProductData}>
            <ProductDetails data={this.state.productData} onColorOptionClick={this.onColorOptionClick} currentPrevPos={this.state.currentPos} onfeatureItemClick = {this.onfeatureItemClick} showHeartBeatSect = {this.state.showHeartBeatSection} />   
          </div>               
        </div>
      </div>
    );
  }
  }

export default App;
