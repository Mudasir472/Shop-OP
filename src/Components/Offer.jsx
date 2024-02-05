import offerBgImage from "../Images/offer bgImage.jpg"
import React from 'react';
import { useState, useEffect } from 'react';
import "./Offer.css"
export default function () {
        const [days, setDays] = useState(0);
        const [hours, setHours] = useState(0);
        const [minutes, setMinutes] = useState(0);
        const [seconds, setSeconds] = useState(0);

        const deadline = "May, 03, 2024";

        const getTime = () => {
            const time = Date.parse(deadline) - Date.now();

            setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
            setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
            setMinutes(Math.floor((time / 1000 / 60) % 60));
            setSeconds(Math.floor((time / 1000) % 60));
        };

        useEffect(() => {
            const interval = setInterval(() => getTime(deadline), 1000);

            return () => clearInterval(interval);
        }, []);

    return (
        <>
            <div className="container">
                <div className="offer">
                    <div className="timer">
                        <div className="time">
                            <div className="timeUpto">
                                <div><span>{days}</span></div>
                                <h5>Days</h5>
                            </div>
                            <div className="timeUpto">
                                <div><span>{hours}</span></div>
                                <h5>Hours</h5>
                            </div>
                            <div className="timeUpto">
                                <div><span>{minutes}</span></div>
                                <h5>Minutes</h5>
                            </div>
                            <div className="timeUpto">
                                <div><span>{seconds}</span></div>
                                <h5>Seconds</h5>
                            </div>
                        </div>
                        <div className="offerTitle">
                            <h2 className="py-4">WOO! Flash Sale</h2>
                            <h5 className="lh-base">You get into the 2k+ best Products in Flash offer with
                                a special-shaped sofa for sale.</h5>
                            <div className="shopNow my-5">
                                <span>Shop Now</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}