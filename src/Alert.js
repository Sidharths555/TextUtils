import React from 'react'
export default function Alert(props) {
  return (
    <>
    <div class={`alert alert-${props.alert.tipe}`} role="alert">
        <strong><i class={`bi bi-${props.alert.icn}`}></i>{props.alert.msg}</strong>
    </div>
    </>
  )
}
