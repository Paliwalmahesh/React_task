import React from 'react'

export default function Alert(props) {
    return (
        props.alert &&
         <div>
            <div className={`alert alert-${props.alert.Type} role="alert"`}>
        {props.alert.msg}
            </div>
     </div>
    )
}
