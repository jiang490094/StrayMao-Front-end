import React, { useState, useEffect } from 'react'
import { connect } from "react-redux";
import "../../styles/cart/buy.scss";
import { bindActionCreators } from "redux";
import { getBuy, getBuyAsync, changeBuyAsync,deleteOrderAsync, updateOrderAsync } 
from "../../actions/cart/index";
function BuyCardC(props) {
  const [quantity, setQuantity] = useState(0)
    const [totalPrice,setTotalPrice] = useState(props.info.price*props.info.quantity)
    // const [quantity, setQuantity] = useState(props.info.quantity)
    
  useEffect(()=>{
    setQuantity(props.info.quantity);
    setTotalPrice(props.storeInfo[props.index].quantity*props.info.price)
    console.log("props.storeInfo : ",props.storeInfo)
    console.log("props.index : ",props.index)
    console.log("total1 : ",props.storeInfo[props.index].quantity*props.info.price)
    if(props.info.cartId){
      props.setTotal({[props.info.cartId]:props.storeInfo[props.index].quantity*props.info.price})
    }

    setTimeout(()=>{
      setQuantity(props.info.quantity);
      setTotalPrice(props.storeInfo[props.index].quantity*props.info.price)
      // console.log("total2 : ",props.storeInfo[props.index].quantity*props.info.price)
    },1000)

  },[props])

  useEffect(()=>{
      setTotalPrice(props.storeInfo[props.index].quantity*props.info.price)
      // console.log("total3 : ",props.storeInfo[props.index].quantity*props.info.price)
      if(props.info.cartId){
        props.setTotal({[props.info.cartId]:props.storeInfo[props.index].quantity*props.info.price})
      }
  },[quantity])

  const minusOne = ()=>{
    let storeInfo = props.storeInfo;
    console.log('qqq',storeInfo[props.index].quantity);
    storeInfo[props.index].quantity -= 1;
    console.log('qqq22',storeInfo[props.index].quantity);
    props.info.quantity = storeInfo[props.index].quantity;
    setQuantity(storeInfo[props.index].quantity)
    props.changeBuyAsync(storeInfo)
    console.log("quantity:",quantity)
    setTotalPrice(storeInfo[props.index].quantity*props.info.price)
    // props.cost()
  }

  const addOne = ()=>{
    let storeInfo = props.storeInfo;
    console.log('qqq',storeInfo[props.index].quantity);
    storeInfo[props.index].quantity += 1;
    console.log('qqq22',storeInfo[props.index].quantity);
    props.info.quantity = storeInfo[props.index].quantity;
    setQuantity(storeInfo[props.index].quantity)
    props.changeBuyAsync(storeInfo)
    setTotalPrice(storeInfo[props.index].quantity*props.info.price)
    // props.cost()
  }


      const handleChange = (event)=>{
        setQuantity(event.target.value);
      }

      const trashBtn = ()=>{
        props.deleteOrderAsync(props.info.cartId);
        // console.log("dislike!!!");
        console.log("dislike!!!");
        props.totalCards.pop()
        props.setTotalCards(props.totalCards)
        // props.setTotal({[props.info.cartId]:0})
        // props.cost() 
        props.setTest(1)
      }

    useEffect(() => {
      setQuantity(props.info.quantity)
      props.getBuyAsync() 
      // console.log("info3: ",props.info.quantity)
    }, []);
    console.log("info :::,",props.info)
    console.log(props.info.price*props.info.quantity)
return(
<>
{props.test==1?"":
    <div className="buyC_boxUpper_An d-flex justify-content-between">
    <div className="d-flex">
        <div className="buyC_icon-018-trashUpper_An" onClick={()=>trashBtn()}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.82 24.22">
                <path id="Path_1809" data-name="Path 1809" d="M19.87,2.78H13.72V1a.94.94,0,0,0-1-.95H8A.94.94,0,0,0,7.1,1V2.78H1a.94.94,0,0,0-.95,1v3.7a1,1,0,0,0,1,1H2.36V21.86a2.37,2.37,0,0,0,2.37,2.36H16.09a2.36,2.36,0,0,0,2.36-2.36V8.38h1.42a1,1,0,0,0,.95-1V3.73A1,1,0,0,0,19.87,2.78ZM9,1.89h2.84v.89H9Zm7.57,20a.47.47,0,0,1-.47.47H4.73a.47.47,0,0,1-.47-.47V8.38h12.3ZM18.92,6.49h-17V4.67h17Z"/>
                <path id="Path_1810" data-name="Path 1810" d="M8,9.78a.94.94,0,0,0-.94.94V20A.95.95,0,0,0,9,20V10.72A.94.94,0,0,0,8,9.78Z"/>
                <path id="Path_1811" data-name="Path 1811" d="M12.77,9.78a.94.94,0,0,0-.94.94h0V20a.95.95,0,0,0,1.89,0V10.72A.94.94,0,0,0,12.77,9.78Z"/>
            </svg>
        </div>
        <img className="buyC_goodsImg_An" src={props.info.goodsImgs}></img>
        </div>
        <span className="buyC_goodsName_An">{props.info.name}</span>
        <div className="d-flex">
        <div className="buyC_inputbox_An d-flex">
            <div className="buyC_icon-067-minus_An" onClick={() => minusOne()}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.44 19.44">
                    <path id="Path_1767" data-name="Path 1767" d="M19.48,0H.72A.81.81,0,0,0,0,.88a.8.8,0,0,0,.72.71H19.48a.8.8,0,0,0,.71-.88A.81.81,0,0,0,19.48,0Z"/>
                </svg>
            </div>
            <input className="buyC_input-black_An" type="text" placeholder="123" value={quantity} onChange={(event)=>handleChange(event)}/>
            <div className="buyC_icon-021-plus_An"  onClick={() => addOne()}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.44 19.44">
                    <path id="Path_1806" data-name="Path 1806" d="M18.67,9h-8.2V.76A.76.76,0,1,0,9,.76V9H.76a.76.76,0,0,0,0,1.52H9v8.2a.76.76,0,1,0,1.52,0h0v-8.2h8.2a.76.76,0,0,0,0-1.52h0Z"/>
                </svg>
            </div>
        </div>
        <span className="buyC_goodsPrice_An">{totalPrice} 元</span>
        </div>
        {props.children}
    </div>
}
</>
)}

const mapStateToProps = (store) => {
    return {storeInfo: store.cartReducer.getOrderId};
  };

  const mapDispatchToProps = dispatch =>{
    return bindActionCreators(
      {
        getBuy, getBuyAsync, changeBuyAsync, updateOrderAsync, deleteOrderAsync
      },
      dispatch
    )
  };
  export default connect(mapStateToProps, mapDispatchToProps)(BuyCardC);
  
  
// export default BuyCardC