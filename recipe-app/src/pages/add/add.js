import { Link, Route, Routes, BrowserRouter } from "react-router-dom";
import { useState, useEffect, useRef } from 'react';
import axios from "axios";

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

      axios.post('http://localhost:8000/add', recipe).then((response) => {
        console.log(response)
      })

      

      console.log(recipe)
      const updatedData = [...data] //copied orginal state

      updatedData.push(recipe) //appended recipe

      setData(updatedData)

      console.log(updatedData)

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

        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">Name:</span>
          <input type="text" class="form-control" placeholder="Recipe Name" value={name} onChange={handleNameInput}/>
         </div>

          <br></br>

          <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">ingredients:</span>
          <input type="text" class="form-control" placeholder="Recipe ingredients" value={ingredients} onChange={handleIngreidentsInput}/>
         </div>

          
          <br></br>
          <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">Directions:</span>
          <input type="text" class="form-control" placeholder="Recipe directions" value={directions} onChange={handleDirectionsInput}/>
         </div>
          
          <br></br>
          <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">Descriptions:</span>
          <input type="text" class="form-control" placeholder="Recipe descriptions" value={description} onChange={handleDescriptionInput}/>
         </div>
          
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

          <button type="button" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
      </div>
          
      
    )
  }