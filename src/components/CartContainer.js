import { useDispatch, useSelector } from 'react-redux';
import CartItem from './CartItem';
import { openModal } from '../redux/features/modal/modalSlice';

const CartContainer = () => {
  const dispatch = useDispatch();
  const { cartItems, total, amount } = useSelector((store) => store.cart);
  
  if (amount < 1) {
    return (
      <section className='cart'>
        <header>
          <h2>Your bag</h2>
          <h4 className='empty-cart'>is currently empty</h4>
        </header>
      </section>
    );
  };

  // function to format number with Intl.NumberFormat() method.
  const formatNumberWithDollar = (total) => {
    let formatting_options = {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    };
    let dollarString = new Intl.NumberFormat("en-US", formatting_options);
    return dollarString.format(total);
  };

  return (
    <section className='cart'>
      <header>
        <h2>your bag</h2>
      </header>
      <div>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />
        })}
      </div>

      <footer>
        <hr />
        <div className='total'>
          <h4>
            Total <span>{formatNumberWithDollar(total)}</span>
          </h4>
        </div>
        <button className='btn clear-btn' onClick={() => dispatch(openModal())}>
          Clear cart
        </button>
      </footer>
    </section>
  )
}

export default CartContainer