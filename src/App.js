
import React, { useState } from 'react';
import Post from './Post';
import Body from './Body';



export default function App() {

    const [posts, setPosts] = useState([
        { id: Math.random(), name: 'josé', lastName: 'Sartori', likes: 20},
        { id: Math.random(), name: 'maria', lastName: 'tonon', likes: 30},
        { id: Math.random(), name: 'tiao', lastName: 'luiz', likes: 40},
    ])

    function handleReflash() {
        setTimeout(() => {


            setPosts((prevState) => [
                ...prevState,
                {
                    id: Math.random(),
                    name: `name#01${prevState.length +1}`,
                    lastName: `lastName#01${prevState.length +1}`,
                    likes: 20
                   }
            ])
        }, 2000)


    }


    return (
        <>
            <Post title='Josef Fodão'
                  subtitle='Embaçado de mais!'>
                    <button onClick={handleReflash}>Atualizar</button>
            </Post>

            {posts.map(post => (
                <Body
                    key={post.id}
                    likes={post.likes}
                    post={{
                        name: post.name,
                        lastName: post.lastName
                    }}

                />
            ))}
        </>
    )
}
