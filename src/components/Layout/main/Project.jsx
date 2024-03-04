import data from '../main/Info/data'

function Project() {
  return (
    <>
        <div className='imgContainer'>
        {data.map((item) => (
            <div className='itemContainer' key={item.id}>
                <section className='imgBox'>
                    <img src={item.image} alt={item.content}/>               
                </section>
                <section className='descContainer'>
                    <h3>{item.content}</h3>
                    <p>{item.description}</p>
                </section>
            </div>
      ))}
        </div>
        <hr /> 
    </>
  )
}

export default Project
