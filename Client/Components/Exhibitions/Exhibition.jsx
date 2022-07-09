import React from 'react'


function Exhibition(props) {
const { title, date, description, gallery} = props.show
  return (
  <div className="show">
    <p className="name">{title}</p>
    <p className="description">{date}</p>
    <p className="description">{description}</p>
    <p className="description">{gallery}</p>
</div>
  )
}

export default Exhibition