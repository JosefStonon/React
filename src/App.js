import React from "react";
import Post from './Post';
import Header from './Header';

const posts = [
    { title: 'John', subtitle: 'Doctor', likes: 20 },
    { title: 'Billy', subtitle: 'Driver', likes: 30 },
    { title: 'jack', subtitle: 'Police Officer', likes: 40 },
];

function App() {
    return  (
        <>
            <Header title="Josef Sartorera">
                <span>fucking billi</span>
            </Header>

            <hr/>

            {posts.map(post => (
                <Post
                    likes={post.likes}
                    post={{
                        title: post.title,
                        subtitle: post.subtitle,
                    }}
                />

            ))}


        </>
    )
}

export default App;
