import React, { useState, useEffect } from 'react'
import CommentCard from './CommentCard'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux';



const CommentDisplay = ({comment, post, replyCm}) => {
    
    const [showRep, setShowRep] = useState([])
    const [next, setNext] = useState(1)
    const {languageReducer} = useSelector(state=>state)
    const { t } = useTranslation()
    useEffect(() => {
        setShowRep(replyCm.slice(replyCm.length - next))
    },[replyCm, next])

    return (
        <div className="comment_display">
            <CommentCard comment={comment} post={post} commentId={comment._id} >
                <div className="pl-4">
                    {
                        showRep.map((item, index) => (
                            item.reply &&
                            <CommentCard
                            key={index}
                            comment={item}
                            post={post}
                            commentId={comment._id}
                             />
                        ))
                    }

{ 
    replyCm.length - next > 0
    ? <div style={{ cursor: 'pointer', color: 'crimson' }}
        onClick={() => setNext(next + 10)}>
        {t('seeMoreComments', { lng: languageReducer.language })}
      </div>

    : replyCm.length > 1 &&
      <div style={{ cursor: 'pointer', color: 'crimson' }}
        onClick={() => setNext(1)}>
        {t('hideComments', { lng: languageReducer.language })}
      </div>
}

                </div>
            </CommentCard>
        </div>
    )
}

export default CommentDisplay
