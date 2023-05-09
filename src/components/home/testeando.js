import React, { useState, useEffect } from 'react';
import axios from 'axios';

 function Testeando() {
 const [data, setData] = useState(null);//data es para ocuparlo en el return
 const [webpayData, setWebpay] = useState("");
 const [queryData, setQuery] = useState([]);

 //Testeando imagenes
 const [selectedImage, setSelectedImage] = useState(null);
 const [image, setImage] = useState(null);
const [imageUrl, setImageUrl] = useState('');

 const handleImageChange = (event) => {
  setImage(event.target.files[0]);
};


// función de subida de imagen a un repositorio en línea
const uploadImage = async () => {
  const fileReader = new FileReader();
  fileReader.readAsDataURL(image);
  fileReader.onload = async () => {
    const base64Image = fileReader.result.split(',')[1];

  // Agrega tus propias credenciales
  const GITHUB_USERNAME = 'Jordan108';
  const GITHUB_TOKEN = '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';
  const REPO_NAME = 'reactImage';
  const FILE_PATH = 'main';
  const FILE_NAME = 'testFile4.png';

  const uploadUrl = `https://api.github.com/repos/${GITHUB_USERNAME}/${REPO_NAME}/contents/${FILE_PATH}/${FILE_NAME}`;

  const response = await axios({
    method: 'PUT',
    url: uploadUrl,
    headers: {
      'Authorization': `token ${GITHUB_TOKEN}`,
      'Content-Type': 'application/json'
    },
    data: {
      message: `Upload ${FILE_NAME}`,
      content: base64Image//formData.get('file')
    }
  });
  setImageUrl(response.data.content.download_url)
  console.log(response.data.content.download_url);
};
};



 //Crear transaccion de webpay
  async function createWebpayButton(){
    const res =  await axios.get('http://127.0.0.1:8000/webpayAPI/');
    setWebpay(res.data);
  }

  //hacer una consulta a oracle
  async function oracleButton(string){
    const response = await axios.get('/getCSRFToken');
    axios.defaults.headers.post['X-CSRF-Token'] = response.data.CSRFToken;

    console.log(response.data.CSRFToken);
    const params  = {
      query: string,//las query no deben terminar en ";"
    }
    const res = await axios.get('http://127.0.0.1:8000/oracleAPI/', {params});
    setQuery(res.data.query);
    console.log(res.data.query)
    
  }

  async function wspMessage(phn,msg){
    const params = {
      phone: phn,
      message: msg,
    }

    const res =  await axios.get('http://127.0.0.1:8000/wspMessage/', {params});

    setData(res.data);
    console.log(res.data);
  }
    
  return (
    <div>
      <div>
        <button onClick={createWebpayButton}>Ejecutar Webpay</button>
        <form method="post" action={webpayData.url}>
            <input type="hidden" name="token_ws" value={webpayData.token}/>
            <input type="submit" value={'Ir a pagar: $'+webpayData.amount}/>
        </form>
      </div>

      <div>
        <button onClick={() => oracleButton("SELECT * FROM jordan")}>SQL Query</button>
        <div>
            {queryData.map((item) => (
                <img alt="not found" width={"100px"} src={item[4]} />
            ))}
        </div>
      </div>

      <div>
        <button onClick={() => wspMessage("56930739222","Ola, este es el mensaje de prueba de react")}>Mandar mensaje por wsp</button>
      </div>

      {/* <div>
        <h1>Subir una imagen</h1>

        {selectedImage && (
          <div>
            <img alt="not found" width={"100px"} src={URL.createObjectURL(selectedImage)} />
            <br />
            <button onClick={() => setSelectedImage(null)}>Remove</button>
          </div>
        )}
        <br />
      </div> */}
      
      <div>
        <input type="file" onChange={handleImageChange} />
        <button onClick={uploadImage}>Cargar imagen</button>
      </div>

      <div>
        <img src={imageUrl}/>
      </div>
        
      


    </div>    
  );
}

export default Testeando;