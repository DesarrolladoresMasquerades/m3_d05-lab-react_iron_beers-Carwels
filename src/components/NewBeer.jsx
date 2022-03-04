import Header from "../components/Header"
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import React from 'react'

export default function NewBeer() {
  const [name, setName] = useState("")
  const [tagline, setTagline] = useState("")
  const [description, setDescription] = useState("")
  const [level, setlevel] = useState(0)
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()

    axios
      .post('https://ih-beers-api2.herokuapp.com/beers/new', {name, tagline, description, level})
      .then((response) => {
        console.log(response)
        navigate('/')
      })
      .catch((err) => console.log(err))
  }

  return (
    <div className="AddNewBeer">
      <h1>Add New Bears</h1>
      <form onSubmit={handleSubmit}>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="NAME"

        />
        <input
          id="tagline"
          type="text"
          value={tagline}
          onChange={(e) => setTagline(e.target.value)}
          placeholder="TAGLINE"
        />
        <input
          id="description"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="DESCRIPTION"
        />
        <input
          id="title"
          type="number"
          value={level}
          onChange={(e) => setlevel(e.target.value)}
          placeholder="LEVEL"
        />

        <button type="submit"> ADD A NEW BEER </button>
      </form>
      </div>
  )
}