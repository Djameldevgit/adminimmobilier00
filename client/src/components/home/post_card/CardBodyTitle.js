import React from 'react';
import { useLocation } from 'react-router-dom';
import CardHeader from './CardHeader';

const CardBodyTitle = ({ post }) => {
    const location = useLocation();
    const isDetailPage = location.pathname === `/post/${post._id}`; // Verifica si estamos en la página de detalles

    return (
        <div className="card_body">
            {/* Contenedor flex para alinear el título a la izquierda y el CardHeader a la derecha */}
            <div className="d-flex justify-content-between align-items-center">
                {/* Mostrar los títulos solo si NO estamos en la página de detalles */}
                {!isDetailPage && (
                    <div>
                        <div className="title0">{post.subCategory}</div>
                        <div className="title2">{post.title}</div>
                    </div>
                )}

                {/* Siempre mostrar el CardHeader alineado a la derecha */}
                <div className="card-header">
                    <CardHeader post={post} />
                </div>
            </div>
        </div>
    );
};

export default CardBodyTitle;



 
