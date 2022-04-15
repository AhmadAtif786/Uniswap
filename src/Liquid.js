import React from "react";
import { useState } from "react";
import Swap from "./Swap";
const Liquid = () => {
  const [limit, setLimit] = useState(true);

  function swapchange() {
    setLimit(true);
  }
  function swapchange2() {
    setLimit(false);
  }
  return (
    <div>
      {" "}
      <div class="sc-gkCoMD iwqTqy">
        <div class="sc-leehGg laTVJP">
          <div class="sc-cVJgsR bmBtIq">
            <img
              src="https://assets.spookyswap.finance/LiquidityCats_Left.png"
              loading="eager"
              draggable="false"
              alt=""
              width="227"
            />
            <div class="sc-hlXxXZ hKLhFR">
              <div class="sc-gpEJdM jdQeRJ"></div>
              <div class="sc-dIvrsQ eNKCFX sc-iKUVsf hKwWev">
                <div class="sc-irqbAE fWLTtg">
                  <div width="100%" height="36px" class="sc-ksluID igOcFe">
                    <button
                      class={
                        limit
                          ? `sc-dlnjwi jTCZRr sc-fnVZcZ cdqsld`
                          : `sc-dlnjwi jTCZRr sc-hBMUJo bCNyvG`
                      }
                      id="limit-nav-link"
                      to="/add"
                      scale="sm"
                      onClick={swapchange}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        width="20px"
                        xmlns="http://www.w3.org/2000/svg"
                        class="sc-bdnxRM hRqiCF"
                      >
                        <path d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z"></path>
                      </svg>
                      Supply
                    </button>
                    <a
                      class={
                        limit
                          ? `sc-dlnjwi jTCZRr sc-hBMUJo bCNyvG `
                          : ` sc-dlnjwi jTCZRr sc-fnVZcZ cdqsld`
                      }
                      variant="underline"
                      colorkey="textSubtle"
                      id="pool-nav-link"
                      scale="sm"
                      onClick={swapchange2}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        width="20px"
                        xmlns="http://www.w3.org/2000/svg"
                        class="sc-bdnxRM hRqiCF"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M6 2h7.618L12 5.236v3.438a7 7 0 11-6 0V2zm4 2.764V10.1A5.002 5.002 0 019 20a4.993 4.993 0 01-4-2h3v-2H4.1a5.022 5.022 0 01-.1-1h5v-2H4.416A5.009 5.009 0 018 10.1V4h2.382L10 4.764zM20 6a1 1 0 11-2 0 1 1 0 012 0zm2 0a3 3 0 11-6 0 3 3 0 016 0zm-1 10a1 1 0 100-2 1 1 0 000 2zm-2-4a1 1 0 11-2 0 1 1 0 012 0z"
                        ></path>
                      </svg>
                      My Potions
                    </a>
                  </div>
                </div>
                <div class="sc-kkmGkm CGXRw">
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
                          <line x1="12" y1="17" x2="12.01" y2="17"></line>
                        </svg>
                      </div>
                    </div>
                  </span>
                </div>
                <div class="sc-jogDgT hBPNLh"></div>
                {limit ? (
                  <>
                    <div class="sc-hHSjgo gEfhZZ">
                      <div
                        font-size="16px"
                        color="text"
                        class="sc-gtsrHT gkbSQf"
                      >
                        Supply equal value parts of two different tokens.
                      </div>
                    </div>
                    <div class="sc-juXuNZ KigMW">
                      <div class="sc-hHEiqL fmYIqW" style={{ padding: "0px" }}>
                        <div class="sc-kTCsyW iLTiaQ">
                          <div
                            id="add-liquidity-input-tokena"
                            class="sc-fJxALz cAYWxW"
                          >
                            <div class="sc-kLwonV iBcWdL">
                              <div
                                font-size="14px"
                                font-weight="bold"
                                color="textSubtle"
                                class="sc-gtsrHT fmiRPO"
                              >
                                Ingredient A
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
                                id="add-liquidity-input-tokena-value"
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
                          <div
                            id="add-liquidity-input-tokenb"
                            class="sc-fJxALz cAYWxW"
                          >
                            <div class="sc-kLwonV iBcWdL">
                              <div
                                font-size="14px"
                                font-weight="bold"
                                color="textSubtle"
                                class="sc-gtsrHT fmiRPO"
                              >
                                Ingredient B
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
                              <input
                                class="sc-btlduw hpxmWP token-amount-input"
                                font-size="18px"
                                id="add-liquidity-input-tokenb-value"
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
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
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
                )}
              </div>
            </div>
            <img
              src="https://assets.spookyswap.finance/LiquidityCats_Right.png"
              loading="eager"
              draggable="false"
              alt=""
              width="227"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Liquid;
