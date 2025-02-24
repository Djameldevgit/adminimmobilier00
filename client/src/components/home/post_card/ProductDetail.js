import React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
//{t("details", { lng: language })}

const ProductDetail = ({ post }) => {

    const { languageReducer } = useSelector(state => state);
    const { t } = useTranslation();

    const language = languageReducer.language || "en";

    return (
        <div class="product-details">

            <div class="details-container">
                 <div className="info-item">
                    <span class="info-label">Immobilier: {post.subCategory} </span>
                    <span class="info-value">{post.title} F {post.attributes.piece}</span>
                </div>

                 <div className="info-item">
                    <span class="info-label">Publié le: </span>
                    <span class="info-value">{new Date(post.createdAt).toLocaleDateString()} a las {new Date(post.createdAt).toLocaleTimeString()}</span>
                </div>
                 <div className="info-item">
                    <span class="info-label">Actualise le: </span>
                    <span class="info-value">{new Date(post.createdAt).toLocaleDateString()} a las {new Date(post.createdAt).toLocaleTimeString()}</span>
                </div>

                <div className="info-item">
                    <i className="fas fa-eye"></i>
                    <span class="info-label">Vue:</span>
                    <span class="info-value">{post.vistas}</span>
                </div>
               

                 <div className="info-item">
                    <span class="info-label">Likes: </span>
                    <span class="info-value">{post.likes.length}</span>
                </div>
                 <div className="info-item">
                    <i className="fas fa-comments"></i>
                    <span class="info-label">Commentaires:</span>
                    <span class="info-value">{post.comments.length}</span>
                </div>
                <div className="info-item">
                    <i className="fas fa-comments"></i>
                    <span className="info-label">{t("allowComments", { lng: language })}:</span>
                    <span className="info-value">{post.comentarios || t("notSpecified", { lng: language })}</span>
                </div>
                 <div className="info-item">
                    <span class="info-label">Superficie:</span>
                    <span class="info-value">{post.attributes.superficie} M²</span>
                </div>
                 <div className="info-item">
                    <span class="info-label">Etage(s):</span>
                    <span class="info-value">{post.attributes.etage}</span>
                </div>
                 <div className="info-item">
                    <span class="info-label">Pièces:</span>
                    <span class="info-value">{post.attributes.piece}</span>
                </div>
                 <div className="info-item">
                    <span class="info-label">Promotion immobilière:</span>
                    <span class="info-value">{post.attributes.promoteurimmobilier}</span>
                </div>

                 <div className="info-item">
                    <span class="info-label">Parle du promoteur immobilier:</span>
                    <span class="info-value">{post.attributes.parlepromoteurimmobilier}</span>
                </div>
                 <div className="info-item">
                    <span class="info-label">Conditions de paiement:</span>
                    <span class="info-value">????</span>
                </div>
                 <div className="info-item">
                    <span class="info-label">Spécifications:</span>
                    <span class="info-value">????</span>
                </div>
                 <div className="info-item">
                    <span class="info-label">Papiers:</span>
                    <span class="info-value">????</span>
                </div>
                 <div className="info-item">
                    <span class="info-label">Spécifications:</span>
                    <span class="info-value">????</span>
                </div>
            </div>
        </div>
    );
};


export default ProductDetail


