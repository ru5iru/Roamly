import "./personalizingform.scss";
import hiking from '../../assets/images/hiking.png';

const Personalizingform = () =>{


return(
    <section className="container">
        <div className="title">
            Tell us your travel preferences...
        </div>
        <br/><br/>
        <form action="">
            <div className="row">
                <div className="row-title">
                    What is destination of choice?<br/>
                    <input type="text" name="destination" className="form-input"/>
                </div>
            </div>
            <br/><br/>
            <div className="row">
                    <div className="row-title">
                        Select preferred activity<br/>
                    </div>
                    <div className="container-rbuttons">
                        <div className="radio-tile-group">


                            <div className="input-container">
                                <input id="camping" className="radio-button" type="radio" name="radio" />
                                <div className="radio-tile">
                                    <div className="icon bike-icon">
                                        <svg fill="#000000" height="1em" viewBox="0 0 576 512" width="24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 0h24v24H0z" fill="none"/>
                                            <path d="M269.4 6C280.5-2 295.5-2 306.6 6l224 160c7.4 5.3 12.2 13.5 13.2 22.5l32 288c1 9-1.9 18.1-8 24.9s-14.7 10.7-23.8 10.7H416L288 288V512H32c-9.1 0-17.8-3.9-23.8-10.7s-9-15.8-8-24.9l32-288c1-9 5.8-17.2 13.2-22.5L269.4 6z"/>
                                        </svg>
                                    </div>
                                    <label for="bike" className="radio-tile-label">Camping</label>
                                </div>
                            </div>


                            <div className="input-container">
                                <input id="hiking" className="radio-button" type="radio" name="radio" />
                                <div className="radio-tile">
                                    <div className="icon bike-icon">
                                        <svg fill="#000000" height="1em" viewBox="0 0 384 512" width="24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 0h24v24H0z" fill="none"/>
                                            <path d="M192 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm51.3 182.7L224.2 307l49.7 49.7c9 9 14.1 21.2 14.1 33.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V397.3l-73.9-73.9c-15.8-15.8-22.2-38.6-16.9-60.3l20.4-84c8.3-34.1 42.7-54.9 76.7-46.4c19 4.8 35.6 16.4 46.4 32.7L305.1 208H336V184c0-13.3 10.7-24 24-24s24 10.7 24 24v55.8c0 .1 0 .2 0 .2s0 .2 0 .2V488c0 13.3-10.7 24-24 24s-24-10.7-24-24V272H296.6c-16 0-31-8-39.9-21.4l-13.3-20zM81.1 471.9L117.3 334c3 4.2 6.4 8.2 10.1 11.9l41.9 41.9L142.9 488.1c-4.5 17.1-22 27.3-39.1 22.8s-27.3-22-22.8-39.1zm55.5-346L101.4 266.5c-3 12.1-14.9 19.9-27.2 17.9l-47.9-8c-14-2.3-22.9-16.3-19.2-30L31.9 155c9.5-34.8 41.1-59 77.2-59h4.2c15.6 0 27.1 14.7 23.3 29.8z"/>
                                        </svg>
                                    </div>
                                    <label for="bike" className="radio-tile-label">Hiking</label>
                                </div>
                            </div>


                            <div className="input-container">
                                <input id="surfing" className="radio-button" type="radio" name="radio" />
                                <div className="radio-tile">
                                    <div className="icon car-icon">
                                        <svg fill="#000000" height="24" viewBox="0 0 576 512" width="24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M269.5 69.9c11.1-7.9 25.9-7.9 37 0C329 85.4 356.5 96 384 96c26.9 0 55.4-10.8 77.4-26.1l0 0c11.9-8.5 28.1-7.8 39.2 1.7c14.4 11.9 32.5 21 50.6 25.2c17.2 4 27.9 21.2 23.9 38.4s-21.2 27.9-38.4 23.9c-24.5-5.7-44.9-16.5-58.2-25C449.5 149.7 417 160 384 160c-31.9 0-60.6-9.9-80.4-18.9c-5.8-2.7-11.1-5.3-15.6-7.7c-4.5 2.4-9.7 5.1-15.6 7.7c-19.8 9-48.5 18.9-80.4 18.9c-33 0-65.5-10.3-94.5-25.8c-13.4 8.4-33.7 19.3-58.2 25c-17.2 4-34.4-6.7-38.4-23.9s6.7-34.4 23.9-38.4C42.8 92.6 61 83.5 75.3 71.6c11.1-9.5 27.3-10.1 39.2-1.7l0 0C136.7 85.2 165.1 96 192 96c27.5 0 55-10.6 77.5-26.1zm37 288C329 373.4 356.5 384 384 384c26.9 0 55.4-10.8 77.4-26.1l0 0c11.9-8.5 28.1-7.8 39.2 1.7c14.4 11.9 32.5 21 50.6 25.2c17.2 4 27.9 21.2 23.9 38.4s-21.2 27.9-38.4 23.9c-24.5-5.7-44.9-16.5-58.2-25C449.5 437.7 417 448 384 448c-31.9 0-60.6-9.9-80.4-18.9c-5.8-2.7-11.1-5.3-15.6-7.7c-4.5 2.4-9.7 5.1-15.6 7.7c-19.8 9-48.5 18.9-80.4 18.9c-33 0-65.5-10.3-94.5-25.8c-13.4 8.4-33.7 19.3-58.2 25c-17.2 4-34.4-6.7-38.4-23.9s6.7-34.4 23.9-38.4c18.1-4.2 36.2-13.3 50.6-25.2c11.1-9.4 27.3-10.1 39.2-1.7l0 0C136.7 373.2 165.1 384 192 384c27.5 0 55-10.6 77.5-26.1c11.1-7.9 25.9-7.9 37 0zm0-144C329 229.4 356.5 240 384 240c26.9 0 55.4-10.8 77.4-26.1l0 0c11.9-8.5 28.1-7.8 39.2 1.7c14.4 11.9 32.5 21 50.6 25.2c17.2 4 27.9 21.2 23.9 38.4s-21.2 27.9-38.4 23.9c-24.5-5.7-44.9-16.5-58.2-25C449.5 293.7 417 304 384 304c-31.9 0-60.6-9.9-80.4-18.9c-5.8-2.7-11.1-5.3-15.6-7.7c-4.5 2.4-9.7 5.1-15.6 7.7c-19.8 9-48.5 18.9-80.4 18.9c-33 0-65.5-10.3-94.5-25.8c-13.4 8.4-33.7 19.3-58.2 25c-17.2 4-34.4-6.7-38.4-23.9s6.7-34.4 23.9-38.4c18.1-4.2 36.2-13.3 50.6-25.2c11.1-9.5 27.3-10.1 39.2-1.7l0 0C136.7 229.2 165.1 240 192 240c27.5 0 55-10.6 77.5-26.1c11.1-7.9 25.9-7.9 37 0z"/>
                                            <path d="M0 0h24v24H0z" fill="none"/>
                                        </svg>
                                    </div>
                                    <label for="drive" className="radio-tile-label">Surfing</label>
                                </div>
                            </div>

                            <div className="input-container">
                                <input id="beach" className="radio-button" type="radio" name="radio" />
                                <div className="radio-tile">
                                    <div className="icon fly-icon">
                                        <svg fill="#000000" height="24" viewBox="0 0 576 512" width="24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.18 9"/>
                                            <path d="M346.3 271.8l-60.1-21.9L214 448H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H544c17.7 0 32-14.3 32-32s-14.3-32-32-32H282.1l64.1-176.2zm121.1-.2l-3.3 9.1 67.7 24.6c18.1 6.6 38-4.2 39.6-23.4c6.5-78.5-23.9-155.5-80.8-208.5c2 8 3.2 16.3 3.4 24.8l.2 6c1.8 57-7.3 113.8-26.8 167.4zM462 99.1c-1.1-34.4-22.5-64.8-54.4-77.4c-.9-.4-1.9-.7-2.8-1.1c-33-11.7-69.8-2.4-93.1 23.8l-4 4.5C272.4 88.3 245 134.2 226.8 184l-3.3 9.1L434 269.7l3.3-9.1c18.1-49.8 26.6-102.5 24.9-155.5l-.2-6zM107.2 112.9c-11.1 15.7-2.8 36.8 15.3 43.4l71 25.8 3.3-9.1c19.5-53.6 49.1-103 87.1-145.5l4-4.5c6.2-6.9 13.1-13 20.5-18.2c-79.6 2.5-154.7 42.2-201.2 108z"/>
                                            <path d="M0 0h24v24H0z" fill="none"/>
                                        </svg>
                                    </div>
                                    <label for="fly" className="radio-tile-label">Beach</label>
                                </div>
                            </div>


                            <div className="input-container">
                                <input id="boat-riding" className="radio-button" type="radio" name="radio" />
                                <div className="radio-tile">
                                    <div className="icon bike-icon">
                                        <svg fill="#000000" height="1em" viewBox="0 0 576 512" width="24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 0h24v24H0z" fill="none"/>
                                            <path d="M256 16c0-7 4.5-13.2 11.2-15.3s13.9 .4 17.9 6.1l224 320c3.4 4.9 3.8 11.3 1.1 16.6s-8.2 8.6-14.2 8.6H272c-8.8 0-16-7.2-16-16V16zM212.1 96.5c7 1.9 11.9 8.2 11.9 15.5V336c0 8.8-7.2 16-16 16H80c-5.7 0-11-3-13.8-8s-2.9-11-.1-16l128-224c3.6-6.3 11-9.4 18-7.5zM5.7 404.3C2.8 394.1 10.5 384 21.1 384H554.9c10.6 0 18.3 10.1 15.4 20.3l-4 14.3C550.7 473.9 500.4 512 443 512H133C75.6 512 25.3 473.9 9.7 418.7l-4-14.3z"/>
                                        </svg>
                                    </div>
                                    <label for="bike" className="radio-tile-label">Boat Riding</label>
                                </div>
                            </div>


                            <div className="input-container">
                                <input id="cycling" className="radio-button" type="radio" name="radio" />
                                <div className="radio-tile">
                                    <div className="icon bike-icon">
                                        <svg fill="#000000" height="1em" viewBox="0 0 640 512" width="24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 0h24v24H0z" fill="none"/>
                                            <path d="M312 32c-13.3 0-24 10.7-24 24s10.7 24 24 24h25.7l34.6 64H222.9l-27.4-38C191 99.7 183.7 96 176 96H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h43.7l22.1 30.7-26.6 53.1c-10-2.5-20.5-3.8-31.2-3.8C57.3 224 0 281.3 0 352s57.3 128 128 128c65.3 0 119.1-48.9 127-112h49c8.5 0 16.3-4.5 20.7-11.8l84.8-143.5 21.7 40.1C402.4 276.3 384 312 384 352c0 70.7 57.3 128 128 128s128-57.3 128-128s-57.3-128-128-128c-13.5 0-26.5 2.1-38.7 6L375.4 48.8C369.8 38.4 359 32 347.2 32H312zM458.6 303.7l32.3 59.7c6.3 11.7 20.9 16 32.5 9.7s16-20.9 9.7-32.5l-32.3-59.7c3.6-.6 7.4-.9 11.2-.9c39.8 0 72 32.2 72 72s-32.2 72-72 72s-72-32.2-72-72c0-18.6 7-35.5 18.6-48.3zM133.2 368h65c-7.3 32.1-36 56-70.2 56c-39.8 0-72-32.2-72-72s32.2-72 72-72c1.7 0 3.4 .1 5.1 .2l-24.2 48.5c-9 18.1 4.1 39.4 24.3 39.4zm33.7-48l50.7-101.3 72.9 101.2-.1 .1H166.8zm90.6-128H365.9L317 274.8 257.4 192z"/>
                                        </svg>
                                    </div>
                                    <label for="bike" className="radio-tile-label">Cycling</label>
                                </div>
                            </div>


                            <div className="input-container">
                                <input id="waterfall" className="radio-button" type="radio" name="radio" />
                                <div className="radio-tile">
                                    <div className="icon car-icon">
                                        <svg fill="#000000" height="24" viewBox="0 0 576 512" width="24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M269.5 69.9c11.1-7.9 25.9-7.9 37 0C329 85.4 356.5 96 384 96c26.9 0 55.4-10.8 77.4-26.1l0 0c11.9-8.5 28.1-7.8 39.2 1.7c14.4 11.9 32.5 21 50.6 25.2c17.2 4 27.9 21.2 23.9 38.4s-21.2 27.9-38.4 23.9c-24.5-5.7-44.9-16.5-58.2-25C449.5 149.7 417 160 384 160c-31.9 0-60.6-9.9-80.4-18.9c-5.8-2.7-11.1-5.3-15.6-7.7c-4.5 2.4-9.7 5.1-15.6 7.7c-19.8 9-48.5 18.9-80.4 18.9c-33 0-65.5-10.3-94.5-25.8c-13.4 8.4-33.7 19.3-58.2 25c-17.2 4-34.4-6.7-38.4-23.9s6.7-34.4 23.9-38.4C42.8 92.6 61 83.5 75.3 71.6c11.1-9.5 27.3-10.1 39.2-1.7l0 0C136.7 85.2 165.1 96 192 96c27.5 0 55-10.6 77.5-26.1zm37 288C329 373.4 356.5 384 384 384c26.9 0 55.4-10.8 77.4-26.1l0 0c11.9-8.5 28.1-7.8 39.2 1.7c14.4 11.9 32.5 21 50.6 25.2c17.2 4 27.9 21.2 23.9 38.4s-21.2 27.9-38.4 23.9c-24.5-5.7-44.9-16.5-58.2-25C449.5 437.7 417 448 384 448c-31.9 0-60.6-9.9-80.4-18.9c-5.8-2.7-11.1-5.3-15.6-7.7c-4.5 2.4-9.7 5.1-15.6 7.7c-19.8 9-48.5 18.9-80.4 18.9c-33 0-65.5-10.3-94.5-25.8c-13.4 8.4-33.7 19.3-58.2 25c-17.2 4-34.4-6.7-38.4-23.9s6.7-34.4 23.9-38.4c18.1-4.2 36.2-13.3 50.6-25.2c11.1-9.4 27.3-10.1 39.2-1.7l0 0C136.7 373.2 165.1 384 192 384c27.5 0 55-10.6 77.5-26.1c11.1-7.9 25.9-7.9 37 0zm0-144C329 229.4 356.5 240 384 240c26.9 0 55.4-10.8 77.4-26.1l0 0c11.9-8.5 28.1-7.8 39.2 1.7c14.4 11.9 32.5 21 50.6 25.2c17.2 4 27.9 21.2 23.9 38.4s-21.2 27.9-38.4 23.9c-24.5-5.7-44.9-16.5-58.2-25C449.5 293.7 417 304 384 304c-31.9 0-60.6-9.9-80.4-18.9c-5.8-2.7-11.1-5.3-15.6-7.7c-4.5 2.4-9.7 5.1-15.6 7.7c-19.8 9-48.5 18.9-80.4 18.9c-33 0-65.5-10.3-94.5-25.8c-13.4 8.4-33.7 19.3-58.2 25c-17.2 4-34.4-6.7-38.4-23.9s6.7-34.4 23.9-38.4c18.1-4.2 36.2-13.3 50.6-25.2c11.1-9.5 27.3-10.1 39.2-1.7l0 0C136.7 229.2 165.1 240 192 240c27.5 0 55-10.6 77.5-26.1c11.1-7.9 25.9-7.9 37 0z"/>
                                            <path d="M0 0h24v24H0z" fill="none"/>
                                        </svg>
                                    </div>
                                    <label for="drive" className="radio-tile-label">Waterfalls</label>
                                </div>
                            </div>

                            <div className="input-container">
                                <input id="religious" className="radio-button" type="radio" name="radio" />
                                <div className="radio-tile">
                                    <div className="icon fly-icon">
                                        <svg fill="#000000" height="24" viewBox="0 0 512 512" width="24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.18 9"/>
                                            <path d="M120 0c13.3 0 24 10.7 24 24v8h40V24c0-13.3 10.7-24 24-24s24 10.7 24 24v8h48V24c0-13.3 10.7-24 24-24s24 10.7 24 24v8h40V24c0-13.3 10.7-24 24-24s24 10.7 24 24v8V64v64c17.7 0 32 14.3 32 32v64c17.7 0 32 14.3 32 32v96c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32H416V352H384V224H352V128H320v96h32V352h32V512H304V464c0-26.5-21.5-48-48-48s-48 21.5-48 48v48H128V352h32V224h32V128H160v96H128V352H96V512H32c-17.7 0-32-14.3-32-32V384c0-17.7 14.3-32 32-32V256c0-17.7 14.3-32 32-32V160c0-17.7 14.3-32 32-32V64 32 24c0-13.3 10.7-24 24-24zM256 272c-17.7 0-32 14.3-32 32v48h64V304c0-17.7-14.3-32-32-32zm-32-80v32h64V192c0-17.7-14.3-32-32-32s-32 14.3-32 32z"/>
                                            <path d="M0 0h24v24H0z" fill="none"/>
                                        </svg>
                                    </div>
                                    <label for="fly" className="radio-tile-label">Religious</label>
                                </div>
                            </div>


                            <div className="input-container">
                                <input id="whale" className="radio-button" type="radio" name="radio" />
                                <div className="radio-tile">
                                    <div className="icon bike-icon">
                                        <svg fill="#000000" height="1em" viewBox="0 0 576 512" width="24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 0h24v24H0z" fill="none"/>
                                            <path d="M275.2 38.4c-10.6-8-25-8.5-36.3-1.5S222 57.3 224.6 70.3l9.7 48.6c-19.4 9-36.9 19.9-52.4 31.5c-15.3 11.5-29 23.9-40.7 36.3L48.1 132.4c-12.5-7.3-28.4-5.3-38.7 4.9S-3 163.3 4.2 175.9L50 256 4.2 336.1c-7.2 12.6-5 28.4 5.3 38.6s26.1 12.2 38.7 4.9l93.1-54.3c11.8 12.3 25.4 24.8 40.7 36.3c15.5 11.6 33 22.5 52.4 31.5l-9.7 48.6c-2.6 13 3.1 26.3 14.3 33.3s25.6 6.5 36.3-1.5l77.6-58.2c54.9-4 101.5-27 137.2-53.8c39.2-29.4 67.2-64.7 81.6-89.5c5.8-9.9 5.8-22.2 0-32.1c-14.4-24.8-42.5-60.1-81.6-89.5c-35.8-26.8-82.3-49.8-137.2-53.8L275.2 38.4zM384 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/>
                                        </svg>
                                    </div>
                                    <label for="bike" className="radio-tile-label">Whale watching</label>
                                </div>
                            </div>


                            <div className="input-container">
                                <input id="park" className="radio-button" type="radio" name="radio" />
                                <div className="radio-tile">
                                    <div className="icon car-icon">
                                        <svg fill="#000000" height="24" viewBox="0 0 448 512" width="24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M210.6 5.9L62 169.4c-3.9 4.2-6 9.8-6 15.5C56 197.7 66.3 208 79.1 208H104L30.6 281.4c-4.2 4.2-6.6 10-6.6 16C24 309.9 34.1 320 46.6 320H80L5.4 409.5C1.9 413.7 0 419 0 424.5c0 13 10.5 23.5 23.5 23.5H192v32c0 17.7 14.3 32 32 32s32-14.3 32-32V448H424.5c13 0 23.5-10.5 23.5-23.5c0-5.5-1.9-10.8-5.4-15L368 320h33.4c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16L344 208h24.9c12.7 0 23.1-10.3 23.1-23.1c0-5.7-2.1-11.3-6-15.5L237.4 5.9C234 2.1 229.1 0 224 0s-10 2.1-13.4 5.9z"/>
                                            <path d="M0 0h24v24H0z" fill="none"/>
                                        </svg>
                                    </div>
                                    <label for="drive" className="radio-tile-label">Park</label>
                                </div>
                            </div>

                            <div className="input-container">
                                <input id="historical" className="radio-button" type="radio" name="radio" />
                                <div className="radio-tile">
                                    <div className="icon fly-icon">
                                        <svg fill="#000000" height="24" viewBox="0 0 512 512" width="24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.18 9"/>
                                            <path d="M240.1 4.2c9.8-5.6 21.9-5.6 31.8 0l171.8 98.1L448 104l0 .9 47.9 27.4c12.6 7.2 18.8 22 15.1 36s-16.4 23.8-30.9 23.8H32c-14.5 0-27.2-9.8-30.9-23.8s2.5-28.8 15.1-36L64 104.9V104l4.4-1.6L240.1 4.2zM64 224h64V416h40V224h64V416h48V224h64V416h40V224h64V420.3c.6 .3 1.2 .7 1.8 1.1l48 32c11.7 7.8 17 22.4 12.9 35.9S494.1 512 480 512H32c-14.1 0-26.5-9.2-30.6-22.7s1.1-28.1 12.9-35.9l48-32c.6-.4 1.2-.7 1.8-1.1V224z"/>
                                            <path d="M0 0h24v24H0z" fill="none"/>
                                        </svg>
                                    </div>
                                    <label for="fly" className="radio-tile-label">Historical</label>
                                </div>
                            </div>


                        </div>
                    </div>
                
            </div>

            <div className="btn">
                <button type="submit" className="buttonl">
                    Next
                </button>
            </div>

        </form>
    </section>

    
)


}




export default Personalizingform;