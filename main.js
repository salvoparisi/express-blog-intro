const express= require('express')
const app=express()
const port = 3000

app.get('/',(req, res) =>{
    res.send('<h1>Benvenuto nel mio blog!</h1>')
})

app.listen(port,()=>{
    console.log(`listening http://localhost:${port}`);
})

const posts = [
    {
      title: "Post 1",
      content: "Contenuto del primo post.",
      image: "/images/post1.jpg",
      tags: ["Node.js", "Express", "JavaScript"]
    },
    {
      title: "Post 2",
      content: "Contenuto del secondo post.",
      image: "/images/post2.jpg",
      tags: ["API", "REST"]
    },
    {
      title: "Post 3",
      content: "Contenuto del terzo post.",
      image: "/images/post3.jpg",
      tags: ["Frontend", "Backend"]
    },
    {
      title: "Post 4",
      content: "Contenuto del quarto post.",
      image: "/images/post4.jpg",
      tags: ["Fullstack", "Programming"]
    },
    {
      title: "Post 5",
      content: "Contenuto del quinto post.",
      image: "/images/post5.jpg",
      tags: ["Coding", "Projects"]
    }
]
  