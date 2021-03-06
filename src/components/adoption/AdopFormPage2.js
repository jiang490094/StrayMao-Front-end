/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter, useHistory } from 'react-router-dom';
function AdopFormPage2(props) {
  const [display, setDisplay] = useState(<></>);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const loading = <div></div>;
  const ele = (value) => {
    return document.querySelector(value);
  };
  // 以資料載入的指示狀態來切換要出現的畫面
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col pt-3">
            <div className="adopFormTitle header4 mt-2">申請表格 </div>
            <div className="d-flex mt-5 flex-column align-items-center">
              <div className="d-flex flex-row mx-auto  mb-5">
                <svg
                  className="my-auto mr-5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="228.5"
                  height="2"
                  viewBox="0 0 228.5 2"
                >
                  <line
                    id="Line_47"
                    data-name="Line 47"
                    x2="228.5"
                    transform="translate(0 1)"
                    fill="none"
                    stroke="#ddbea9"
                    strokeWidth="2"
                  />
                </svg>

                <div className="header7">居住狀況</div>
                <svg
                  className="my-auto ml-5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="228.5"
                  height="2"
                  viewBox="0 0 228.5 2"
                >
                  <line
                    id="Line_47"
                    data-name="Line 47"
                    x2="228.5"
                    transform="translate(0 1)"
                    fill="none"
                    stroke="#ddbea9"
                    strokeWidth="2"
                  />
                </svg>
              </div>

              <div className="adopFormBox px-5 py-4 d-flex flex-column">
                <div className="d-flex flex-column my-1">
                  <label className="my-2 paragraph1">住家房型：</label>
                  <input
                    id="q1"
                    className="input-brown navSearchPlaceholder w-100"
                    type="text"
                    placeholder=""
                  ></input>
                </div>
                <div className="d-flex flex-column my-1">
                  <label className="my-2 paragraph1">住家坪數：</label>
                  <input
                    id="q2"
                    className="input-brown navSearchPlaceholder w-100"
                    type="text"
                    placeholder=""
                  ></input>
                </div>
                <div className="d-flex flex-column my-1">
                  <label className="my-2 paragraph1">同住人員：</label>
                  <div className="">
                    <div className="d-flex justify no-gutters">
                      <div className="opt col">
                        <input
                          className="magic-checkbox"
                          type="checkbox"
                          name="layout"
                          id="c3"
                        />
                        <label htmlFor="c3" className="paragraph1">
                          父母
                        </label>
                      </div>
                      <div className="opt col">
                        <input
                          className="magic-checkbox"
                          type="checkbox"
                          name="layout"
                          id="c4"
                        />
                        <label htmlFor="c4" className="paragraph1">
                          兄弟姊妹
                        </label>
                      </div>
                      <div className="opt col">
                        <input
                          className="magic-checkbox"
                          type="checkbox"
                          name="layout"
                          id="c5"
                        />
                        <label htmlFor="c5" className="paragraph1">
                          自己住
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-column my-1">
                  <label className="my-2 paragraph1">同住人數：</label>
                  <input
                    id="q3"
                    className="input-brown navSearchPlaceholder w-100"
                    type="text"
                    placeholder=""
                  ></input>
                </div>{' '}
                <div className="d-flex flex-column my-1">
                  <label className="my-2 paragraph1">家中有否安裝窗網：</label>
                  <div className="d-flex justify no-gutters">
                    <div className="opt col">
                      <input
                        className="magic-radio justify-content-center align-items-center"
                        type="radio"
                        name="radio"
                        id="r1"
                        value="option1"
                      />
                      <label htmlFor="r1" className="paragraph1">
                        有
                      </label>
                    </div>
                    <div className="opt col">
                      <input
                        className="magic-radio"
                        type="radio"
                        name="radio"
                        id="r2"
                        value="option2"
                      />
                      <label htmlFor="r2" className="paragraph1">
                        無
                      </label>
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-column my-1">
                  <label className="my-2 paragraph1">
                    如沒有安裝窗網, 會否考慮安裝以防意外發生?：
                  </label>
                  <div className="d-flex justify no-gutters">
                    <div className="opt col">
                      <input
                        className="magic-radio justify-content-center align-items-center"
                        type="radio"
                        name="radio1"
                        id="r3"
                        value="option1"
                      />
                      <label htmlFor="r3" className="paragraph1">
                        會
                      </label>
                    </div>
                    <div className="opt col">
                      <input
                        className="magic-radio"
                        type="radio"
                        name="radio1"
                        id="r4"
                        value="option2"
                      />
                      <label htmlFor="r4" className="paragraph1">
                        不會
                      </label>
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-column my-1">
                  <label className="my-2 paragraph1">
                    家中有無毛髮過敏症狀：
                  </label>

                  <div className="d-flex justify no-gutters">
                    <div className="opt col">
                      <input
                        className="magic-radio justify-content-center align-items-center"
                        type="radio"
                        name="radio2"
                        id="r5"
                        value="option1"
                      />
                      <label htmlFor="r5" className="paragraph1">
                        有
                      </label>
                    </div>
                    <div className="opt col">
                      <input
                        className="magic-radio"
                        type="radio"
                        name="radio2"
                        id="r6"
                        value="option2"
                      />
                      <label htmlFor="r6" className="paragraph1">
                        無
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="my-5 d-flex">
                <button
                  className="mx-2 btn-green d-flex justify-content-center  align-items-center my-auto"
                  type="button"
                  value="123"
                  onClick={() => {
                    ele('#q1').value = '社區大樓';
                    ele('#q2').value = '40';
                    ele('#q3').value = '6';
                    ele('#c3').setAttribute('checked', true);
                    ele('#c4').setAttribute('checked', true);
                    ele('#r2').setAttribute('checked', true);
                    ele('#r3').setAttribute('checked', true);
                    ele('#r6').setAttribute('checked', true);
                  }}
                >
                  一鍵填寫
                </button>
                <button
                  className="mx-2 btn-green d-flex justify-content-center  align-items-center my-auto"
                  type="button"
                  value="123"
                  onClick={() => {
                    props.history.push('/adoptionform3');
                  }}
                >
                  下一步
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
  // return loading;
}

const mapStateToProps = (store) => {
  return {};
};
const mapDispatchToProps = null;

export default withRouter(connect(mapStateToProps, {})(AdopFormPage2));
