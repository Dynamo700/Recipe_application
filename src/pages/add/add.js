import { Link, Route, Routes, BrowserRouter } from "react-router-dom";
import { useState, useEffect, useRef } from 'react';


export function Add() {
    const [name, setName] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [description, setDescription] = useState("");
    const [directions, setDirections] = useState("");
    const [image, setImage] = useState("");
    const [data, setData] = useState([]);

    const imageMap = {
      image1: 'image1.jpg',
      image2: 'image2.jpg',
      image3: 'image3.jpg'
    };
    

    useEffect(() => {
      
      const recipesData = localStorage.getItem('recipesData');
      
      if(recipesData){
        setData(JSON.parse(recipesData))
      }

    }, [])

    function handleNameInput(event){
      const value = event.target.value;
      setName(value)
    }

    function handleIngreidentsInput(event){
      const value = event.target.value;
      setIngredients(value);
    }

    function handleDescriptionInput(event){
      const value = event.target.value;
      setDescription(value);
    }

    function handleDirectionsInput(event){
      const value = event.target.value;
      setDirections(value);
    }

    function handleImageInput(event){
      const value = event.target.value;
      setImage(value);
    }

    function handleSubmit(){
      const selectImageFileName = imageMap[image]

      const recipe = {
        name: name,
        description: description,
        ingredients: ingredients,
        directions: directions,
        image: selectImageFileName
      }

      console.log(recipe)
      const updatedData = [...data] //copied orginal state

      updatedData.push(recipe) //appended recipe

      setData(updatedData)

      console.log(updatedData)
      localStorage.setItem('recipesData', JSON.stringify(updatedData));

      console.log(recipe)

    }

      
      // txtTitle.current.value = "";
    
    return (
      <div>
        <nav>
          <Link to="/">View</Link>
          <Link to="/add">Add</Link>
        </nav>
        <h1>Add Recipe</h1>     
          <label for="name">Name:</label>
          <input type="text" value={name} onChange={handleNameInput}></input>
          <br></br>
          <label for="ingreidents">ingreidents</label>
          <input type="text" value={ingredients} onChange={handleIngreidentsInput}></input>
          <br></br>
          <label for="directions">directions</label>
          <input type="text" value={directions} onChange={handleDirectionsInput}></input>
          <br></br>
          <label for="descriptions">descriptions</label>
          <input type="text" value={description} onChange={handleDescriptionInput}></input>
          <br></br>
          <p>Please select an image</p>
          <img src="images/image1.jpg" width={300} height={300}></img>
          <input type="radio" id="image1" name="image1" value="image1" onChange={handleImageInput} checked={image === "image1"}/> 
          <label for="image1">Image1</label>
          <br></br>
          <img src="images/image2.jpg" width={300} height={300}></img>
          <input type="radio" id="image2" name="image2" value="image2" onChange={handleImageInput} checked={image === "image2"}/> 
          <label for="image2">Image2</label>
          <br></br>
          <img src="images/image3.jpg" width={300} height={300}></img>
          <input type="radio" id="image3" name="image3" value="image3" onChange={handleImageInput} checked={image === "image3"}/> 
          <label for="image3">Image3</label>

          <br></br>
          <br></br>
          
          <button onClick={handleSubmit}>Submit</button>
          
      </div>
          
      
    )
  }