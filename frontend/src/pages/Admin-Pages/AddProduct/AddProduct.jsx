import Navbar from '../../../Components/Admin/Navbar/Navbar';
import Input from '../../../Components/Input/Input';
import Button from '../../../Components/Button/Button';
import { useEffect, useState } from 'react';
import './AddProduct.css';
import { ToastContainer, toast } from 'react-toastify';
import axios from '../../../utils/axios';
import { useNavigate } from 'react-router-dom';

const Products = () => {
  const [product, setProduct] = useState({
    category: '',
    price: '',
    description: '',
    image: '',
  });
  const [imagethere, setImgagethere] = useState(false);
  const navigate = useNavigate();
  const onChange = (e, key) => {
    setProduct({ ...product, [key]: e.target.value });
  };

  console.log(product);

  const onUploadImage = async (e, key) => {
    try {
      const imageData = e.target.files[0];

      const formData = new FormData();

      formData.append('avatar', imageData);

      const response = await axios.post('/upload-img', formData);

      // console.log('Upload details :', response.data);

      if (response.data.imageUrl) {
        setProduct({ ...product, [key]: response.data.imageUrl });
      } else {
        console.error('Image URL missing in response:', response.data);
      }
      toast.success('Image added successfully!');
      setImgagethere(true);
    } catch (e) {
      console.log('image upload failed', e);
      toast.error('Failed to add product. Try again later.');
    }
  };

  const onClick = async () => {
    try {
      if (imagethere) {
        const formattedProduct = { ...product, price: Number(product.price) };
        console.log(formattedProduct);
        await axios.post('/product', formattedProduct);
        navigate('/admin/all-products');
      } else {
        toast.warn('Wait! The image is being uploaded.', {
          position: 'top-right',
          autoClose: 3000, // Message disappears after 3 seconds
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <>
      <Navbar />
      <ToastContainer />
      <div className="add-product">
        <h1>Add Products</h1>
        <div className="add_product">
          <Input
            label="Name|Category"
            className="add_product_input"
            onChange={e => onChange(e, 'category')}
          />
          <Input
            label="Price"
            className="add_product_input"
            type="Number"
            onChange={e => {
              onChange(e, 'price');
            }}
          />
          <Input
            label="Description"
            className="add_product_input"
            onChange={e => {
              onChange(e, 'description');
            }}
          />
          <Input
            label="image"
            type="file"
            onChange={e => {
              onUploadImage(e, 'image');
            }}
          />
          <div className="add_product_button">
            <Button text="ADD" className="add_product_btn" onClick={onClick} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
