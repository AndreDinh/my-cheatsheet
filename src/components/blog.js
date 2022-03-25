import React from "react";
import { useState, useEffect } from "react";

const Blog = () => {
  const [blogs, newBlogsEnter] = useState([]);

  async function grabingBlogs() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    const data = await response.json();
    const blogPost =  data.slice(0,5).map(data =>{
        return {
            id: data.id,
            title: data.title,
            body: data.body,
          };
    })
    newBlogsEnter(blogPost);
  }

  const [title, postTitle] = useState("");
  const [blog, postBlog] = useState("");

  const postTitleHandler = (event) => {
    postTitle(event.target.value);
  };

  const postBlogHandler = (event) => {
    postBlog(event.target.value);
  };

  const [post, postCreate] = useState({id:'',title:'',blog:''});
  async function createBlogPost(event) {
    event.preventDefault();
    const newBlog = {
      id: Math.random(),
      title: title,
      blog: blog,
    };
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(newBlog),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    if (!response.ok) {
      console.error("Error");
    }
    const data = await response.json();
    grabingBlogs();
  }


  useEffect(() => {
    grabingBlogs();
  }, []);


  return (
    <React.Fragment>
        {blogs.map((post) => (
          <article key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </article>
        ))}

      <button>Show more blogs </button>

      <form onSubmit={createBlogPost}>
        <label>
          title:
          <input type="text" name="name" value={title} onChange={(e)=> postCreate({...post, title: e.target.value})} />
        </label>
        <label>
          Post:
          <input type="text" value={blog} onChange={(e)=> postCreate({...post, blog: e.target.value})}  />
        </label>
        <input type="submit" value="Create a blog" />
      </form>
    </React.Fragment>
  );
};

export default Blog;
