import React, { useState } from 'react';
import './CreatePost.css'
import { supabase } from '../client';

const CreatePost = () => {

    const [post, setPost] = useState({title: "", author: "", description: "", betCount: 0})

    const handleChange = (e) => {
        const {name, value} = e.target;
        setPost( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }

    const createPost = async (event) => {
        event.preventDefault();
        // console.log(event.target.title)
       await supabase
        .from('Posts')
        .insert({title: post.title, author: post.author, description: post.description})
        .select();
    
        window.location = "/";
    }

    return (
        <div>
            <form>
                <label for="title">Title</label> <br />
                <input type="text" id="title" name="title" value={post.title} onChange={handleChange} /><br />
                <br/>

                <label for="author">Author</label><br />
                <input type="text" id="author" name="author" value={post.author} onChange={handleChange} /><br />
                <br/>

                <label for="description">Description</label><br />
                <textarea rows="5" cols="50" id="description" name="description" value={post.description} onChange={handleChange} >
                </textarea>
                <br/>
                <input type="submit" value="Submit" onClick={createPost}/>
            </form>
        </div>
    )
}

export default CreatePost