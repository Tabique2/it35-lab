import { 
  IonButtons, 
  IonContent, 
  IonHeader, 
  IonMenuButton, 
  IonPage, 
  IonTitle, 
  IonToolbar, 
  IonCard, 
  IonCardHeader, 
  IonCardTitle, 
  IonCardContent, 
  IonAvatar, 
  IonText, 
  IonItem, 
  IonLabel 
} from '@ionic/react';

const About: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>About</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen style={{ backgroundColor: '#f0f2f5' }}>
        {/* Profile Header */}
        <div style={{ textAlign: 'center', padding: '20px 0', backgroundColor: '#ffffff' }}>
          <IonAvatar style={{ marginBottom: '15px', width: '120px', height: '120px', margin: '0 auto' }}>
            <img
              src="https://media4.giphy.com/media/J1ujvTZBiOqYVwEugo/200.webp?cid=ecf05e47smjt1mzupcevxwuj0fg7j5xd9esn7x4svw9uzb0z&ep=v1_gifs_search&rid=200.webp&ct=g"
              alt="Profile"
              style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }}
            />
          </IonAvatar>
          <IonCard style={{ boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', margin: '0 auto', width: '90%', maxWidth: '500px' }}>
            <IonCardHeader>
              <IonCardTitle style={{ fontSize: '1.8em', fontWeight: 'bold' }}>Frank Joseph Tabique</IonCardTitle>
              <IonText style={{ fontSize: '1.2em', color: '#666' }}>Aspiring Learning FrontEnd Developer | Active Crypto Trader</IonText>
            </IonCardHeader>
            <IonCardContent>
              <p>
                Passionate about blockchain technology, cryptocurrency trading, and financial markets. Currently focusing on creating innovative web and mobile applications while deepening my understanding of crypto assets, trading strategies, and airdrop opportunities.
              </p>
            </IonCardContent>
          </IonCard>
        </div>

        {/* Skills Section */}
        <IonCard style={{ margin: '20px', borderRadius: '8px' }}>
          <IonCardHeader>
            <IonCardTitle style={{ fontWeight: 'bold', color: '#3f51b5' }}>Skills & Expertise</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonItem lines="none">
              <IonLabel>⚡ Cryptocurrency Trading | Technical Analysis | Market Research</IonLabel>
            </IonItem>
            <IonItem lines="none">
              <IonLabel>⚡ Airdrop Participation | Tokenomics | ICOs & STOs</IonLabel>
            </IonItem>
            <IonItem lines="none">
              <IonLabel>⚡ Blockchain Technologies | Ethereum | Bitcoin | DeFi</IonLabel>
            </IonItem>
            <IonItem lines="none">
              <IonLabel>⚡ Web & Mobile Development | React | TypeScript | Node.js</IonLabel>
            </IonItem>
            <IonItem lines="none">
              <IonLabel>⚡ Decentralized Applications (dApps) | Smart Contracts</IonLabel>
            </IonItem>
          </IonCardContent>
        </IonCard>

        {/* Contact Section */}
        <IonCard style={{ margin: '20px', borderRadius: '8px' }}>
          <IonCardHeader>
            <IonCardTitle style={{ fontWeight: 'bold', color: '#3f51b5' }}>Contact</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonItem lines="none">
              <IonLabel>Email: <a href="mailto:your-email@example.com">franktabique10@gmail.com</a></IonLabel>
            </IonItem>
            <IonItem lines="none">
              <IonLabel>
                <a href="https://github.com/Tabique2" target="_blank" rel="noopener noreferrer">GitHub</a>
              </IonLabel>
            </IonItem>
            <IonItem lines="none">
              <IonLabel>
                <a href="https://www.linkedin.com/in/frank-joseph-tabique-71a0b52b5" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </IonLabel>
            </IonItem>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default About;
