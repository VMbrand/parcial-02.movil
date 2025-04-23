import React, { useState } from 'react';
import './ExploreContainer.css';

const Payment: React.FC = () => {
  const [selectedMethod, setSelectedMethod] = useState('');

  const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedMethod(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Selected Payment Method:', selectedMethod);
  };

  return (
    <form onSubmit={handleSubmit} id="payment-form">
      <h2>Selecciona el método de pago</h2>
      <label>
        <input
          type="radio"
          name="paymentMethod"
          value="creditCard"
          checked={selectedMethod === 'creditCard'}
          onChange={handlePaymentChange}
        />
        Tarjeta de Crédito
      </label>
      <label>
        <input
          type="radio"
          name="paymentMethod"
          value="debitCard"
          checked={selectedMethod === 'debitCard'}
          onChange={handlePaymentChange}
        />
        Tarjeta de Débito
      </label>
      <label>
        <input
          type="radio"
          name="paymentMethod"
          value="paypal"
          checked={selectedMethod === 'paypal'}
          onChange={handlePaymentChange}
        />
        PayPal
      </label>
      <label>
        <input
          type="radio"
          name="paymentMethod"
          value="cash"
          checked={selectedMethod === 'cash'}
          onChange={handlePaymentChange}
        />
        Efectivo
      </label>
      <button type="submit">Confirmar</button>
    </form>
  );
};

export default Payment;