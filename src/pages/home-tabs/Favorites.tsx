import {
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';

const Favorites: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle style={{ fontWeight: 'bold' }}>Favorites</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="ion-padding" style={{ backgroundColor: '#f5f5f5' }}>
        {/* Trading Card */}
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>📈 Trading</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            I love analyzing financial markets, studying crypto and stocks, and keeping up with global economic trends.
          </IonCardContent>
        </IonCard>

        {/* Basketball Card */}
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>🏀 Basketball</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            Basketball is my go-to sport — I enjoy playing with friends and watching games to learn new skills and strategies.
          </IonCardContent>
        </IonCard>

        {/* Mobile Games Card */}
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>🎮 Mobile Games</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            Mobile games are a fun way to relax. I enjoy games like strategy, puzzles, and action-packed adventures on my phone.
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Favorites;
