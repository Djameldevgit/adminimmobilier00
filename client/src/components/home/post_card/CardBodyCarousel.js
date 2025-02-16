
import React from 'react';
import Carousel from '../../Carousel';
 import {Link} from 'react-router-dom'
import CardFooterCommentLikes from './CardFooterCommentLikes';
const CardBodyCarousel = ({ post }) => {
    return (
        <div>
            <div className="card_body">
                {post.images.length > 0 && (
                    <div className="carousel-container">
                        <Carousel images={post.images} id={post._id} />
                    </div>
                )}
              

            </div>
          
           <div className='visualizacion-button mx-3'>
            <Link to={`/post/${post._id}`} className="text-dark"  >
                <button className="details-button">
                    Ver Detalles
                </button>
            </Link>
        </div>

        </div>

    );
};

export default CardBodyCarousel;
