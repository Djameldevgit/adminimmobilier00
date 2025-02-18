import React from 'react';
import { useLocation } from 'react-router-dom';
import CardHeader from './CardHeader';

const CardBodyTitle = ({ post }) => {
    const location = useLocation();
    const isDetailPage = location.pathname === `/post/${post._id}`;

    return (
        <div className="card_body">
            <div className="d-flex justify-content-space-between align-items-center">

                {!isDetailPage && (
                    <div>
                        <div className="title0">{post.subCategory}</div>
                        <div className="title2">{post.title}</div>
                    </div>
                )}


            </div>
            <div className="card-header">
                <CardHeader post={post} />
            </div>

        </div>
    );
};

export default CardBodyTitle;




