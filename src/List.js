import React from 'react'

const List = ({listu}) =>
  listu.map(item => (
    <div key={item.objectID}>
      <span>
        <a href={item.url}>{item.title}&nbsp;</a>
      </span>
      <span>{item.author}</span>
      <span>{item.num_comments}</span>
      <span>{item.points}</span>
    </div>
  ))

export default List
