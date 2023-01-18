import React from "react";
import { Link } from "react-router-dom";
import { NumberCheck } from "../NumberCheck";

const DeliveryInfo = ({ setIsShowing }) => {
  const hidePop = (e) => {
    // 하단 으로 click 을 전달하지 않는다.
    e.stopPropagation();
    setIsShowing(false);
  };
  return (
    <div className="flex justify-center">
      <div className=" bg-white ">
        <div className="flex justify-between  content-center h-10 px-2 bg-gray-100">
          <span className="p-8 pt-2  pb-6 font-semibold ">상세 메뉴</span>
          <button className="pr-3" onClick={hidePop}>
            X
          </button>
        </div>

        <img
          src="photo/KFC_2.jpg"
          alt="사진"
          className="mx-auto p-5 my-5"
        ></img>

        <div className="bg-gray-100 p-8">
          <h2 className="text-gray-900 text-xl font-semibold my-2.5">
            복마니버거팩
          </h2>
          <div className="flex justify-center">
            <ul className=" rounded-lg w-96 text-gray-900 mb-10">
              <li className="px-6 flex justify-between my-3 py-2 border-b border-gray-200 w-full rounded-t-lg">
                <span className="font-semibold block ">가격</span>
                <span> 25,700원</span>
              </li>
              <li className="px-6 py-2 border-b my-3 border-gray-200 w-full">
                <p className="font-semibold block ">메뉴</p>
                <p className="flex justify-between">
                  （징거버거＋스콜쳐버거베이직
                  <br />
                  ＋텐더6＋케이준후라이（M）
                  <br />
                  ＋콜라（M）2）
                  <span className="my-auto w-20">
                    <NumberCheck />
                  </span>
                </p>
              </li>
              <li className="px-6 py-2 border-b my-3 border-gray-200 w-full">
                <span className="font-semibold block ">추가선택</span>
                {/* <!-- Required form plugin --> */}
                <Link
                  to="https://cdn.jsdelivr.net/npm/@tailwindcss/custom-forms@0.2.1/dist/custom-forms.css"
                  rel="stylesheet"
                />

                <label className="block text-left mx-w-sm">
                  <span className="text-gray-700"></span>
                  <select
                    className="form-multiselect block w-full mt-1"
                    multiple
                  >
                    <option>
                      양상추 <span>+500</span>
                    </option>
                    <option>치킨 1개 +1000</option>
                    <option>감자튀김 +1000</option>
                    <option>콘슬로우 +1500</option>
                    <option>콜라 +1200</option>
                  </select>
                </label>
              </li>

              <li className="px-6 flex justify-between my-3 py-2 border-b border-gray-200 w-full rounded-t-lg">
                <span className="font-semibold block ">총 합계</span>
                <span> 25,700원</span>
              </li>
            </ul>
          </div>
          <div
            className="mb-2 w-full inline-block 
               bg-blue-300"
          >
            <button
              type="button"
              className=" inline-block w-1/2 px-6 py-2.5 bg-black text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              주문표에 추가
            </button>
            <button
              type="button"
              className=" inline-block w-1/2 px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              주문하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryInfo;