import React from 'react';
import { 
  IonButtons,
  IonContent, 
  IonHeader, 
  IonMenuButton, 
  IonPage, 
  IonTitle, 
  IonToolbar,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonItem,
  IonLabel,
  IonButton
} from '@ionic/react';

const Feed: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Feed</IonTitle>
        </IonToolbar>
      </IonHeader>
      
      <IonContent fullscreen>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            flexDirection: 'column',
            padding: '16px',
            backgroundColor: '#f4f4f4',
          }}
        >
          {/* NBA News Card */}
          <IonCard style={{ marginBottom: '20px', width: '100%', backgroundColor: '#f9f9f9', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' }}>
            <IonCardHeader style={{ backgroundColor: '#4caf50', color: '#fff', borderRadius: '10px 10px 0 0' }}>
              <IonCardTitle>NBA News: The Latest Highlights</IonCardTitle>
              <IonCardSubtitle>March 2025</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
              <IonItem style={{ marginBottom: '10px' }}>
                <IonLabel>
                  The latest NBA highlights: A recap of the top games and moments of the week.
                </IonLabel>
              </IonItem>
              <IonButton expand="full" color="primary">
                Read More
              </IonButton>
              {/* Additional Buttons */}
              <IonButton expand="block" style={{ marginTop: '10px' }}>
                Block
              </IonButton>
              <IonButton expand="full" style={{ marginTop: '10px' }}>
                Full
              </IonButton>
            </IonCardContent>
          </IonCard>

          {/* Crypto News Card */}
          <IonCard style={{ marginBottom: '20px', width: '100%', backgroundColor: '#f9f9f9', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' }}>
            <IonCardHeader style={{ backgroundColor: '#ff9800', color: '#fff', borderRadius: '10px 10px 0 0' }}>
              <IonCardTitle>Crypto Market Update</IonCardTitle>
              <IonCardSubtitle>Bitcoin & Ethereum Trends</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
              <IonItem style={{ marginBottom: '10px' }}>
                <IonLabel>
                  The crypto market is fluctuating again, with Bitcoin reaching new heights. Learn more about the current trends.
                </IonLabel>
              </IonItem>
              <IonButton expand="full" color="secondary">
                Read More
              </IonButton>
              {/* Additional Buttons */}
              <IonButton expand="block" style={{ marginTop: '10px' }}>
                Block
              </IonButton>
              <IonButton expand="full" style={{ marginTop: '10px' }}>
                Full
              </IonButton>
            </IonCardContent>
          </IonCard>

          {/* Donald Trump News Card */}
          <IonCard style={{ marginBottom: '20px', width: '100%', backgroundColor: '#f9f9f9', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' }}>
            <IonCardHeader style={{ backgroundColor: '#2196f3', color: '#fff', borderRadius: '10px 10px 0 0' }}>
              <IonCardTitle>Donald Trump: What's Next?</IonCardTitle>
              <IonCardSubtitle>March 2025</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
              <IonItem style={{ marginBottom: '10px' }}>
                <IonLabel>
                  A deep dive into Donald Trump's latest moves in the political arena.
                </IonLabel>
              </IonItem>  
              <IonButton expand="full" color="tertiary">
                Read More
              </IonButton>
              {/* Additional Buttons */}
              <IonButton expand="block" style={{ marginTop: '10px' }}>
                Block
              </IonButton>
              <IonButton expand="full" style={{ marginTop: '10px' }}>
                Full
              </IonButton>
            </IonCardContent>
          </IonCard>

          {/* Global Economy News Card */}
          <IonCard style={{ marginBottom: '20px', width: '100%', backgroundColor: '#f9f9f9', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' }}>
            <IonCardHeader style={{ backgroundColor: '#9c27b0', color: '#fff', borderRadius: '10px 10px 0 0' }}>
              <IonCardTitle>Global Economy Insights</IonCardTitle>
              <IonCardSubtitle>2025 Economic Trends</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
              <IonItem style={{ marginBottom: '10px' }}>
                <IonLabel>
                  Insights into the global economy and its impact on different sectors around the world.
                </IonLabel>
              </IonItem>
              <IonButton expand="full" color="danger">
                Read More
              </IonButton>
              {/* Additional Buttons */}
              <IonButton expand="block" style={{ marginTop: '10px' }}>
                Block
              </IonButton>
              <IonButton expand="full" style={{ marginTop: '10px' }}>
                Full
              </IonButton>
            </IonCardContent>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Feed;
