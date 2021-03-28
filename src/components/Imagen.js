import { useState } from "react"

const Image = () => {
  const [image, setImage] = useState('')

  const handleChangeImage = (e) => {
    const [file] = e.target.files; // resultado de evento del input
    const reader = new FileReader() // metodo para leer archivos

    reader.onload = (event) => { //escucha la cuando cargas una imagen y lo pasa a base 64
      console.log(event.target.result)
        setImage(event.target.result) // guardamos en el estado
      }

    reader.readAsDataURL(file); // leer para poder mostrar la imagen
  }

  const saveImage = () => {
    fetch('url', {
      method: 'POST',
      body: image.replace('data:image/png;base64,', '')
    })
  }

  return (
    <div>
      <h1>Imagen base 64</h1>
      <input type="file" onChange={(e) => handleChangeImage(e)} />
      <button onClick={saveImage}></button>
      <img alt="" src={image} />
    </div>
  )
}

export default Image