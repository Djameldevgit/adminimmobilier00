import React, { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import LikeButton from '../../LikeButton';
import { useSelector, useDispatch } from 'react-redux';
import { likePost, unLikePost } from '../../../redux/actions/postAction';
import { useTranslation } from 'react-i18next'

const CardFooterCommentLikes = ({ post }) => {
    const [isLike, setIsLike] = useState(false);
    const [loadLike, setLoadLike] = useState(false);

    const { auth, socket } = useSelector(state => state);
    const dispatch = useDispatch();
    const history = useHistory()
    const { languageReducer } = useSelector(state => state)
    const { t } = useTranslation()
    const location = useLocation(); // Obtiene la ruta actual
    const isDetailPage = location.pathname === `/post/${post._id}`; // Verifica si estamos en la página de detalles
    const [showAuthModal, setShowAuthModal] = useState(false); // Estado para controlar el 
    // Likes
    useEffect(() => {
        // Verifica si el usuario está autenticado
        if (auth.user && auth.user._id) {
            // Si el usuario está autenticado, verifica si ya dio like
            if (post.likes.find(like => like._id === auth.user._id)) {
                setIsLike(true);
            } else {
                setIsLike(false);
            }
        } else {
            // Si el usuario no está autenticado, asegúrate de que isLike sea false
            setIsLike(false);
        }
    }, [post.likes, auth.user]);

    const handleLike = async () => {
        if (!auth.token) {
            setShowAuthModal(true);
            return;
        }

        if (loadLike) return;

        setLoadLike(true);
        await dispatch(likePost({ post, auth, socket }));
        setLoadLike(false);
    };

    const handleUnLike = async () => {
        if (!auth.token) {
            alert('Debes registrarte para dar like');
            return;
        }


        if (loadLike) return;

        setLoadLike(true);
        await dispatch(unLikePost({ post, auth, socket }));
        setLoadLike(false);
    };

    // Ocultar la card en la página de detalles
    if (isDetailPage) return null;
    const handleCloseModal = () => {
        setShowAuthModal(false); // Cerrar el modal
    };

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
            {showAuthModal && (
                <div className="modal">
                    <div className="modal-content">
                        <h3> {t('You must register to be able to like', { lng: languageReducer.language })}</h3>
                        <p>{t('Please log in or register to continue.', { lng: languageReducer.language })} </p>
                        <button onClick={handleCloseModal}>{t('close', { lng: languageReducer.language })}</button>
                        <button onClick={() => history.push('/register')}>{t('register', { lng: languageReducer.language })} </button>
                    </div>
                </div>
            )}

        </div>




    );
};

export default CardFooterCommentLikes;


