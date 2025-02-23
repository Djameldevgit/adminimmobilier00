import React, { useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const CardFooterCommentLikes = ({ post }) => {
    const history = useHistory();
    const location = useLocation();
    const isDetailPage = location.pathname === `/post/${post._id}`;
    const { t } = useTranslation();

    const { auth, languageReducer } = useSelector((state) => state); // Obtiene auth y languageReducer del estado global
    const [showModal, setShowModal] = useState(false);

    const handleCommentClick = () => {
        if (!auth.token) {
            setShowModal(true);
        } else {
            history.push(`/post/${post._id}`);
        }
    };

    if (isDetailPage) return null;

    return (
        <>
            <div className="card_footer">
                <div className="footer-content d-flex justify-content-between align-items-center mt-2 mx-3">
                    <div className="d-flex align-items-center">
                        <span className="mr-2">Price:</span>
                        <span className="mr-3 text-danger">{post.price}</span>
                        <span>{post.unidaddeprecio}</span>
                    </div>

                    <h6
                        className="mt-2"
                        style={{ cursor: "pointer" }}
                        onClick={handleCommentClick}
                    >
                        <i className="fas fa-comment-alt"></i> {post.comments.length}
                    </h6>
                </div>
            </div>

            {/* Modal de autenticación */}
            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <h4>{t("title", { lng: languageReducer.language })}</h4>
                        <p>{t("message", { lng: languageReducer.language })}</p>
                        <div className="modal-buttons">
                            <button onClick={() => history.push("/login")}>
                                {t("login", { lng: languageReducer.language })}
                            </button>
                            <button onClick={() => history.push("/register")}>
                                {t("register", { lng: languageReducer.language })}
                            </button>
                            <button onClick={() => setShowModal(false)}>
                                {t("close", { lng: languageReducer.language })}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default CardFooterCommentLikes;
