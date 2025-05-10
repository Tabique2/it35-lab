import { 
  IonButtons,
  IonContent, 
  IonHeader, 
  IonMenuButton, 
  IonPage, 
  IonTitle, 
  IonToolbar, 
  IonSearchbar, 
  IonText 
} from '@ionic/react';

const Search: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>Search</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            padding: '0 20px',
            backgroundColor: '#f7f7f7', // Light background color
            color: '#333',
          }}
        >
          {/* Search Bar with Colorful Style */}
          <IonSearchbar
            debounce={500}
            showClearButton="focus"
            placeholder="Search for news..."
            style={{
              width: '100%',
              maxWidth: '500px',
              marginBottom: '20px',
              backgroundColor: '#ffffff', // white background
              borderRadius: '10px', // rounded corners
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // subtle shadow for depth
            }}
          />
          
          {/* News Section */}
          <div
            style={{
              width: '100%',
              maxWidth: '500px',
              padding: '15px',
              backgroundColor: '#fffcf9', // light beige background
              borderRadius: '10px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              marginBottom: '30px',
            }}
          >
            <IonText color="primary">
              <h3>Latest News</h3>
            </IonText>
            <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
              <li style={{ marginBottom: '10px', color: '#007aff' }}>
                <strong>Breaking News:</strong> Major tech companies announce new AI breakthroughs.
              </li>
              <li style={{ marginBottom: '10px', color: '#007aff' }}>
                <strong>Sports:</strong> Local team wins championship in a thrilling final.
              </li>
              <li style={{ marginBottom: '10px', color: '#007aff' }}>
                <strong>Entertainment:</strong> Upcoming movie releases to look out for this summer.
              </li>
            </ul>
          </div>
          
          {/* Search result placeholder */}
          <div
            style={{
              textAlign: 'center',
              fontSize: '16px',
              color: '#888',
            }}
          >
            Search results will appear here.
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Search;
