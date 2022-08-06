import React, { useContext, useState } from 'react';
import './Header.css';
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
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

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

  //Logout User
  const handleLogout = () => {
    localStorage.clear()
    setUser(null)
  }

  // Donatation payment handleSubmit
  const handleDonate = async () => {
    const data = await payment(50)
    initPayment(data.data)
  }
  const initPayment = async (data) => {
    const options = {
      key: "rzp_test_HhSsjYjQIiCWod", // Enter the Key ID generated from the Dashboard
      amount: data.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: data.currency,
      name: "Donation",
      description: "Test Transaction",
      image: "https://example.com/your_logo",
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
      <div className="headerParentDiv">
        <div className="headerChildDiv">
          <div className="brandName">
            <OlxLogo />
          </div>
          <div className="placeSearch">
            <input type="text" defaultValue="India" />
            <KeyboardArrowDownIcon />
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
