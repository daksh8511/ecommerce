import {PayPalButtons, PayPalScriptProvider} from '@paypal/react-paypal-js'

const PaypalButton = ({amount, onSuccess, onError}) => {
    return <PayPalScriptProvider options={{clientId : 'AcI0JVOndscnKbNhBkhfivoCteCCJ9IDF5K5KrAAxEZvKx4IBlp_dRtFRKivO6hV1zY3N4fq5ROE_QDe'}}>
        <PayPalButtons createOrder={(data, actions) => {
            return actions.order.create({
                purchase_units : [{amount : amount}]
            })
        }} onApprove={(data, actions) => {
            return actions.order.capture().then(onSuccess)
        }} onError={onError}  ></PayPalButtons>
    </PayPalScriptProvider>
}

export default PaypalButton