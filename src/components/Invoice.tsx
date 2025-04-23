import React, { useState } from 'react';

const InvoiceForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    documentNumber: '',
    phone: '',
    email: '',
    address: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <form onSubmit={handleSubmit} id="invoice-form">
      <label>
        Nombre:
        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
      </label>
      <label>
        Apellido:
        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
      </label>
      <label>
        Nro Documento:
        <input type="text" name="documentNumber" value={formData.documentNumber} onChange={handleChange} required />
      </label>
      <label>
        Teléfono:
        <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />
      </label>
      <label>
        Correo Electrónico:
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </label>
      <label>
        Dirección:
        <input type="text" name="address" value={formData.address} onChange={handleChange} required />
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default InvoiceForm;