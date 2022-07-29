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
import { payment,verifyPayment } from '../../Action/product';
import Place from './Place';
import Razorpay from 'razorpay';
function Header() {
  const { openplace } = useGlobalContext()
  const { product, setProduct } = useContext(ProductContext)

  const { user, setUser } = useContext(AuthContext)

  const searchSubmit = () => {

  }

  const { searching, setSearching } = useContext(SearchContext)

  const handleLogout = () => {
    localStorage.clear()
    setUser(null)
  }
  const handlechange = (e) => {

  }
  const initPayment = async (data) => {
    
    const options = {
      key: "rzp_test_HhSsjYjQIiCWod", // Enter the Key ID generated from the Dashboard
      amount: data.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: data.currency,
      name: "donation",
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: data.id,
      handler: function  (response){
        console.log(response)
        alert(response)
        try{
          verifyPayment(response)
        }catch(error){
          console.log(error)
        }
      }

    }
    const rzpl = new window.Razorpay(options);
    rzpl.open();
  }
  const handleDonate = async () => {
    const data = await payment(50)
    initPayment(data.data)
  }
  const navigate = useNavigate()
  return (
    <>
      <div className="headerParentDiv">
        <div className="headerChildDiv">
          <div className="brandName">
            <OlxLogo />
          </div>
          <div className="placeSearch">
            <Search></Search>
            <input type="text" defaultValue="India" />
            <div>
              <Arrow></Arrow>
            </div>

          </div>
          <div className="productSearch">
            <div className="input">
              <input
                type="text"
                placeholder="Find car,mobile phone and more..."
              // value={searching}
              // onChange={handlechange}
              />
            </div>
            <div className="searchAction" onClick={searchSubmit}>
              <Search color="#ffffff"></Search>
            </div>
          </div>
          <div className="language">
            <span> ENGLISH </span>
            <Arrow></Arrow>
            <button onClick={handleDonate} >Donate</button>
          </div>
          <div className="loginPage">
            <span>{user ? `${user?.result?.username} ` : <button onClick={() => navigate('/login')}>Login</button>}</span>
            <hr />
          </div>
          {user?.result && <button onClick={handleLogout} >Logout</button>}

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
