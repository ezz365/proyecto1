const Item = ({itemDetail}) => {
  return (
    <div>
        <h2>
            {itemDetail.name}
        </h2>
        <h2>
            {itemDetail.id}
        </h2>
    </div>
  )
}

export default Item