import React, { useState, useEffect } from 'react'
import { withRouter} from 'react-router-dom';
//user used
import "../../styles/membership/custom.scss";
import { MEMBER_API_URL } from "../../actions/membership/actionTypes";
import PetArea1_card from './PetArea1_card';
import LogInInfo from './LogInInfo2';
import DonateButton from '../common/DonateButton'

function PetArea2(props) {
  //檢查登入狀態 >> 取得要render畫面的內容
  const [member , setMember] = useState({});  //登入者資訊
  useEffect(()=>{
    if(member.memberId != null) getMyFavorite();
  },[member]);

  //拉資料
  const [renderList , setRenderList] = useState([]);
  async function getMyFavorite() {
    const url = `http://localhost:3001/straymao/adoption/adop_list/${member.memberId}`;
    // const condition = {
    //   memberId: member.memberId
    // };
    const request = new Request(url, {
      method: 'GET',
      // body: JSON.stringify(condition),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    });
    const response = await fetch(request)
    const rsObj = await response.json();  //轉成物件
    setRenderList(rsObj.data);
  }

return(
<>
  <LogInInfo
    setMember = {setMember}
    history = {props.history}
  />
  <DonateButton />

  <div className="petAreaWrap">
    <nav className="nav nav-pills flex-sm-row petAreaNavGroup">
        <a className="flex-sm-fill text-sm-center nav-link petAreaNav" onClick={() => {props.history.push('/petArea1')}}>關注寵物清單</a>
        <a className="flex-sm-fill text-sm-center nav-link petAreaNav active" href="#">認/領&emsp;養紀錄</a>
        <a class="flex-sm-fill text-sm-center nav-link disabled" href="#" tabIndex="-1" aria-disabled="true"></a>
        <a class="flex-sm-fill text-sm-center nav-link disabled" href="#" tabIndex="-1" aria-disabled="true"></a>
        <a class="flex-sm-fill text-sm-center nav-link disabled" href="#" tabIndex="-1" aria-disabled="true"></a>
        <a class="flex-sm-fill text-sm-center nav-link disabled" href="#" tabIndex="-1" aria-disabled="true"></a>
    </nav>
    <div className="container petAreaBackgroud">
      <div className="row">
        {renderList.length > 0 && renderList.map((element, i) => {
          return <PetArea1_card info={element} history = {props.history} />;
        })}
      </div>
    </div>
  </div>
</>
)}

export default withRouter(PetArea2);