import React from "react";
import Post from './Post';

function App() {
    return  (
        <>
            <h1>Componet App</h1>
            <h2>subtitulo</h2>

            <hr/>

            <Post
             title="Titulo da noticia 015"
             subtitle="Subtitulo da noticia 01"
            />

            <Post
             title="Titulo da noticia 02"
             subtitle="Subtitulo da noticia 02"
            />

            <Post
             title="Titulo da noticia 03"
             subtitle="Subtitulo da noticia 03"
            />
        </>
    )
}

export default App;
