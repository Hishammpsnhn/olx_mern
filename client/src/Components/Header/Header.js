import React, { useContext, useState } from 'react';
import './Header.css';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { AuthContext } from '../../store/Context';
import { useNavigate, Link } from 'react-router-dom';
import { SearchContext } from '../../store/SearchContext';
import { ProductContext } from '../../store/FpostContext';
import { useGlobalContext } from '../../store/PlaceContext'
import { payment, verifyPayment, search } from '../../Action/product';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import Place from './Place';
import { Button } from 'react-scroll';
import { Backdrop, CircularProgress } from '@mui/material';


function Header() {
  const navigate = useNavigate()
  const { user, setUser } = useContext(AuthContext)
  const { searching, setSearching } = useContext(SearchContext)
  const { product, setProduct } = useContext(ProductContext)
  const [quary, setQuary] = useState("")

  // search handleSubmit
  const searchSubmit = async () => {
    const searchPosts = await search(quary)

    setProduct(searchPosts);
  }
  const options = [
    'India', 'Japan', 'China'
  ];
  const defaultOption = options[0];

  //Logout User
  const handleLogout = () => {
    localStorage.clear()
    setUser(null)
  }
  
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };


  // Donatation payment handleSubmit
  const handleDonate = async () => {
    handleToggle();
    const data = await payment(50)
    handleClose();
    initPayment(data.data)
  }
  const initPayment = async (data) => {
    const options = {
      key: "rzp_test_HhSsjYjQIiCWod", // Enter the Key ID generated from the Dashboard
      amount: data.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: data.currency,
      name: "Donation",
      description: "Test Transaction",
      image: "https://img.freepik.com/free-photo/people-holding-rubber-heart_1150-18576.jpg?size=626&ext=jpg&ga=GA1.2.729129428.1659897314",
      order_id: data.id,
      handler: function (response) {
        console.log(response)
        try {
          verifyPayment(response)
          alert("payment is successfull")
        } catch (error) {
          console.log(error)
        }
      }
    }
    const rzpl = new window.Razorpay(options);
    rzpl.open();
  }

  return (
    <>
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
         // onClick={handleClose}
        >
          <CircularProgress color="inherit" />
        </Backdrop>

      <div className="headerParentDiv">
        <div className="headerChildDiv">
          <div onClick={()=> navigate('/')} className="brandName">
            <OlxLogo  />
          </div>
          <div className="placeSearch">
            <Dropdown options={options} value={defaultOption} placeholder="Select an option" />

          </div>
          <div className="productSearch">
            <div className="input">
              <input
                type="text"
                placeholder="Find car,mobile phone and more..."
                value={quary}
                onChange={(e) => setQuary(e.target.value)}
              />
            </div>
            <div className="searchAction" onClick={searchSubmit}>
              <Search color="#ffffff"></Search>
            </div>
          </div>
          <div className="language">
            <span> ENGLISH </span>
            <Arrow></Arrow>
          </div>
          {user?.result && <button className="donateButton" onClick={handleDonate} ><VolunteerActivismIcon />
            <CurrencyRupeeIcon style={{ width: '15px', height: '15px' }} />50</button>}
          <div className="loginPage">
            <span>{user ? `${user?.result?.username} ` : <button className="donateButton" onClick={() => navigate('/login')}>Login</button>}</span>
            <hr />
          </div>
          {user?.result && <button className="donateButton" onClick={handleLogout} >Logout</button>}
          <div className="sellMenu">
            <SellButton></SellButton>
            <div className="sellMenuContent"
              onClick={() => user?.result ? navigate('/create') : navigate('/login')}>
              <SellButtonPlus></SellButtonPlus>
              <span>SELL</span>
            </div>
          </div>

        </div>
      </div>
    
    </>
  );
}

export default Header;
