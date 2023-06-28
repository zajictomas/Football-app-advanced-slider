import "./OnePlayerSlider.css"
import React from 'react'
import { useState, useEffect } from "react"
import data from "../data"
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const OnePlayerSlider = () => {
    const [index, setIndex] = useState(0)

    // Filmy se ve slideru točí stále dokola
    useEffect( () => {
        if (index < 0) {
            setIndex(data.length - 1)
        } else if (index > data.length - 1) {
            setIndex(0)
        }
    }, [index])

    // Automatické posouvání
    useEffect( () => {
        let setIntervalID = setInterval( () => {
            setIndex(index + 1)
        }, 3000)
        return () => clearInterval(setIntervalID)
    }, [index])

    // Základní vyrenderování do stránky
  return <section className="all-players">
    <div className="all-players-content">
        {data.map( (onePlayer, onePlayerIndex) => {
            const {id, image, firstName, secondName, number, position} = onePlayer

            let mainClass = "next-slide"

            if (onePlayerIndex === index) {
                mainClass = "active-slide"
            }

            if (onePlayerIndex === index -1 || (index === 0 && onePlayerIndex === data.length - 1)) {
                mainClass = "last-slide"
            }

            return <article key={id} className={mainClass}>
                <img src={image} alt="" />
                <h1>Jméno: {firstName}</h1>
                <h1>Příjmení: {secondName}</h1>
                <p>Číslo: {number}</p>
                <p>Pozice: {position}</p>
            </article>
        })}
    </div>
    <div>
        <button onClick={ () => setIndex(index - 1)}><FaArrowAltCircleLeft /></button>
        <button onClick={ () => setIndex(index + 1)}><FaArrowAltCircleRight /></button>
    </div>
  </section>
}

export default OnePlayerSlider
