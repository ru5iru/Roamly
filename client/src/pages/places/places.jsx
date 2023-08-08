import "./places.scss";
import belihuloya from '../../assets/images/belihuloya.jpg';
import '@fortawesome/fontawesome-free/css/all.min.css';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import meemure from '../../assets/images/meemure.jpg';
import knuckles from '../../assets/images/knuckles.jpg'
import { Link } from "react-router-dom";


export const Places = () => {

    const [isHearted, setIsHearted] = useState(false);

    const toggleHeart = () => {
      setIsHearted(!isHearted);
    };

    return (
        <Link to={"/placedetails"}>
        <div>
            <div className="title-places" style={{ marginTop: '45px', marginBottom: '2rem'}}>
                <h1 style={{ fontFamily: "'Familjen Grotesk', sans-serif"}}>Places for camping</h1>
            </div>
            <div className="card-list">
                <article class="card">
                    <img class="card__background" src={belihuloya} style={{aspectRatio: 'auto 1920 / 2193'}}alt=""/>
                    <div class="card__content | flow">
                        <div class="card__content--container | flow">
                            <h2 class="card__title" style={{ fontFamily: "'Familjen Grotesk', sans-serif"}}>Belihuloya</h2>
                            <FontAwesomeIcon
                            icon={isHearted ? faHeart : faHeart}
                            className={`heart icon-heart${isHearted ? ' heart-des' : ''}`}
                            onClick={toggleHeart}
                            />
                            <a className="card__link" href="https://example.com/maps/belihuloya" target="_blank" rel="noopener noreferrer">
                            <i className="fas fa-map-marker-alt" style={{marginLeft: '6rem'}}></i> See on map
                            </a>
                            <div className="card__rating">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                        </div>
                        <button class="card__button" style={{ fontFamily: "'Familjen Grotesk', sans-serif"}}>Select</button>
                    </div>
                </article>
                <article class="card">
                    <img class="card__background" src={knuckles} width="1920" height="2193" alt=""/>
                    <div class="card__content | flow">
                        <div class="card__content--container | flow">
                            <h2 class="card__title" style={{ fontFamily: "'Familjen Grotesk', sans-serif"}}>Knuckles</h2>
                            <FontAwesomeIcon
                            icon={isHearted ? faHeart : faHeart}
                            className={`heart icon-heart${isHearted ? ' heart-des' : ''}`}
                            onClick={toggleHeart}
                            />
                            <a className="card__link" href="https://example.com/maps/belihuloya" target="_blank" rel="noopener noreferrer">
                            <i className="fas fa-map-marker-alt" style={{marginLeft: '6rem'}}></i> See on map
                            </a>
                            <div className="card__rating">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                        </div>
                        <button class="card__button" style={{ fontFamily: "'Familjen Grotesk', sans-serif"}}>Select</button>
                    </div>
                </article>
                <article class="card">
                    <img class="card__background" src={meemure} width="1920" height="2193" alt=""/>
                    <div class="card__content | flow">
                        <div class="card__content--container | flow">
                            <h2 class="card__title" style={{ fontFamily: "'Familjen Grotesk', sans-serif"}}>Meemure</h2>
                            <FontAwesomeIcon
                            icon={isHearted ? faHeart : faHeart}
                            className={`heart icon-heart${isHearted ? ' heart-des' : ''}`}
                            onClick={toggleHeart}
                            />
                            <a className="card__link" href="https://example.com/maps/belihuloya" target="_blank" rel="noopener noreferrer">
                            <i className="fas fa-map-marker-alt" style={{marginLeft: '6rem'}}></i> See on map
                            </a>
                            <div className="card__rating">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                        </div>
                        <button class="card__button" style={{ fontFamily: "'Familjen Grotesk', sans-serif"}}>Select</button>
                    </div>
                </article>
                <article class="card">
                    <img class="card__background" src={belihuloya} style={{aspectRatio: 'auto 1920 / 2193'}} alt=""/>
                    <div class="card__content | flow">
                        <div class="card__content--container | flow">
                            <h2 class="card__title" style={{ fontFamily: "'Familjen Grotesk', sans-serif"}}>Belihuloya</h2>
                            <FontAwesomeIcon
                            icon={isHearted ? faHeart : faHeart}
                            className={`heart icon-heart${isHearted ? ' heart-des' : ''}`}
                            onClick={toggleHeart}
                            />
                            <a className="card__link" href="https://example.com/maps/belihuloya" target="_blank" rel="noopener noreferrer">
                            <i className="fas fa-map-marker-alt" style={{marginLeft: '6rem'}}></i> See on map
                            </a>
                            <div className="card__rating">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                        </div>
                        <button class="card__button" style={{ fontFamily: "'Familjen Grotesk', sans-serif"}}>Select</button>
                    </div>
                </article>
                <article class="card">
                    <img class="card__background" src={knuckles} width="1920" height="2193" alt=""/>
                    <div class="card__content | flow">
                        <div class="card__content--container | flow">
                            <h2 class="card__title" style={{ fontFamily: "'Familjen Grotesk', sans-serif"}}>Knuckles</h2>
                            <FontAwesomeIcon
                            icon={isHearted ? faHeart : faHeart}
                            className={`heart icon-heart${isHearted ? ' heart-des' : ''}`}
                            onClick={toggleHeart}
                            />
                            <a className="card__link" href="https://example.com/maps/belihuloya" target="_blank" rel="noopener noreferrer">
                            <i className="fas fa-map-marker-alt" style={{marginLeft: '6rem'}}></i> See on map
                            </a>
                            <div className="card__rating">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                        </div>
                        <button class="card__button" style={{ fontFamily: "'Familjen Grotesk', sans-serif"}}>Select</button>
                    </div>
                </article>
                <article class="card">
                    <img class="card__background" src={meemure} width="1920" height="2193" alt=""/>
                    <div class="card__content | flow">
                        <div class="card__content--container | flow">
                            <h2 class="card__title" style={{ fontFamily: "'Familjen Grotesk', sans-serif"}}>Meemure</h2>
                            <FontAwesomeIcon
                            icon={isHearted ? faHeart : faHeart}
                            className={`heart icon-heart${isHearted ? ' heart-des' : ''}`}
                            onClick={toggleHeart}
                            />
                            <a className="card__link" href="https://example.com/maps/belihuloya" target="_blank" rel="noopener noreferrer">
                            <i className="fas fa-map-marker-alt" style={{marginLeft: '6rem'}}></i> See on map
                            </a>
                            <div className="card__rating">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                        </div>
                        <button class="card__button" style={{ fontFamily: "'Familjen Grotesk', sans-serif"}}>Select</button>
                    </div>
                </article>
            </div>
        </div> 
        </Link> 
    );
};

export default Places;