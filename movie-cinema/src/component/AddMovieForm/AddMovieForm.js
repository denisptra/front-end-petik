import React, { useState } from "react";
import "./AddMovieForm.css";

const AddMovieForm = ({ onAddMovie}) => {
    const [formData, setFormData] = useState({
        title: "",
        year: "",
        image: "",
        genre: "",
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddMovie(formData);
    }
    return (
        <div className="container">
            <section className="form">
                <div className="form-left">
                    <img src="https://picsum.photos/200/300?random=1" alt="img-form" />
                </div>
                <div className="form-right">
                    <h1 className="form-title">Add Movie</h1>
                    <form action="" onSubmit={handleSubmit}> 
                        <div className="form-inputgroup">
                            <label htmlFor="title" className="form-label" for="">Title</label>
                            <input type="text" name="title" id="title" className="form-input" onChange={handleChange} />
                        </div>
                        <div class="form-inputgroup">
                            <label htmlFor="year" className="form-label" for="">Year</label>
                            <input type="text" name="year" id="year" className="form-input" onChange={handleChange} />
                        </div>
                        <div class="form-inputgroup">
                            <label htmlFor="genre" className="form-label" for="">Genre</label>
                            <select name="genre" id="genre" className="form-input" onChange={handleChange}>
                                <option value=""></option>
                                <option value="action">Action</option>
                                <option value="horror">Horror</option>
                                <option value="drama">Drama</option>
                                <option value="romance">Romance</option>
                                <option value="comedy">Comedy</option>
                            </select>
                        </div>
                        <div class="form-inputgroup">
                            <label htmlFor="poster" className="form-label" for="">Poster</label>
                            <input type="text" name="poster" id="poster" className="form-input" onChange={handleChange} />
                        </div>
                        <button type="submit" className="form-button">Kirim</button>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default AddMovieForm;