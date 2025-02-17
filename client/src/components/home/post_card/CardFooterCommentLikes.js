import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import LikeButton from '../../LikeButton';
import { useSelector, useDispatch } from 'react-redux';
import { likePost, unLikePost } from '../../../redux/actions/postAction';

const CardFooterCommentLikes = ({ post }) => {
    const [isLike, setIsLike] = useState(false);
    const [loadLike, setLoadLike] = useState(false);

    const { auth, socket } = useSelector(state => state);
    const dispatch = useDispatch();

    const location = useLocation(); // Obtiene la ruta actual
    const isDetailPage = location.pathname === `/post/${post._id}`; // Verifica si estamos en la página de detalles

    // Likes
    useEffect(() => {
        if (post.likes.find(like => like._id === auth.user._id)) {
            setIsLike(true);
        } else {
            setIsLike(false);
        }
    }, [post.likes, auth.user._id]);

    const handleLike = async () => {
        if (loadLike) return;

        setLoadLike(true);
        await dispatch(likePost({ post, auth, socket }));
        setLoadLike(false);
    };

    const handleUnLike = async () => {
        if (loadLike) return;

        setLoadLike(true);
        await dispatch(unLikePost({ post, auth, socket }));
        setLoadLike(false);
    };

    // Ocultar la card en la página de detalles
    if (isDetailPage) return null;

    return (
        <div className="card_footer">
            <div className="footer-content d-flex justify-content-between align-items-center mt-2 mx-3">
                
                {/* Like button + text */}
                <div className="d-flex align-items-center">
                    <LikeButton
                        isLike={isLike}
                        handleLike={handleLike}
                        handleUnLike={handleUnLike}
                    />
                    <span className="ms-1">{post.likes.length} likes</span>
                </div>

                {/* Comments count */}
                <h6 className="comments-count">
                    {post.comments.length} comments
                </h6>
            </div>
        </div>
    );
};

export default CardFooterCommentLikes;


