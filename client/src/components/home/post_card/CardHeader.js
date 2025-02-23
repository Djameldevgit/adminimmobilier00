import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { GLOBALTYPES } from '../../../redux/actions/globalTypes';
import { deletePost } from '../../../redux/actions/postAction';
import { BASE_URL } from '../../../utils/config';
import { aprovarPostPendiente } from '../../../redux/actions/postAproveAction';

const CardHeader = ({ post }) => {
    const { auth, socket } = useSelector(state => state);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleAprovePost = () => {
        if (window.confirm("¿Deseas aprobar este post?")) {
            dispatch(aprovarPostPendiente({ post, auth }));
            history.push("/homepostspendientes");
        }
    };

    const handleEditPost = () => {
        dispatch({ type: GLOBALTYPES.STATUS, payload: { ...post, onEdit: true } });
    };

    const handleDeletePost = () => {
        if (window.confirm("Are you sure want to delete this post?")) {
            dispatch(deletePost({ post, auth, socket }));
            return history.push("/");
        }
    };

    const handleCopyLink = () => {
        navigator.clipboard.writeText(`${BASE_URL}/post/${post._id}`);
    };

    return (
        <div className="card_header">
            <div className="nav-item dropdown">
                <span className="material-icons" id="moreLink" data-toggle="dropdown">
                    more_horiz
                </span>

                <div className="dropdown-menu">
                    {auth.user ? (
                        auth.user._id === post.user._id || auth.user.role === "admin" ? (
                            // 📌 Si el usuario es dueño del post, muestra estas opciones
                            <>
                            <div className="dropdown-item" onClick={handleAprovePost}>
                                <span className="material-icons">check</span> Aprobar Post
                            </div>
                            <div className="dropdown-item" onClick={handleEditPost}>
                                <span className="material-icons">edit</span> Editar Post
                            </div>
                            <div className="dropdown-item" onClick={handleDeletePost}>
                                <span className="material-icons">delete_outline</span> Eliminar Post
                            </div>
                            <div className="dropdown-item" >
                                <span className="material-icons">push_pin</span> Fijar Post
                            </div>
                            <div className="dropdown-item" >
                                <span className="material-icons">unarchive</span> Desfijar Post
                            </div>
                            <div className="dropdown-item" >
                                <span className="material-icons">visibility</span> Cambiar Visibilidad
                            </div>
                            <div className="dropdown-item" >
                                <span className="material-icons">schedule</span> Programar Post
                            </div>
                            <div className="dropdown-item" >
                                <span className="material-icons">analytics</span> Ver Estadísticas
                            </div>
                            <div className="dropdown-item">
                                <span className="material-icons">content_copy</span> Duplicar Post
                            </div>
                            <div className="dropdown-item" >
                                <span className="material-icons">archive</span> Archivar Post
                            </div>
                             
                            <div className="dropdown-item" >
                                <span className="material-icons">category</span> Cambiar Categoría
                            </div>
                            <div className="dropdown-item" >
                                <span className="material-icons">person_add</span> Añadir Colaborador
                            </div>
                            <div className="dropdown-item" >
                                <span className="material-icons">download</span> Descargar Post
                            </div>
                        </>
                ) : (
                // 📌 Si el usuario está autenticado pero no es dueño del post
                <>
                    <div className="dropdown-item">
                        <span className="material-icons">edit</span> Editar Post
                    </div>
                    <div className="dropdown-item">
                        <span className="material-icons">delete</span> Eliminar Post
                    </div>
                    <div className="dropdown-item">
                        <span className="material-icons">comment</span> Comentar en el Post
                    </div>
                    <div className="dropdown-item">
                        <span className="material-icons">thumb_up</span> Dar Like al Post
                    </div>
                    <div className="dropdown-item">
                        <span className="material-icons">bookmark</span> Guardar en Favoritos
                    </div>
                    <div className="dropdown-item">
                        <span className="material-icons">notifications</span> Activar Notificaciones
                    </div>
                    <div className="dropdown-item">
                        <span className="material-icons">report</span> Denunciar Post
                    </div>
                    <div className="dropdown-item">
                        <span className="material-icons">share</span> Compartir Post
                    </div>
                    <div className="dropdown-item">
                        <span className="material-icons">visibility_off</span> Ocultar Post
                    </div>
                    <div className="dropdown-item">
                        <span className="material-icons">flag</span> Marcar como Inapropiado
                    </div>
                    <div className="dropdown-item">
                        <span className="material-icons">person_add</span> Seguir al Autor
                    </div>
                    <div className="dropdown-item">
                        <span className="material-icons">message</span> Enviar Mensaje al Autor
                    </div>
                    <div className="dropdown-item">
                        <span className="material-icons">archive</span> Archivar Post
                    </div>
                    <div className="dropdown-item">
                        <span className="material-icons">link</span> Copiar Enlace del Post
                    </div>
                    <div className="dropdown-item">
                        <span className="material-icons">print</span> Imprimir Post
                    </div>
                    <div className="dropdown-item">
                        <span className="material-icons">feedback</span> Enviar Feedback
                    </div>
                </>
                )
                ) : (
                // 📌 Si el usuario NO está autenticado
                <>
                    <div className="dropdown-item">
                        <span className="material-icons">search</span> Buscar Posts
                    </div>
                    <div className="dropdown-item">
                        <span className="material-icons">share</span> Compartir Post
                    </div>
                    <div className="dropdown-item">
                        <span className="material-icons">filter_list</span> Filtrar por Categoría
                    </div>
                    <div className="dropdown-item">
                        <span className="material-icons">sort</span> Ordenar por Más Recientes
                    </div>
                    <div className="dropdown-item">
                        <span className="material-icons">trending_up</span> Ver Tendencias
                    </div>
                    <div className="dropdown-item">
                        <span className="material-icons">description</span> Ver Contenido Relacionado
                    </div>
                    <div className="dropdown-item">
                        <span className="material-icons">poll</span> Participar en Encuestas
                    </div>
                    <div className="dropdown-item">
                        <span className="material-icons">download</span> Descargar Recursos
                    </div>
                    <div className="dropdown-item">
                        <span className="material-icons">mail</span> Suscribirse al Newsletter
                    </div>
                    <div className="dropdown-item">
                        <span className="material-icons">help</span> Ver Preguntas Frecuentes
                    </div>
                    <div className="dropdown-item">
                        <span className="material-icons">report</span> Denunciar Post
                    </div>
                    <div className="dropdown-item">
                        <span className="material-icons">notifications</span> Activar Notificaciones
                    </div>
                    <div className="dropdown-item">
                        <span className="material-icons">bookmark</span> Guardar Post
                    </div>
                </>
                    )}

                <div className="dropdown-item" onClick={handleCopyLink}>
                    <span className="material-icons">content_copy</span> Copiar Enlace
                </div>
            </div>
        </div>
        </div >
    );
};

export default CardHeader;

