import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";

import { useGetPostsQuery } from '../services/userApi';

export const AllPosts = () => {
    
    const { userId } = useParams();
    const { currentData, isFetching } = useGetPostsQuery(userId);
    let postInfos = currentData;


    if (isFetching) return <div className='container'>Идёт загрузка...</div>

    // Страница со всеми постами. Экран 3

        return (
            <section className='profile'>
                <div className='profile__body'>
                    <div className='container'>
                        <h2 className='title'>Все посты</h2>
                        <div className='posts__body'>
                            {postInfos?.map((post, index) => (
                                <Link key={index} to={`${post.id}`}>
                                    <div className='post__card'>
                                        <p key={post.name} className='post__title'>{post.title}</p>
                                        <p key={post.body} className='post__body'>{post.body}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        )
    
}