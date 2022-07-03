import React, { useState, Fragment, useContext } from 'react';
import './Create.css';
import Header from '../Header/Header';
import { useNavigate } from 'react-router-dom';
import FileBase64 from 'react-file-base64'
import { AuthContext } from '../../store/Context';
import { ProductContext } from '../../store/FpostContext';
import { createPost } from '../../Action/product';

const Create = () => {
  const { product, } = useContext(ProductContext)

  const navigate = useNavigate()
  const { user } = useContext(AuthContext)

  const initialState = { name: '', catagory: '', price: '', image: '' }
  const [data, setData] = useState(initialState)
  const date = new Date()

  const handleSubmit = (e) => {
    e.preventDefault()
    createPost(data)

  }
  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
          <form>
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="Name"
              value={data.name}
              onChange={(e) => setData({ ...data, name: (e.target.value) })}
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="category"
              value={data.catagory}
              onChange={(e) => setData({ ...data, catagory: (e.target.value) })}
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input className="input" type="number" id="fname" name="Price"
              value={data.price}
              onChange={(e) => setData({ ...data, price: (e.target.value) })} />
            <br />

          </form>
          <br />
          {/* <img alt="Posts" width="200px" height="200px" src={image ? URL.createObjectURL(image) : ''}></img> */}
          <form>
            <br />
            <FileBase64
              type='file'
              multiple={false}
              onDone={({ base64 }) => setData({ ...data, image: base64 })}
            />
            <br />
            <button onClick={handleSubmit} className="uploadBtn">upload and Submit</button>
          </form>
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
