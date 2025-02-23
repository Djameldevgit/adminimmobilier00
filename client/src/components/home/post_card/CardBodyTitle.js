import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import CardHeader from './CardHeader';
import moment from 'moment';
import 'moment/locale/fr'; // Importa el idioma francés

const CardBodyTitle = ({ post }) => {
 
    const { id } = useParams(); // Obtiene el id de la URL dinámica
    moment.locale('fr'); // Establece el idioma a francés

    const isDetailPage = id === post._id.toString(); // Compara con el ID del post

    // Si está en la página de detalle, no renderizar nada
    if (isDetailPage) return null;

    return (
        <div className='title-poste'>
            <div className='titleeheader'>
                <div className="title-group">
                    <div className="title0">{post.subCategory}</div>
                    <div className="title1">{post.title}</div>
                    <div className="title2">F {post.attributes.piece}</div>
                </div>

                <div className='hedercard'>
                    <CardHeader post={post} />
                </div>
            </div>

            <div className='title-location'>
                <div className="title3"> {post.wilaya}</div>
                <div className="title4"> {post.commune}</div>

                <small className="textmuted">
                    {moment(post.createdAt).fromNow()}
                </small>
            </div>
        </div>
    );
}

export default CardBodyTitle;


 