import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Carousel from '../../Carousel';

const CardBodyCarousel = ({ post }) => {
    const location = useLocation(); // Obtiene la URL actual

    // Oculta el botón si estamos en la página de detalles del post
    const isDetailPage = location.pathname === `/post/${post._id}`;

    return (
        <div>
            <div className="card_body">
                {post.images.length > 0 && (
                    <div className="carousel-container">
                        <Carousel images={post.images} id={post._id} />
                    </div>
                )}
            </div>

            {/* Mostrar el botón solo si no estamos en la página de detalles */}
            {!isDetailPage && (
                <div className="visualizacion-button mx-3">
                    <Link to={`/post/${post._id}`} className="text-dark">
                        <button className="details-button">
                            Ver Detalles
                        </button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default CardBodyCarousel;

