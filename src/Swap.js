import { useState } from "react";
import React from "react";

const Swap = () => {
  const [limit, setLimit] = useState(true);
  const [swap, setswap] = useState(true);
  const [swap2, setswap2] = useState(true);

  function swapchange() {
    setLimit(true);
  }
  function swapchange2() {
    setLimit(false);
  }
  function swapdiv() {
    if (swap == true) {
      setswap(false);
    } else setswap(true);
  }
  function swapdiv2() {
    if (swap2 == true) {
      setswap2(false);
    } else setswap2(true);
  }
  return (
    <>
      <div>
        <div class="sc-gkCoMD iwqTqy">
          <div class="sc-leehGg laTVJP">
            <div class="sc-cVJgsR bmBtIq">
              <img
                src="https://assets.spookyswap.finance/mirror_grim.png"
                loading="eager"
                draggable="false"
                alt=""
                width="280"
                className="hide"
              />
              <div class="sc-hlXxXZ hKLhFR">
                <div
                  style={{
                    position: "absolute",
                    top: "16px",
                    left: "16px",
                    display: "flex",
                    alignItems: " center",
                  }}
                >
                  {/* <label for="toggle">
                  <div class="sc-iNiQyp jdiWPe">
                    <div scale="sm" class="sc-laZMeE gvuXvo"></div>
                    <input
                      scale="sm"
                      type="checkbox"
                      id="toggle"
                      class="sc-gSYDnn dxcNBu"
                    />
                    <div scale="sm" class="sc-jgPyTC cSlOVZ">
                      <svg
                        viewBox="0 0 24 24"
                        width="24px"
                        xmlns="http://www.w3.org/2000/svg"
                        class="sc-bdnxRM eiDQZW"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M2.44769 5.63916C2.28049 6.7153 2.47733 7.82261 2.68177 8.88659C2.76056 9.05659 2.93325 9.17108 3.14607 9.24439C2.74662 10.0875 2.51179 11.0005 2.47486 11.9554H0.600265C0.285467 11.9554 0.0302735 12.2106 0.0302734 12.5254C0.0302734 12.8402 0.285467 13.0954 0.600265 13.0954H2.52558C2.5568 13.3381 2.60089 13.5776 2.65725 13.8133C2.1216 13.9046 1.5952 14.0488 1.08592 14.2445C1.03815 14.259 0.997791 14.2913 0.973178 14.3347C0.948564 14.3781 0.941585 14.4294 0.953682 14.4778C0.967357 14.5261 0.999478 14.5672 1.04312 14.592C1.08677 14.6169 1.13844 14.6237 1.187 14.6108C1.6952 14.4144 2.22124 14.2714 2.75666 14.1835C2.86943 14.5613 3.01402 14.9287 3.18792 15.2833C3.13274 15.2989 3.0778 15.3154 3.02311 15.3328C2.57624 15.4673 2.09213 15.6467 1.74025 15.9719C1.56014 16.1384 1.82917 16.4067 2.00853 16.2402C2.29808 15.9719 2.7518 15.8078 3.14851 15.6915C3.22126 15.6685 3.29449 15.6472 3.36815 15.6277C3.54173 15.9393 3.73837 16.2401 3.95625 16.5285C3.90553 16.5597 3.85519 16.5915 3.80524 16.6239C3.45408 16.8404 3.14509 17.1188 2.89325 17.4455C2.86798 17.489 2.86091 17.5407 2.87358 17.5894C2.88624 17.638 2.91763 17.6797 2.96089 17.7054C3.00472 17.7297 3.05623 17.7363 3.10475 17.7237C3.15327 17.7111 3.1951 17.6803 3.22157 17.6378C3.43512 17.3429 3.7414 17.1141 4.04463 16.9188C4.09376 16.8876 4.14323 16.8571 4.19306 16.8271C5.93261 18.9184 8.82428 20.2875 12.0972 20.2875C15.3865 20.2875 18.2919 18.9079 20.0294 16.7994C20.0899 16.8345 20.1499 16.8705 20.2094 16.9073C20.521 17.1057 20.8303 17.3397 21.0492 17.6415C21.0754 17.6841 21.1171 17.715 21.1655 17.7278C21.2139 17.7405 21.2653 17.7341 21.3091 17.7099C21.3522 17.6841 21.3835 17.6424 21.3961 17.5937C21.4088 17.5451 21.4018 17.4935 21.3768 17.4499C21.0888 17.0526 20.6965 16.7448 20.2701 16.4926C20.4818 16.2089 20.6731 15.9134 20.8421 15.6074C20.9311 15.63 21.0194 15.6552 21.1071 15.6829C21.3274 15.7456 21.5426 15.8251 21.7508 15.9208C21.9303 15.9994 22.0971 16.1044 22.2455 16.2324C22.4249 16.3981 22.6939 16.1306 22.5146 15.9634C22.165 15.6389 21.6839 15.4587 21.234 15.3242C21.1636 15.3018 21.0927 15.2809 21.0215 15.2616C21.1934 14.9076 21.3361 14.5411 21.4473 14.1641C22.0007 14.2512 22.5445 14.397 23.0693 14.5996C23.118 14.6127 23.1698 14.6061 23.2137 14.5812C23.2575 14.5563 23.2897 14.5151 23.3034 14.4666C23.3151 14.4186 23.3079 14.368 23.2835 14.325C23.2591 14.2821 23.2192 14.2501 23.1719 14.2356C22.6451 14.033 22.0999 13.8856 21.5451 13.795C21.5992 13.5652 21.6418 13.3318 21.6721 13.0954H23.3999C23.7147 13.0954 23.9699 12.8402 23.9699 12.5254C23.9699 12.2106 23.7147 11.9554 23.3999 11.9554H21.7227C21.6854 10.9895 21.4457 10.0668 21.0383 9.21601C21.2162 9.14262 21.3582 9.03606 21.4277 8.88659C21.6321 7.82261 21.8282 6.7153 21.661 5.63916C21.5044 4.19518 21.0089 3.75438 19.5209 4.1245C18.7638 4.30029 17.7659 4.74715 16.9986 5.2728C15.5626 4.56024 13.8867 4.1514 12.0972 4.1514C10.2872 4.1514 8.59383 4.57012 7.1474 5.29832C6.37552 4.76165 5.35726 4.30313 4.58858 4.1245C3.09976 3.75438 2.60501 4.19518 2.44769 5.63916ZM11.6154 15.7177C11.6154 15.8514 11.8639 15.9601 12.1702 15.9601C12.4765 15.9601 12.725 15.8514 12.725 15.7177C12.725 15.5839 12.4765 15.476 12.1702 15.476C11.8639 15.476 11.6154 15.5801 11.6154 15.7177Z"
                          fill="#8C8CE3"
                        ></path>
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M17.6999 15.9453C19.5887 15.9453 21.1199 14.4142 21.1199 12.5254C21.1199 10.6366 19.5887 9.10544 17.6999 9.10544C15.8111 9.10544 14.28 10.6366 14.28 12.5254C14.28 14.4142 15.8111 15.9453 17.6999 15.9453ZM13.1753 13.0954C13.4558 15.3447 15.3746 17.0853 17.6999 17.0853C20.2183 17.0853 22.2598 15.0438 22.2598 12.5254C22.2598 10.007 20.2183 7.96545 17.6999 7.96545C15.3746 7.96545 13.4558 9.70603 13.1753 11.9554H10.8248C10.5441 9.70621 8.62538 7.96583 6.30017 7.96583C3.78179 7.96583 1.74023 10.0074 1.74023 12.5258C1.74023 15.0441 3.78179 17.0857 6.30017 17.0857C8.62564 17.0857 10.5445 15.3449 10.8249 13.0954H13.1753ZM9.72003 12.5492C9.70743 14.4272 8.18113 15.9457 6.30017 15.9457C4.41138 15.9457 2.88022 14.4145 2.88022 12.5258C2.88022 10.637 4.41138 9.10581 6.30017 9.10581C8.18113 9.10581 9.70743 10.6243 9.72003 12.5023V12.5492Z"
                          fill="#FFE600"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </label> */}
                  {/* <button class="sc-dlnjwi iCcNWx" scale="sm">
                  Expert Mode
                </button> */}
                </div>
                <div style={{ height: "44px" }}></div>
                <div class="sc-dIvrsQ eNKCFX sc-iKUVsf hKwWev">
                  <div class="sc-irqbAE fWLTtg">
                    <div width="100%" height="36px" class="sc-ksluID igOcFe">
                      <button
                        class={
                          limit
                            ? `sc-dlnjwi jTCZRr sc-fnVZcZ cdqsld`
                            : `sc-dlnjwi jTCZRr sc-hBMUJo bCNyvG`
                        }
                        id="swap-nav-link"
                        scale="sm"
                        onClick={swapchange}
                      >
                        Market
                      </button>
                      <button
                        class="sc-dlnjwi jTCZRr sc-hBMUJo bCNyvG"
                        id="limit-nav-link"
                        scale="sm"
                        className={
                          limit
                            ? `sc-dlnjwi jTCZRr sc-hBMUJo bCNyvG`
                            : `sc-dlnjwi jTCZRr sc-fnVZcZ cdqsld`
                        }
                        onClick={swapchange2}
                      >
                        Limit
                      </button>
                    </div>
                  </div>
                  {limit ? (
                    <div id="swap-page" class="sc-cTsKDU iKqGfS">
                      <div
                        class="sc-hHEiqL fmYIqW"
                        style={{ padding: "48px 0px 0px" }}
                      >
                        <div class="sc-kTCsyW fndElv">
                          {swap ? (
                            <div
                              id="swap-currency-input"
                              class="sc-fJxALz cAYWxW"
                            >
                              <div class="sc-kLwonV iBcWdL">
                                <div
                                  font-size="14px"
                                  font-weight="bold"
                                  color="textSubtle"
                                  class="sc-gtsrHT fmiRPO"
                                >
                                  From
                                </div>
                                <div class="sc-eCApnc sc-jSFjdj fAHfVX bFXzfu"></div>
                              </div>
                              <div class="sc-kOokqr gyONjj">
                                <button class="sc-hWZktu fogsAF open-currency-select-button">
                                  <span class="sc-hUhoqY hOYYZG">
                                    <img
                                      src="https://assets.spookyswap.finance/tokens/FTM.png"
                                      class="sc-kBqmDu kllNxS"
                                      style={{ marginRight: " 8px" }}
                                    />
                                    <div
                                      font-weight="bold"
                                      font-size="16px"
                                      color="text"
                                      class="sc-gtsrHT iBScky"
                                    >
                                      FTM
                                    </div>
                                    <svg
                                      viewBox="0 0 24 24"
                                      color="transparent"
                                      width="20px"
                                      xmlns="http://www.w3.org/2000/svg"
                                      class="sc-bdnxRM eiDQZW"
                                    >
                                      <path d="M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z"></path>
                                    </svg>
                                  </span>
                                </button>
                                <input
                                  class="sc-btlduw hpxmWP token-amount-input"
                                  font-size="18px"
                                  id="swap-currency-input-value"
                                  inputmode="decimal"
                                  title="Token Amount"
                                  autocomplete="off"
                                  autocorrect="off"
                                  type="text"
                                  pattern="^[0-9]*[.,]?[0-9]*$"
                                  placeholder="0.0"
                                  minlength="1"
                                  maxlength="79"
                                  spellcheck="false"
                                  value=""
                                />
                              </div>
                              <div class="sc-cSiAOC zMGpP">
                                <div class="sc-kLwonV iBcWdL">
                                  <div
                                    font-size="14px"
                                    color="textSubtle"
                                    class="sc-gtsrHT bfDXew"
                                  >
                                    Balance
                                  </div>
                                  <div
                                    font-size="14px"
                                    color="textSubtle"
                                    class="sc-gtsrHT bfDXew"
                                  ></div>
                                </div>
                              </div>
                            </div>
                          ) : (
                            <div
                              id="swap-currency-output"
                              class="sc-fJxALz cAYWxW"
                            >
                              <div class="sc-kLwonV iBcWdL">
                                <div
                                  font-size="14px"
                                  font-weight="bold"
                                  color="textSubtle"
                                  class="sc-gtsrHT fmiRPO"
                                >
                                  To
                                </div>
                                <div class="sc-eCApnc sc-jSFjdj fAHfVX bFXzfu"></div>
                              </div>
                              <div class="sc-kOokqr gyONjj">
                                <button class="sc-hWZktu fogsAF open-currency-select-button">
                                  <span class="sc-hUhoqY hOYYZG">
                                    <img
                                      class="sc-ezjrSx gapchu"
                                      alt="BOO logo"
                                      src="https://assets.spookyswap.finance/tokens/BOO.png"
                                      style={{ marginRight: " 8px" }}
                                    />
                                    <div
                                      font-weight="bold"
                                      font-size="16px"
                                      color="text"
                                      class="sc-gtsrHT iBScky"
                                    >
                                      BOO
                                    </div>
                                    <svg
                                      viewBox="0 0 24 24"
                                      color="transparent"
                                      width="20px"
                                      xmlns="http://www.w3.org/2000/svg"
                                      class="sc-bdnxRM eiDQZW"
                                    >
                                      <path d="M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z"></path>
                                    </svg>
                                  </span>
                                </button>
                                <input
                                  class="sc-btlduw hpxmWP token-amount-input"
                                  font-size="18px"
                                  id="swap-currency-output-value"
                                  inputmode="decimal"
                                  title="Token Amount"
                                  autocomplete="off"
                                  autocorrect="off"
                                  type="text"
                                  pattern="^[0-9]*[.,]?[0-9]*$"
                                  placeholder="0.0"
                                  minlength="1"
                                  maxlength="79"
                                  spellcheck="false"
                                  value=""
                                />
                              </div>
                              <div class="sc-cSiAOC zMGpP">
                                <div class="sc-kLwonV iBcWdL">
                                  <div
                                    font-size="14px"
                                    color="textSubtle"
                                    class="sc-gtsrHT bfDXew"
                                  >
                                    Balance{" "}
                                  </div>
                                  <div
                                    font-size="14px"
                                    color="textSubtle"
                                    class="sc-gtsrHT bfDXew"
                                  ></div>
                                </div>
                              </div>
                            </div>
                          )}

                          <div class="sc-kTCsyW GkEIA">
                            <div
                              class="sc-dvUynV sc-ellfGf sc-cwiweh eSBqst fbUNEw fLEsav"
                              style={{ padding: " 0px 1rem" }}
                            >
                              <button
                                class="sc-dlnjwi kpeGno sc-hKFxyN sc-ezHeEz HOGsV HWPCa"
                                scale="sm"
                                style={{ borderRadius: "50%" }}
                                onClick={swapdiv}
                              >
                                <svg
                                  viewBox="0 0 24 24"
                                  color="primary"
                                  width="24px"
                                  scale="sm"
                                  xmlns="http://www.w3.org/2000/svg"
                                  class="sc-bdnxRM jfzODj"
                                >
                                  <path d="M11 5V16.17L6.11997 11.29C5.72997 10.9 5.08997 10.9 4.69997 11.29C4.30997 11.68 4.30997 12.31 4.69997 12.7L11.29 19.29C11.68 19.68 12.31 19.68 12.7 19.29L19.29 12.7C19.68 12.31 19.68 11.68 19.29 11.29C18.9 10.9 18.27 10.9 17.88 11.29L13 16.17V5C13 4.45 12.55 4 12 4C11.45 4 11 4.45 11 5Z"></path>
                                </svg>
                              </button>
                            </div>
                          </div>
                          {swap ? (
                            <div
                              id="swap-currency-output"
                              class="sc-fJxALz cAYWxW"
                            >
                              <div class="sc-kLwonV iBcWdL">
                                <div
                                  font-size="14px"
                                  font-weight="bold"
                                  color="textSubtle"
                                  class="sc-gtsrHT fmiRPO"
                                >
                                  To
                                </div>
                                <div class="sc-eCApnc sc-jSFjdj fAHfVX bFXzfu"></div>
                              </div>
                              <div class="sc-kOokqr gyONjj">
                                <button class="sc-hWZktu fogsAF open-currency-select-button">
                                  <span class="sc-hUhoqY hOYYZG">
                                    <img
                                      class="sc-ezjrSx gapchu"
                                      alt="BOO logo"
                                      src="https://assets.spookyswap.finance/tokens/BOO.png"
                                      style={{ marginRight: " 8px" }}
                                    />
                                    <div
                                      font-weight="bold"
                                      font-size="16px"
                                      color="text"
                                      class="sc-gtsrHT iBScky"
                                    >
                                      BOO
                                    </div>
                                    <svg
                                      viewBox="0 0 24 24"
                                      color="transparent"
                                      width="20px"
                                      xmlns="http://www.w3.org/2000/svg"
                                      class="sc-bdnxRM eiDQZW"
                                    >
                                      <path d="M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z"></path>
                                    </svg>
                                  </span>
                                </button>
                                <input
                                  class="sc-btlduw hpxmWP token-amount-input"
                                  font-size="18px"
                                  id="swap-currency-output-value"
                                  inputmode="decimal"
                                  title="Token Amount"
                                  autocomplete="off"
                                  autocorrect="off"
                                  type="text"
                                  pattern="^[0-9]*[.,]?[0-9]*$"
                                  placeholder="0.0"
                                  minlength="1"
                                  maxlength="79"
                                  spellcheck="false"
                                  value=""
                                />
                              </div>
                              <div class="sc-cSiAOC zMGpP">
                                <div class="sc-kLwonV iBcWdL">
                                  <div
                                    font-size="14px"
                                    color="textSubtle"
                                    class="sc-gtsrHT bfDXew"
                                  >
                                    Balance{" "}
                                  </div>
                                  <div
                                    font-size="14px"
                                    color="textSubtle"
                                    class="sc-gtsrHT bfDXew"
                                  ></div>
                                </div>
                              </div>
                            </div>
                          ) : (
                            <div
                              id="swap-currency-input"
                              class="sc-fJxALz cAYWxW"
                            >
                              <div class="sc-kLwonV iBcWdL">
                                <div
                                  font-size="14px"
                                  font-weight="bold"
                                  color="textSubtle"
                                  class="sc-gtsrHT fmiRPO"
                                >
                                  From
                                </div>
                                <div class="sc-eCApnc sc-jSFjdj fAHfVX bFXzfu"></div>
                              </div>
                              <div class="sc-kOokqr gyONjj">
                                <button class="sc-hWZktu fogsAF open-currency-select-button">
                                  <span class="sc-hUhoqY hOYYZG">
                                    <img
                                      src="https://assets.spookyswap.finance/tokens/FTM.png"
                                      class="sc-kBqmDu kllNxS"
                                      style={{ marginRight: " 8px" }}
                                    />
                                    <div
                                      font-weight="bold"
                                      font-size="16px"
                                      color="text"
                                      class="sc-gtsrHT iBScky"
                                    >
                                      FTM
                                    </div>
                                    <svg
                                      viewBox="0 0 24 24"
                                      color="transparent"
                                      width="20px"
                                      xmlns="http://www.w3.org/2000/svg"
                                      class="sc-bdnxRM eiDQZW"
                                    >
                                      <path d="M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z"></path>
                                    </svg>
                                  </span>
                                </button>
                                <input
                                  class="sc-btlduw hpxmWP token-amount-input"
                                  font-size="18px"
                                  id="swap-currency-input-value"
                                  inputmode="decimal"
                                  title="Token Amount"
                                  autocomplete="off"
                                  autocorrect="off"
                                  type="text"
                                  pattern="^[0-9]*[.,]?[0-9]*$"
                                  placeholder="0.0"
                                  minlength="1"
                                  maxlength="79"
                                  spellcheck="false"
                                  value=""
                                />
                              </div>
                              <div class="sc-cSiAOC zMGpP">
                                <div class="sc-kLwonV iBcWdL">
                                  <div
                                    font-size="14px"
                                    color="textSubtle"
                                    class="sc-gtsrHT bfDXew"
                                  >
                                    Balance
                                  </div>
                                  <div
                                    font-size="14px"
                                    color="textSubtle"
                                    class="sc-gtsrHT bfDXew"
                                  ></div>
                                </div>
                              </div>
                            </div>
                          )}

                          <div class="sc-ciOKUB iDa-dts">
                            <div class="sc-kTCsyW fkRznj">
                              <div class="sc-dvUynV sc-ellfGf sc-kizEQm eSBqst fbUNEw irzWzB">
                                <div
                                  class="modal fade"
                                  id="exampleModal"
                                  tabindex="-1"
                                  role="dialog"
                                  aria-labelledby="exampleModalLabel"
                                  aria-hidden="true"
                                >
                                  <div class="modal-dialog" role="document">
                                    <div
                                      class="modal-content sc-eJocfa hKqhIe "
                                      style={{
                                        width: " 443.719px ",
                                        height: "614px ",
                                        fontFamily: "RedHatDisplay, sans-serif",
                                        display: "block",
                                      }}
                                    >
                                      <div class="sc-oeezt jJYKvQ ">
                                        <div class="sc-lbVvki ghCdOs"></div>
                                        <div class="sc-hhIiOg iwisNA">
                                          <h2
                                            font-size="21px"
                                            color="text"
                                            style={{
                                              fontFamily:
                                                "RedHatDisplay, sans-serif",
                                            }}
                                            class="sc-gtsrHT sc-iJCRrE fcdEM bpbXLo"
                                          >
                                            Settings
                                          </h2>
                                        </div>
                                        <button
                                          type="button"
                                          class="close sc-dlnjwi ldYokK sc-hKFxyN sc-eirqVv HOGsP dSzotL"
                                          data-dismiss="modal"
                                          aria-label="Close"
                                        >
                                          <svg
                                            viewBox="0 0 24 24"
                                            color="text"
                                            width="24px"
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="sc-bdnxRM jQYbRa"
                                          >
                                            <path d="M18.3 5.70997C17.91 5.31997 17.28 5.31997 16.89 5.70997L12 10.59L7.10997 5.69997C6.71997 5.30997 6.08997 5.30997 5.69997 5.69997C5.30997 6.08997 5.30997 6.71997 5.69997 7.10997L10.59 12L5.69997 16.89C5.30997 17.28 5.30997 17.91 5.69997 18.3C6.08997 18.69 6.71997 18.69 7.10997 18.3L12 13.41L16.89 18.3C17.28 18.69 17.91 18.69 18.3 18.3C18.69 17.91 18.69 17.28 18.3 16.89L13.41 12L18.3 7.10997C18.68 6.72997 18.68 6.08997 18.3 5.70997Z"></path>
                                          </svg>
                                        </button>
                                      </div>
                                      <div class="sc-eCApnc sc-jSFjdj jaBVpz cupDjO">
                                        <div class="sc-eCApnc sc-jSFjdj sc-eiQWpL fAHfVX ffLIzW bIdCVa">
                                          <div class="sc-eCApnc sc-jSFjdj cWORMy cupDjO">
                                            <div
                                              font-size="12px"
                                              color="textSubtle"
                                              class="sc-gtsrHT bGGNZA"
                                            >
                                              GENERAL
                                            </div>
                                            <div
                                              width="100%"
                                              class="sc-eCApnc sc-jSFjdj gJMWyS kaSAqm"
                                            >
                                              <div
                                                color="textSubtle"
                                                class="sc-gtsrHT bjUeHV"
                                              >
                                                Theme
                                              </div>
                                              <button
                                                class="sc-dlnjwi ldYokK"
                                                scale="sm"
                                              >
                                                <div class="sc-eCApnc sc-jSFjdj fAHfVX YVAOO">
                                                  <svg
                                                    viewBox="0 0 24 24"
                                                    color="text"
                                                    width="24px"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    class="sc-bdnxRM jQYbRa"
                                                  >
                                                    <path
                                                      fill-rule="evenodd"
                                                      clip-rule="evenodd"
                                                      d="M12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8ZM6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12Z"
                                                    ></path>
                                                    <path
                                                      fill-rule="evenodd"
                                                      clip-rule="evenodd"
                                                      d="M12 0C12.5523 0 13 0.447715 13 1V3C13 3.55228 12.5523 4 12 4C11.4477 4 11 3.55228 11 3V1C11 0.447715 11.4477 0 12 0Z"
                                                    ></path>
                                                    <path
                                                      fill-rule="evenodd"
                                                      clip-rule="evenodd"
                                                      d="M12 20C12.5523 20 13 20.4477 13 21V23C13 23.5523 12.5523 24 12 24C11.4477 24 11 23.5523 11 23V21C11 20.4477 11.4477 20 12 20Z"
                                                    ></path>
                                                    <path
                                                      fill-rule="evenodd"
                                                      clip-rule="evenodd"
                                                      d="M3.51289 3.51289C3.90342 3.12237 4.53658 3.12237 4.92711 3.51289L6.34711 4.93289C6.73763 5.32342 6.73763 5.95658 6.34711 6.34711C5.95658 6.73763 5.32342 6.73763 4.93289 6.34711L3.51289 4.92711C3.12237 4.53658 3.12237 3.90342 3.51289 3.51289Z"
                                                    ></path>
                                                    <path
                                                      fill-rule="evenodd"
                                                      clip-rule="evenodd"
                                                      d="M17.6529 17.6529C18.0434 17.2624 18.6766 17.2624 19.0671 17.6529L20.4871 19.0729C20.8776 19.4634 20.8776 20.0966 20.4871 20.4871C20.0966 20.8776 19.4634 20.8776 19.0729 20.4871L17.6529 19.0671C17.2624 18.6766 17.2624 18.0434 17.6529 17.6529Z"
                                                    ></path>
                                                    <path
                                                      fill-rule="evenodd"
                                                      clip-rule="evenodd"
                                                      d="M0 12C0 11.4477 0.447715 11 1 11H3C3.55228 11 4 11.4477 4 12C4 12.5523 3.55228 13 3 13H1C0.447715 13 0 12.5523 0 12Z"
                                                    ></path>
                                                    <path
                                                      fill-rule="evenodd"
                                                      clip-rule="evenodd"
                                                      d="M20 12C20 11.4477 20.4477 11 21 11H23C23.5523 11 24 11.4477 24 12C24 12.5523 23.5523 13 23 13H21C20.4477 13 20 12.5523 20 12Z"
                                                    ></path>
                                                    <path
                                                      fill-rule="evenodd"
                                                      clip-rule="evenodd"
                                                      d="M6.34711 17.6529C6.73763 18.0434 6.73763 18.6766 6.34711 19.0671L4.92711 20.4871C4.53658 20.8776 3.90342 20.8776 3.51289 20.4871C3.12237 20.0966 3.12237 19.4634 3.51289 19.0729L4.93289 17.6529C5.32342 17.2624 5.95658 17.2624 6.34711 17.6529Z"
                                                    ></path>
                                                    <path
                                                      fill-rule="evenodd"
                                                      clip-rule="evenodd"
                                                      d="M20.4871 3.51289C20.8776 3.90342 20.8776 4.53658 20.4871 4.92711L19.0671 6.34711C18.6766 6.73763 18.0434 6.73763 17.6529 6.34711C17.2624 5.95658 17.2624 5.32342 17.6529 4.93289L19.0729 3.51289C19.4634 3.12237 20.0966 3.12237 20.4871 3.51289Z"
                                                    ></path>
                                                  </svg>
                                                  <div
                                                    color="textDisabled"
                                                    class="sc-gtsrHT eRcidN"
                                                  >
                                                    /
                                                  </div>
                                                  <svg
                                                    viewBox="0 0 24 24"
                                                    color="textDisabled"
                                                    width="24px"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    class="sc-bdnxRM hzXjMZ"
                                                  >
                                                    <path
                                                      fill-rule="evenodd"
                                                      clip-rule="evenodd"
                                                      d="M13 9C13 7.02543 13.8205 5.18477 15.2398 3.86765L16.7174 2.49647L14.7317 2.14956C14.1634 2.05029 13.5847 2 13 2C7.47715 2 3 6.47715 3 12C3 17.5228 7.47715 22 13 22C16.3854 22 19.4843 20.3038 21.3266 17.5396L22.4432 15.8643L20.4336 15.9868C20.2898 15.9956 20.1452 16 20 16C16.134 16 13 12.866 13 9ZM13 20C8.58172 20 5 16.4183 5 12C5 7.74791 8.31735 4.27062 12.5051 4.01506C11.5367 5.46848 11 7.19184 11 9C11 13.439 14.2137 17.1274 18.4414 17.8655C16.9878 19.2153 15.061 20 13 20Z"
                                                    ></path>
                                                  </svg>
                                                </div>
                                              </button>
                                            </div>
                                            <div class="sc-eCApnc sc-jSFjdj KdUrR ijVoWa">
                                              <div class="sc-eCApnc sc-jSFjdj fAHfVX YVAOO">
                                                <div
                                                  color="textSubtle"
                                                  class="sc-gtsrHT bjUeHV"
                                                >
                                                  Enable Art
                                                </div>
                                                <span
                                                  style={{ marginLeft: "4px" }}
                                                >
                                                  <div class="sc-dksuTV zPuL">
                                                    <div class="sc-bShgHC dxlLEx">
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="16"
                                                        height="16"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                      >
                                                        <circle
                                                          cx="12"
                                                          cy="12"
                                                          r="10"
                                                        ></circle>
                                                        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                                                        <line
                                                          x1="12"
                                                          y1="17"
                                                          x2="12.01"
                                                          y2="17"
                                                        ></line>
                                                      </svg>
                                                    </div>
                                                  </div>
                                                </span>
                                              </div>
                                              <label for="toggle">
                                                <div class="sc-iNiQyp jdiWPe">
                                                  <div
                                                    scale="sm"
                                                    class="sc-laZMeE jYQoRn"
                                                  ></div>
                                                  <input
                                                    scale="sm"
                                                    type="checkbox"
                                                    id="toggle"
                                                    class="sc-gSYDnn dxcNBu"
                                                    checked=""
                                                  />
                                                  <div
                                                    scale="sm"
                                                    class="sc-jgPyTC cSlOVZ"
                                                  >
                                                    <div class="sc-jffHpj ljBBJi"></div>
                                                  </div>
                                                </div>
                                              </label>
                                            </div>
                                            <div class="sc-eCApnc sc-jSFjdj fAHfVX cupDjO">
                                              <div class="sc-eCApnc sc-jSFjdj HlVtV YVAOO">
                                                <div
                                                  color="textSubtle"
                                                  class="sc-gtsrHT bjUeHV"
                                                >
                                                  Default Transaction Speed
                                                  (GWEI)
                                                </div>
                                                <span
                                                  style={{ marginLeft: " 4px" }}
                                                >
                                                  <div class="sc-dksuTV zPuL">
                                                    <div class="sc-bShgHC dxlLEx">
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="16"
                                                        height="16"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                      >
                                                        <circle
                                                          cx="12"
                                                          cy="12"
                                                          r="10"
                                                        ></circle>
                                                        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                                                        <line
                                                          x1="12"
                                                          y1="17"
                                                          x2="12.01"
                                                          y2="17"
                                                        ></line>
                                                      </svg>
                                                    </div>
                                                  </div>
                                                </span>
                                              </div>
                                              <div class="sc-eCApnc sc-jSFjdj fAHfVX hgnmwN">
                                                <button
                                                  class="sc-dlnjwi fOwOPW"
                                                  scale="sm"
                                                >
                                                  Default
                                                </button>
                                                <button
                                                  class="sc-dlnjwi fOwOPW"
                                                  scale="sm"
                                                >
                                                  Fast 301
                                                </button>
                                                <button
                                                  class="sc-dlnjwi kBzhoU"
                                                  scale="sm"
                                                >
                                                  Instant 301
                                                </button>
                                              </div>
                                            </div>
                                          </div>
                                          <div class="sc-eCApnc sc-jSFjdj lnBJVs bXtaxr">
                                            <div
                                              font-size="12px"
                                              color="textSubtle"
                                              class="sc-gtsrHT bGGNZA"
                                            >
                                              TRADING
                                            </div>
                                            <div class="sc-iXquSf bwRbQ">
                                              <div class="sc-exqIPC leuDbu">
                                                <div
                                                  color="textSubtle"
                                                  class="sc-gtsrHT bjUeHV"
                                                >
                                                  Slippage Tolerance
                                                </div>
                                                <span
                                                  style={{ marginLeft: " 4px" }}
                                                >
                                                  <div class="sc-dksuTV zPuL">
                                                    <div class="sc-bShgHC dxlLEx">
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="16"
                                                        height="16"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                      >
                                                        <circle
                                                          cx="12"
                                                          cy="12"
                                                          r="10"
                                                        ></circle>
                                                        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                                                        <line
                                                          x1="12"
                                                          y1="17"
                                                          x2="12.01"
                                                          y2="17"
                                                        ></line>
                                                      </svg>
                                                    </div>
                                                  </div>
                                                </span>
                                              </div>
                                              <div class="sc-hKiEVl iEOpyR">
                                                <div class="sc-eCApnc sc-jSFjdj cNuNXk ffLIzW">
                                                  <div class="sc-hYIrvc fUygGX">
                                                    <button
                                                      class="sc-dlnjwi kpeGno"
                                                      scale="sm"
                                                      style={{
                                                        padding: "0px",
                                                        marginRight: "8px",
                                                      }}
                                                    >
                                                      0.1%
                                                    </button>
                                                  </div>
                                                  <div class="sc-hYIrvc fUygGX">
                                                    <button
                                                      class="sc-dlnjwi kpeGno"
                                                      scale="sm"
                                                      style={{
                                                        padding: "0px",
                                                        marginRight: "8px",
                                                      }}
                                                    >
                                                      0.5%
                                                    </button>
                                                  </div>
                                                  <div class="sc-hYIrvc fUygGX">
                                                    <button
                                                      class="sc-dlnjwi kpeGno"
                                                      scale="sm"
                                                      style={{
                                                        padding: "0px",
                                                        marginRight: "8px",
                                                      }}
                                                    >
                                                      1%
                                                    </button>
                                                  </div>
                                                </div>
                                                <div class="sc-eCApnc sc-jSFjdj fAHfVX ewgxrs">
                                                  <div
                                                    style={{
                                                      width: "40%",
                                                      marginRight: "4px",
                                                    }}
                                                  >
                                                    <input
                                                      type="number"
                                                      scale="md"
                                                      step="0.1"
                                                      min="0.1"
                                                      placeholder="0"
                                                      class="sc-kEqXSa cHKIhJ"
                                                      value="0.8"
                                                    />
                                                  </div>
                                                  <div
                                                    font-size="16px"
                                                    color="textSubtle"
                                                    class="sc-gtsrHT kwmAJC"
                                                  >
                                                    %
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div class="sc-eCApnc sc-jSFjdj KdUrR ijVoWa">
                                            <div class="sc-eCApnc sc-jSFjdj fAHfVX YVAOO">
                                              <div
                                                color="textSubtle"
                                                class="sc-gtsrHT bjUeHV"
                                              >
                                                Expert Mode
                                              </div>
                                              <span
                                                style={{ marginLeft: " 4px" }}
                                              >
                                                <div class="sc-dksuTV zPuL">
                                                  <div class="sc-bShgHC dxlLEx">
                                                    <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      width="16"
                                                      height="16"
                                                      viewBox="0 0 24 24"
                                                      fill="none"
                                                      stroke="currentColor"
                                                      stroke-width="2"
                                                      stroke-linecap="round"
                                                      stroke-linejoin="round"
                                                    >
                                                      <circle
                                                        cx="12"
                                                        cy="12"
                                                        r="10"
                                                      ></circle>
                                                      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                                                      <line
                                                        x1="12"
                                                        y1="17"
                                                        x2="12.01"
                                                        y2="17"
                                                      ></line>
                                                    </svg>
                                                  </div>
                                                </div>
                                              </span>
                                            </div>
                                            <label for="toggle">
                                              <div class="sc-iNiQyp jdiWPe">
                                                <div
                                                  scale="sm"
                                                  class="sc-laZMeE hqUnEb"
                                                ></div>
                                                <input
                                                  scale="sm"
                                                  id="toggle"
                                                  type="checkbox"
                                                  class="sc-gSYDnn dxcNBu"
                                                />
                                                <div
                                                  scale="sm"
                                                  class="sc-jgPyTC cSlOVZ"
                                                >
                                                  <div class="sc-jffHpj hGkzwt"></div>
                                                </div>
                                              </div>
                                            </label>
                                          </div>
                                          <div class="sc-eCApnc sc-jSFjdj KdUrR ijVoWa">
                                            <div class="sc-eCApnc sc-jSFjdj fAHfVX YVAOO">
                                              <div
                                                color="textSubtle"
                                                class="sc-gtsrHT bjUeHV"
                                              >
                                                Enable Multihops
                                              </div>
                                              <span
                                                style={{ marginLeft: " 4px" }}
                                              >
                                                <div class="sc-dksuTV zPuL">
                                                  <div class="sc-bShgHC dxlLEx">
                                                    <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      width="16"
                                                      height="16"
                                                      viewBox="0 0 24 24"
                                                      fill="none"
                                                      stroke="currentColor"
                                                      stroke-width="2"
                                                      stroke-linecap="round"
                                                      stroke-linejoin="round"
                                                    >
                                                      <circle
                                                        cx="12"
                                                        cy="12"
                                                        r="10"
                                                      ></circle>
                                                      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                                                      <line
                                                        x1="12"
                                                        y1="17"
                                                        x2="12.01"
                                                        y2="17"
                                                      ></line>
                                                    </svg>
                                                  </div>
                                                </div>
                                              </span>
                                            </div>
                                            <label for="toggle">
                                              <div class="sc-iNiQyp jdiWPe">
                                                <div
                                                  scale="sm"
                                                  class="sc-laZMeE jYQoRn"
                                                ></div>
                                                <input
                                                  scale="sm"
                                                  id="toggle"
                                                  type="checkbox"
                                                  class="sc-gSYDnn dxcNBu"
                                                  checked=""
                                                />
                                                <div
                                                  scale="sm"
                                                  class="sc-jgPyTC cSlOVZ"
                                                >
                                                  <div class="sc-jffHpj ljBBJi"></div>
                                                </div>
                                              </div>
                                            </label>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <button
                                  class="sc-dlnjwi jIhvLR"
                                  height="14px"
                                  scale="sm"
                                  data-toggle="modal"
                                  data-target="#exampleModal"
                                >
                                  Slippage
                                  <svg
                                    viewBox="0 0 16 16"
                                    height="14px"
                                    width="20px"
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="sc-bdnxRM cjxNKv"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M13.806 3.754c.26.26.26.68 0 .94l-1.22 1.22-2.5-2.5 1.22-1.22a.664.664 0 01.94 0l1.56 1.56zM1.999 13.668V11.64c0-.093.033-.173.1-.24l7.273-7.273 2.5 2.5-7.28 7.273a.313.313 0 01-.233.1H2.332A.33.33 0 012 13.668z"
                                    ></path>
                                  </svg>
                                </button>
                                <div
                                  font-size="14px"
                                  font-weight="700"
                                  color="primary"
                                  class="sc-gtsrHT hontUl"
                                >
                                  1.3%
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="sc-jdXKxY hLOQZw"></div>
                      </div>
                    </div>
                  ) : (
                    <div
                      class="sc-hHEiqL fmYIqW"
                      style={{ padding: "48px 0px 0px" }}
                    >
                      <div class="sc-kTCsyW fndElv">
                        {swap2 ? (
                          <div
                            id="limit-currency-input"
                            class="sc-fJxALz cAYWxW"
                          >
                            <div class="sc-kLwonV iBcWdL">
                              <div
                                font-size="14px"
                                font-weight="bold"
                                color="textSubtle"
                                class="sc-gtsrHT fmiRPO"
                              >
                                From
                              </div>
                              <div class="sc-eCApnc sc-jSFjdj fAHfVX bFXzfu"></div>
                            </div>
                            <div class="sc-kOokqr gyONjj">
                              <button class="sc-hWZktu fogsAF open-currency-select-button">
                                <span class="sc-hUhoqY hOYYZG">
                                  <img
                                    src="https://assets.spookyswap.finance/tokens/FTM.png"
                                    class="sc-kBqmDu kllNxS"
                                    style={{ marginRight: "8px" }}
                                  />
                                  <div
                                    font-weight="bold"
                                    font-size="16px"
                                    color="text"
                                    class="sc-gtsrHT iBScky"
                                  >
                                    FTM
                                  </div>
                                  <svg
                                    viewBox="0 0 24 24"
                                    color="transparent"
                                    width="20px"
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="sc-bdnxRM eiDQZW"
                                  >
                                    <path d="M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z"></path>
                                  </svg>
                                </span>
                              </button>
                              <input
                                class="sc-btlduw hpxmWP token-amount-input"
                                font-size="18px"
                                id="limit-currency-input-value"
                                inputmode="decimal"
                                title="Token Amount"
                                autocomplete="off"
                                autocorrect="off"
                                type="text"
                                pattern="^[0-9]*[.,]?[0-9]*$"
                                placeholder="0.0"
                                minlength="1"
                                maxlength="79"
                                spellcheck="false"
                                value=""
                              />
                            </div>
                            <div class="sc-cSiAOC zMGpP">
                              <div class="sc-kLwonV iBcWdL">
                                <div
                                  font-size="14px"
                                  color="textSubtle"
                                  class="sc-gtsrHT bfDXew"
                                >
                                  Balance{" "}
                                </div>
                                <div
                                  font-size="14px"
                                  color="textSubtle"
                                  class="sc-gtsrHT bfDXew"
                                ></div>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div
                            id="limit-currency-output"
                            class="sc-fJxALz cAYWxW"
                          >
                            <div class="sc-kLwonV iBcWdL">
                              <div
                                font-size="14px"
                                font-weight="bold"
                                color="textSubtle"
                                class="sc-gtsrHT fmiRPO"
                              >
                                To
                              </div>
                              <div class="sc-eCApnc sc-jSFjdj fAHfVX bFXzfu"></div>
                            </div>
                            <div class="sc-kOokqr gyONjj">
                              <button class="sc-hWZktu fogsAF open-currency-select-button">
                                <span class="sc-hUhoqY hOYYZG">
                                  <img
                                    class="sc-ezjrSx gapchu"
                                    alt="BOO logo"
                                    src="https://assets.spookyswap.finance/tokens/BOO.png"
                                    style={{ marginRight: "8px" }}
                                  />
                                  <div
                                    font-weight="bold"
                                    font-size="16px"
                                    color="text"
                                    class="sc-gtsrHT iBScky"
                                  >
                                    BOO
                                  </div>
                                  <svg
                                    viewBox="0 0 24 24"
                                    color="transparent"
                                    width="20px"
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="sc-bdnxRM eiDQZW"
                                  >
                                    <path d="M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z"></path>
                                  </svg>
                                </span>
                              </button>
                              <div class="sc-lgWdIC cRRXke">
                                <div
                                  font-size="18px"
                                  color="textSubtle"
                                  class="sc-gtsrHT gBnnJE"
                                ></div>
                              </div>
                            </div>
                            <div class="sc-cSiAOC zMGpP">
                              <div class="sc-kLwonV iBcWdL">
                                <div
                                  font-size="14px"
                                  color="textSubtle"
                                  class="sc-gtsrHT bfDXew"
                                >
                                  Balance{" "}
                                </div>
                                <div
                                  font-size="14px"
                                  color="textSubtle"
                                  class="sc-gtsrHT bfDXew"
                                ></div>
                              </div>
                            </div>
                          </div>
                        )}

                        <div class="sc-kTCsyW GkEIA">
                          <div
                            class="sc-dvUynV sc-ellfGf sc-cwiweh eSBqst fbUNEw fLEsav"
                            style={{ padding: "0px 1rem" }}
                          >
                            <button
                              class="sc-dlnjwi kpeGno sc-hKFxyN sc-ezHeEz HOGsV HWPCa"
                              scale="sm"
                              style={{ borderRadius: " 50%" }}
                              onClick={swapdiv2}
                            >
                              <svg
                                viewBox="0 0 24 24"
                                color="primary"
                                width="24px"
                                xmlns="http://www.w3.org/2000/svg"
                                class="sc-bdnxRM jfzODj"
                              >
                                <path d="M11 5V16.17L6.11997 11.29C5.72997 10.9 5.08997 10.9 4.69997 11.29C4.30997 11.68 4.30997 12.31 4.69997 12.7L11.29 19.29C11.68 19.68 12.31 19.68 12.7 19.29L19.29 12.7C19.68 12.31 19.68 11.68 19.29 11.29C18.9 10.9 18.27 10.9 17.88 11.29L13 16.17V5C13 4.45 12.55 4 12 4C11.45 4 11 4.45 11 5Z"></path>
                              </svg>
                            </button>
                          </div>
                        </div>
                        {swap2 ? (
                          <div
                            id="limit-currency-output"
                            class="sc-fJxALz cAYWxW"
                          >
                            <div class="sc-kLwonV iBcWdL">
                              <div
                                font-size="14px"
                                font-weight="bold"
                                color="textSubtle"
                                class="sc-gtsrHT fmiRPO"
                              >
                                To
                              </div>
                              <div class="sc-eCApnc sc-jSFjdj fAHfVX bFXzfu"></div>
                            </div>
                            <div class="sc-kOokqr gyONjj">
                              <button class="sc-hWZktu fogsAF open-currency-select-button">
                                <span class="sc-hUhoqY hOYYZG">
                                  <img
                                    class="sc-ezjrSx gapchu"
                                    alt="BOO logo"
                                    src="https://assets.spookyswap.finance/tokens/BOO.png"
                                    style={{ marginRight: "8px" }}
                                  />
                                  <div
                                    font-weight="bold"
                                    font-size="16px"
                                    color="text"
                                    class="sc-gtsrHT iBScky"
                                  >
                                    BOO
                                  </div>
                                  <svg
                                    viewBox="0 0 24 24"
                                    color="transparent"
                                    width="20px"
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="sc-bdnxRM eiDQZW"
                                  >
                                    <path d="M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z"></path>
                                  </svg>
                                </span>
                              </button>
                              <div class="sc-lgWdIC cRRXke">
                                <div
                                  font-size="18px"
                                  color="textSubtle"
                                  class="sc-gtsrHT gBnnJE"
                                ></div>
                              </div>
                            </div>
                            <div class="sc-cSiAOC zMGpP">
                              <div class="sc-kLwonV iBcWdL">
                                <div
                                  font-size="14px"
                                  color="textSubtle"
                                  class="sc-gtsrHT bfDXew"
                                >
                                  Balance{" "}
                                </div>
                                <div
                                  font-size="14px"
                                  color="textSubtle"
                                  class="sc-gtsrHT bfDXew"
                                ></div>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div
                            id="limit-currency-input"
                            class="sc-fJxALz cAYWxW"
                          >
                            <div class="sc-kLwonV iBcWdL">
                              <div
                                font-size="14px"
                                font-weight="bold"
                                color="textSubtle"
                                class="sc-gtsrHT fmiRPO"
                              >
                                From
                              </div>
                              <div class="sc-eCApnc sc-jSFjdj fAHfVX bFXzfu"></div>
                            </div>
                            <div class="sc-kOokqr gyONjj">
                              <button class="sc-hWZktu fogsAF open-currency-select-button">
                                <span class="sc-hUhoqY hOYYZG">
                                  <img
                                    src="https://assets.spookyswap.finance/tokens/FTM.png"
                                    class="sc-kBqmDu kllNxS"
                                    style={{ marginRight: "8px" }}
                                  />
                                  <div
                                    font-weight="bold"
                                    font-size="16px"
                                    color="text"
                                    class="sc-gtsrHT iBScky"
                                  >
                                    FTM
                                  </div>
                                  <svg
                                    viewBox="0 0 24 24"
                                    color="transparent"
                                    width="20px"
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="sc-bdnxRM eiDQZW"
                                  >
                                    <path d="M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z"></path>
                                  </svg>
                                </span>
                              </button>
                              <input
                                class="sc-btlduw hpxmWP token-amount-input"
                                font-size="18px"
                                id="limit-currency-input-value"
                                inputmode="decimal"
                                title="Token Amount"
                                autocomplete="off"
                                autocorrect="off"
                                type="text"
                                pattern="^[0-9]*[.,]?[0-9]*$"
                                placeholder="0.0"
                                minlength="1"
                                maxlength="79"
                                spellcheck="false"
                                value=""
                              />
                            </div>
                            <div class="sc-cSiAOC zMGpP">
                              <div class="sc-kLwonV iBcWdL">
                                <div
                                  font-size="14px"
                                  color="textSubtle"
                                  class="sc-gtsrHT bfDXew"
                                >
                                  Balance{" "}
                                </div>
                                <div
                                  font-size="14px"
                                  color="textSubtle"
                                  class="sc-gtsrHT bfDXew"
                                ></div>
                              </div>
                            </div>
                          </div>
                        )}
                        <div id="limit-price-input" class="sc-iazTlQ iRSxue">
                          <div class="sc-lMZDC fayTik">
                            <div
                              font-size="14px"
                              font-weight="bold"
                              color="textSubtle"
                              class="sc-gtsrHT fmiRPO"
                            >
                              Limit Price
                            </div>
                          </div>
                          <div class="sc-fDUjSr emAxQA">
                            <span class="sc-cdlubJ kMsWyy"></span>
                            <input
                              class="sc-btlduw hpxmWP limit-amount-input"
                              font-size="18px"
                              id="limit-input"
                              inputmode="decimal"
                              title="Token Amount"
                              autocomplete="off"
                              autocorrect="off"
                              type="text"
                              pattern="^[0-9]*[.,]?[0-9]*$"
                              placeholder="0.0"
                              minlength="1"
                              maxlength="79"
                              spellcheck="false"
                              value=""
                            />
                          </div>
                          <div class="sc-eSRwjH cVAmNK">
                            <div class="sc-fDUjSr emAxQA">
                              <span class="sc-cdlubJ kMsWyy">
                                <div
                                  color="textSubtle"
                                  class="sc-gtsrHT bjUeHV"
                                >
                                  Above Market
                                </div>
                                <span style={{ marginLeft: "4px" }}>
                                  <div class="sc-dksuTV zPuL">
                                    <div class="sc-bShgHC dxlLEx">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                      >
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                                        <line
                                          x1="12"
                                          y1="17"
                                          x2="12.01"
                                          y2="17"
                                        ></line>
                                      </svg>
                                    </div>
                                  </div>
                                </span>
                              </span>
                              <input
                                class="sc-btlduw hpxmWP percent-amount-input"
                                font-size="18px"
                                id="limit-percent-input"
                                inputmode="decimal"
                                title="Token Amount"
                                autocomplete="off"
                                autocorrect="off"
                                type="text"
                                pattern="^[0-9]*[.,]?[0-9]*$"
                                placeholder="0.0"
                                minlength="1"
                                maxlength="79"
                                spellcheck="false"
                                value=""
                              />
                              <div
                                color="textSubtle"
                                font-size="18px"
                                class="sc-gtsrHT eBqLew"
                              />
                              %
                            </div>
                          </div>
                        </div>
                        <div class="sc-eSRwjH cVAmNK">
                          <div class="sc-dvUynV sc-ellfGf sc-kizEQm sc-kQfVtO eSBqst fbUNEw irzWzB kKNmtJ">
                            <div
                              font-size="14px"
                              color="textSubtle"
                              class="sc-gtsrHT bfDXew"
                            >
                              Market
                            </div>
                            <div
                              font-size="14px"
                              color="textSubtle"
                              class="sc-gtsrHT bfDXew"
                            >
                              {" "}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  <div class="sc-bnFVBq coSCIs">
                    <svg
                      viewBox="0 0 24 24"
                      color="primary"
                      width="20px"
                      xmlns="http://www.w3.org/2000/svg"
                      class="sc-bdnxRM jfzODj"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M13 12v2h-2v-2H9v-2h2V8h2v2h2v2h-2z"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M5 10a7 7 0 0114 0v8.575c.23.081.454.192.664.332l1.89 1.26-1.109 1.665-1.89-1.26a1 1 0 00-1.11 0l-.78.52a3 3 0 01-3.33 0l-.78-.52a1 1 0 00-1.11 0l-.78.52a3 3 0 01-3.33 0l-.78-.52a1 1 0 00-1.11 0l-1.89 1.26-1.11-1.664 1.89-1.26A3 3 0 015 18.574V10zm2 8.575a3 3 0 01.664.332l.781.521a1 1 0 001.11 0l.78-.52a3 3 0 013.33 0l.78.52a1 1 0 001.11 0l.78-.52c.21-.14.434-.252.665-.333V10a5 5 0 00-10 0v8.575z"
                      ></path>
                    </svg>
                    <button
                      class="sc-dlnjwi fTuSeA"
                      height="14px"
                      scale="sm"
                      style={{ fontSize: "14px" }}
                    >
                      Connect your wallet to Fantom Opera to start!
                    </button>
                  </div>
                  <div class="sc-dvUynV sc-ellfGf sc-gstuGz fqioLS iGMtCf tcgHY">
                    <img
                      src="https://assets.spookyswap.finance/collabs/PoweredBy_Gelato_BlackText.svg"
                      draggable="false"
                      alt=""
                      width="170px"
                    />
                  </div>
                </div>
              </div>
              <img
                src="https://assets.spookyswap.finance/mirror_ace.png"
                loading="eager"
                draggable="false"
                alt=""
                width="280"
                className="hide"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Swap;
