import { 
  IonButtons, 
  IonContent, 
  IonHeader, 
  IonMenuButton, 
  IonPage, 
  IonTitle, 
  IonToolbar 
} from '@ionic/react';

const Template: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>Template</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent 
        fullscreen 
        style={{
          backgroundImage: 'url("/it35-lab/gif2.webp")', // Change to your desired image path
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
      </IonContent>
    </IonPage>
  );
};

export default Template;
