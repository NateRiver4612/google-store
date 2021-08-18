import StripeCheckout from 'react-stripe-checkout';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import axios from 'axios';
const StripeCheckoutButton = ({price,content,total})=>{
    const priceForStripe = price*100
    const publishableKey = "pk_test_51JOLZMF0RXpkTkFSFLqznUqj9jVy3BMJpJ9ELRNBVJrvES6x4kKyiqelyBTSPKjxi8qw3T2Gj7syKKeO7UGop8Ie00hgX7zMCJ"
    const onToken = token => {
        axios({
          url:'payment',
          method:'post',
          data:{
            amount: priceForStripe,
            token
          }
        }).then(response=> {
          alert("payment successful")
        }).catch(error=>{
          console.log('Payment error:',JSON.parse(error))
          alert(
            'There was an issue with your payment.Please sure you use the provided credit card'
          )
        })
    
    
        alert('Payment Succesful!');
      };
    return (
        <Container>
        <StripeCheckout
           name = 'Google Play'
           billingAddress
           shippingAddress
           image="https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.15752-9/s2048x2048/228085913_714575273276171_6064261169318172546_n.png?_nc_cat=102&ccb=1-4&_nc_sid=ae9488&_nc_ohc=jdbXs-KAlFQAX8tGhVZ&_nc_ht=scontent.fsgn2-5.fna&oh=0a8266e782334f2fe635a3dc4e6bc836&oe=613B4933"
           description={`Your total is ${price}.000 VND`}
           amount = {priceForStripe}
           panelLabel = 'Pay now'
           token = {onToken}
           allowRememberMe 
           class=" "
           stripeKey={publishableKey}            
        >
        <BuyButton className={total? "total": "buy" } style={{fontSize:'12px'}}>
            {content}
        </BuyButton>
        </StripeCheckout>
        </Container>
    )
}
const Container = styled.div`
    cursor:pointer;
    border-radius: 4px;
    background-color:#ed3b3b !important;
    color:white !important;
    font-size: 14px !important;
`
const BuyButton = styled(Button).attrs(props=>({
  className:props.classname
}))`
    margin: 0 !important;
    color:white !important;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif !important;
    height:fit-content;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset !important;
    text-transform: capitalize !important;
    font-weight: bold !important;

    &.buy{
      font-size: 14px !important;
    }
    &.total{
      font-size: 17px !important;
    }
`

export default StripeCheckoutButton