
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter, useHistory } from 'react-router-dom';
import { doc } from "prettier";
// import Form from "./Form";

function SocialHomeTop(props) {

  return (
    <>
      <div className="socialTitleMain">
        <div className="socialBTitle enHeader1">SOCIAL</div>
        <div className="socialTitleLine">
          <p className="socialSTitle paragraph2">社群活動一覽</p>
        </div>
      </div>
      <div className="container socialtopItems">
        <div className="row topCardItems no-gutters">
          <div className="topArticleItems">
            <div className="grayCover">
              <span className="header2 coverText">知識</span>
            </div>
            <div className="topCard">
              <img
                className="topCardImg"
                src="/image/homepage/homepage-1.jpg"
              />
              <div className="topCardText">
                <div className="topCardTitle">知識</div>
                <a className="topCardP">>了解更多</a>
              </div>
            </div>
          </div>
          <div className="topTalkItems">
            <div className="grayCover" style={{ visibility: "hidden" }}>
              <span className="header2 coverText">話題</span>
            </div>
            <div className="bigTopCard">
              <img
                className="bigCardImg"
                src="/image/homepage/homepage-1.jpg"
              />
              <div className="topCardText">
                <div className="topCardTitle">話題</div>
                <a className="topCardP"  onClick={()=>{document.getElementById("socialforumMain").scrollIntoView(false)}}>>了解更多</a>
              </div>
            </div>
          </div>
          <div className="topActivityItems">
            <div className="grayCover">
              <span className="header2 coverText">活動</span>
            </div>
            <div className="topCard">
              <img
                className="topCardImg"
                src="/image/homepage/homepage-1.jpg"
              />
              <div className="topCardText">
                <div className="topCardTitle">活動</div>
                <a className="topCardP">>了解更多</a>
              </div>
            </div>
          </div>
        </div>
        <span className="row grayarrowItems">
          <span className="toparrow-left">
            <img
              className="inlineArrow"
              src="./icomoon/SVG/_101-chevron-left-solid.svg"
              alt=""
            ></img>
          </span>
          <span className="toparrow-right">
            <img
              className="inlineArrow"
              src="./icomoon/SVG/_102-chevron-right-solid.svg"
              alt=""
            ></img>
          </span>
        </span>
      </div>
      <div className="row topBtnItems d-flex">
        <div className="topBtnBox">
          <button className="btn-green topBtnW" type="button" value="發起活動"  onClick={() => {
                    console.log(props)
                    props.history.push('/addForum');
                  }}
        
        >
            發起話題
          </button>
          <button className="btn-brown topBtnW" type="button" value="加入討論" onClick={() => {
                    console.log(props)
                    props.history.push('/socialForum');
                  }}>
            加入討論
          </button>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (store) => {
  return {};
};
const mapDispatchToProps = null;

export default withRouter(connect(mapStateToProps, {})(SocialHomeTop));



// const mapStateToProps = (store) => {
//   return {
//   };
// };
// const mapDispatchToProps = null;

// export default withRouter(
//   connect(mapStateToProps, {
//   })(SocialHomeTop)
// );
  