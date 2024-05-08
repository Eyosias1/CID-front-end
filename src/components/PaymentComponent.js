import React from 'react';
import "./PaymentComplete.css"

function PaymentComponent() {

    return (
        <div className='PaymentComponent section'>
            <div className='Stripe-button'>
                {/* <stripe-buy-button
                    buy-button-id="buy_btn_1PC7Ba08xYl0mIJxwAK4pt3l"
                    publishable-key="pk_live_51PC6XD08xYl0mIJxIQ5biipJpv9j4Ll8m9fjTMRWnTEt7WfkykEYcdxUK0D0gPjW74HbWV4cmDkSESQIBgs7FEPe00p2rsXToh">
                </stripe-buy-button> */}

                    {/* <stripe-buy-button
                        buy-button-id="buy_btn_1PC7Ba08xYl0mIJxwAK4pt3l"
                        publishable-key="pk_live_51PC6XD08xYl0mIJxIQ5biipJpv9j4Ll8m9fjTMRWnTEt7WfkykEYcdxUK0D0gPjW74HbWV4cmDkSESQIBgs7FEPe00p2rsXToh"
                    >
                    </stripe-buy-button> */}

                    <stripe-buy-button
                            buy-button-id="buy_btn_1PEG3B08xYl0mIJxsREeD5oh"
                            publishable-key="pk_live_51PC6XD08xYl0mIJxIQ5biipJpv9j4Ll8m9fjTMRWnTEt7WfkykEYcdxUK0D0gPjW74HbWV4cmDkSESQIBgs7FEPe00p2rsXToh"
                    >
                    </stripe-buy-button>
            </div>
        </div>
    );
}

export default PaymentComponent;