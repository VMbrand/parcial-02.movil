import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import Products from '../components/Products';
import InvoiceForm from '../components/Invoice';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Carrito</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Carrito</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Products />
        <InvoiceForm />
      </IonContent>
    </IonPage>
  );
};

export default Home;
