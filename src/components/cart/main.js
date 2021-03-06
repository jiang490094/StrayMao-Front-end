import React, { useState, useEffect } from 'react'
import { connect } from "react-redux"
import "../../styles/cart/cartlist.scss"
import CartListCardC from "./CartListCardC"
import CartListCardM from "./CartListCardM"
import { withRouter, useHistory } from 'react-router-dom';

import { getRecommand, getRecommandAsync,updateRecommandAsync, deleteRecommandsAsync, getBuyAsync } 
from "../../actions/cart/index";
function Main(props) {
    const [test,setTest] = useState(0)
    const [dataLoading, setDataLoading] = useState(true);
    const [display, setDisplay] = useState(<></>);
    const [checked, setChecked] = useState({})
    const [saveCheckBox,setSaveCheckBox]=useState({})
    const [total, setTotal] = useState(0)
    const [savedtotal, setSavedTotal] = useState(total)
    const [subTotal, setSubTotal] = useState(0)
    const [totalCards, setTotalCards] = useState(props.info)
    const [selectAllBtn, setSelectAllBtn] = useState(false)

    const content = [];
    
    const checkAll = ()=>{
        setSelectAllBtn(true)

        // let check=false
        // document.querySelectorAll(".cartlistC_magic-checkbox_An").forEach((e)=>{
        //     if(e.checked==false){
        //         check=true
        //     }
        // })
        // document.querySelectorAll(".cartlistC_magic-checkbox_An").forEach((e)=>{
        //         e.checked=check
        // })

        let temp = 0;
        let oldSave ={}
        for (let cartId in savedtotal) {
            temp += +savedtotal[cartId]; 
            oldSave = {...oldSave,[cartId]:true}
        }
        setSaveCheckBox(oldSave)
        setSubTotal(temp)
        
      }

    const btnBuyClick = ()=>{
        let cartId=[]
        console.log("aaayyyy ")
        document.querySelectorAll(".cartlistC_magic-checkbox_An").forEach((e)=>{
            if(e.checked){
                console.log(e.value)
                cartId.push(e.value)
            }
        })
        console.log("aaa: ",cartId)
        props.updateRecommandAsync(props.info,cartId)
        props.history.push('/Buy');
      }

      const trashBtn = ()=>{
        let cartId=[]
        document.querySelectorAll(".cartlistC_magic-checkbox_An").forEach((e)=>{
            if(e.checked){
                console.log(e.value)
                document.querySelector("#t_"+e.value).click()
                cartId.push(e.value)
            }
        })
        props.deleteRecommandsAsync(props.info,cartId);
        console.log("dislike!!!");
        setTest(1)
      }

      const cost=()=>{
        // setTotalCards (props.info);
        // let costtotal=0
        // for (let i = 1;i <= props.info.length; i++
        //     ) {
        //         console.log(`l = ${i}:`,props.info.length)
        //         if (props.info.length > 0) {
        //            costtotal+= +document.querySelector(`div.cartlistC_goodsPrice_An.d-flex > span:nth-child(1)`).innerHTML
        //         }
        //     }
            // setTotal(costtotal)
      }

    useEffect(() => {
        props.getRecommandAsync()
        console.log("info2: ",props.info)
    }, []);

    useEffect(()=>{
        setTotalCards(props.info)
    },[props.info])

    useEffect(()=>{
        console.log('total',total)
        console.log('savedtotal1',savedtotal)
        let newTotal ={...savedtotal,...total}
        setSavedTotal(newTotal);
    },[total])

    useEffect(()=>{
        // console.log('useEffect checkeds')
        let oldSave={...saveCheckBox,...checked}
        setSaveCheckBox(oldSave)

    },[checked])

    useEffect(()=>{
        if(selectAllBtn !== true){
            let temp = 0;
            for (let cartId in saveCheckBox) {
                if(saveCheckBox[cartId] === true){
                    temp += +savedtotal[cartId]; 
                }
            }
            setSubTotal(temp)
        }
        
    },[saveCheckBox,savedtotal])
    
    useEffect(() => {
        // setTotalCards (props.info);
        // console.log("totalcards:",totalCards)
        if (totalCards.length > 0) {
          // let tt = JSON.parse(totalCards[0]);
          // console.log("totalCards: ", totalCards[0]);
        }
        for (
                let i = 0;
                i < totalCards.length;
                i++
            ) {
                if (totalCards.length > 0 && totalCards != 1) {
                    console.log(":",totalCards[i]);
                    content.push(<CartListCardC info={totalCards[i]} key={i} index={i} checked={checked} setChecked={(value)=>setChecked(value)}  cost={()=>{
                        setTimeout(()=>{cost()},1000) 
                        }}  test={test} setTest = {setTest} totalCards = {totalCards} setTotalCards = {setTotalCards} setTotal={(value)=>setTotal(value)} selectAllBtn={selectAllBtn} setSelectAllBtn={(value)=>setSelectAllBtn(value)} />);
                }
            }
        setDisplay(content)
        setTimeout(()=>{
            setDataLoading(false)
        
        },100) 
        setTimeout(()=>{
            
            cost()
        },1000) 
        
        console.log("content:",content)
        
    },[totalCards, selectAllBtn])
    const loading = <div></div>;

  // 以資料載入的指示狀態來切換要出現的畫面
//   return dataLoading ? loading : display;
  return  (
    <>
    <div className="cartlistC_body_An">
        <div className="container cartlistC_box_An">
            <div className="cartlistC_boxBottom_An">
                {/* <CartListCardC info={props.info}/> */}
                {dataLoading ? loading : display}
            </div>
            <div className="cartlistC_boxDown_An d-flex justify-content-between">
                <div className="cartlistC_boxDownLeft_An d-flex">
                <div className="cartlistC_icon-018-trashDown_An" onClick={()=>trashBtn()}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.82 24.22">
                        <path id="Path_1809" data-name="Path 1809" d="M19.87,2.78H13.72V1a.94.94,0,0,0-1-.95H8A.94.94,0,0,0,7.1,1V2.78H1a.94.94,0,0,0-.95,1v3.7a1,1,0,0,0,1,1H2.36V21.86a2.37,2.37,0,0,0,2.37,2.36H16.09a2.36,2.36,0,0,0,2.36-2.36V8.38h1.42a1,1,0,0,0,.95-1V3.73A1,1,0,0,0,19.87,2.78ZM9,1.89h2.84v.89H9Zm7.57,20a.47.47,0,0,1-.47.47H4.73a.47.47,0,0,1-.47-.47V8.38h12.3ZM18.92,6.49h-17V4.67h17Z"/>
                        <path id="Path_1810" data-name="Path 1810" d="M8,9.78a.94.94,0,0,0-.94.94V20A.95.95,0,0,0,9,20V10.72A.94.94,0,0,0,8,9.78Z"/>
                        <path id="Path_1811" data-name="Path 1811" d="M12.77,9.78a.94.94,0,0,0-.94.94h0V20a.95.95,0,0,0,1.89,0V10.72A.94.94,0,0,0,12.77,9.78Z"/>
                    </svg>
                </div>
                <button className="cartlistC_btn-brown_An" type="button" value="123"  onClick={()=>checkAll()}>全選</button>
                
                </div>
                <div className="cartlistC_boxDownRight_An">
                <span onClick={()=>cost()} className="cartlistC_totalPrice_An">小計：{subTotal} 元</span>
                </div>
            </div>
    
            <button className="cartlistC_btn-green_An" type="button" value="123" onClick={() => btnBuyClick()}>購買</button>
        </div>
    </div>
    
    <div className="cartlistM_body_An">
        <div className="cartlistM_box_An">
            <div className="cartlistM_boxBottom_An">
                <CartListCardM />
            </div>
            <div className="cartlistM_boxDown_An d-flex justify-content-between">
                <div className="cartlistM_d-flex flex-column justify-content-between">
                    <div className="cartlistM_boxDownLeft_An d-flex">
                        <div className="cartlistM_icon-018-trashDown_An">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.82 24.22">
                                <path id="Path_1809" data-name="Path 1809" d="M19.87,2.78H13.72V1a.94.94,0,0,0-1-.95H8A.94.94,0,0,0,7.1,1V2.78H1a.94.94,0,0,0-.95,1v3.7a1,1,0,0,0,1,1H2.36V21.86a2.37,2.37,0,0,0,2.37,2.36H16.09a2.36,2.36,0,0,0,2.36-2.36V8.38h1.42a1,1,0,0,0,.95-1V3.73A1,1,0,0,0,19.87,2.78ZM9,1.89h2.84v.89H9Zm7.57,20a.47.47,0,0,1-.47.47H4.73a.47.47,0,0,1-.47-.47V8.38h12.3ZM18.92,6.49h-17V4.67h17Z"/>
                                <path id="Path_1810" data-name="Path 1810" d="M8,9.78a.94.94,0,0,0-.94.94V20A.95.95,0,0,0,9,20V10.72A.94.94,0,0,0,8,9.78Z"/>
                                <path id="Path_1811" data-name="Path 1811" d="M12.77,9.78a.94.94,0,0,0-.94.94h0V20a.95.95,0,0,0,1.89,0V10.72A.94.94,0,0,0,12.77,9.78Z"/>
                            </svg>
                        </div>
                        <button className="cartlistM_btn-brown_An" type="button" value="123">全選</button>
                    </div>
                    <span className="cartlistM_totalPrice_An">小計：{subTotal} 元</span>
                </div>
                <a href=""><button className="cartlistM_btn-green_An" type="button" value="123" onClick={()=>{}}>購買</button></a>
            </div>
        </div>
    </div>
    </>
   
    ) ;
}

const mapStateToProps = (store) => {
    return { info: store.cartReducer.getRecom };
  };
  const mapDispatchToProps = null;
  
export default  withRouter(connect(
    mapStateToProps, {
        getRecommand, getRecommandAsync,updateRecommandAsync, deleteRecommandsAsync,getBuyAsync 
    })(Main))

// export default CartList