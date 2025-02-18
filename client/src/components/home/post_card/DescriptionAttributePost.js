import React from 'react';
 import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

const DescriptionAttributePost = ({ post }) => {
    const { languageReducer } = useSelector(state => state);
    const { t } = useTranslation();

    const language = languageReducer.language || "en";
   
    return (
        <div className="description-container">
            <h5 className="description-title">{t("details", { lng: language })}</h5>
            <ul className="attributes-list">
                {post.attributes && Object.keys(post.attributes).length > 0 ? (
                    Object.entries(post.attributes).map(([key, value]) => (
                        <li key={key} className="attribute-item">
                            <span className="attribute-key">{key}:</span>
                            <span className="attribute-value">
                                {Array.isArray(value)
                                    ? value.join(', ') // Agregar comas entre los valores del array
                                    : typeof value === "boolean"
                                        ? (value ? "Oui" : "Non")
                                        : value
                                }
                            </span>
                        </li>
                    ))
                ) : (
                    <li className="attribute-item">No hay atributos disponibles</li>
                )}
            </ul>

           
        </div>
    );
};

export default DescriptionAttributePost;

