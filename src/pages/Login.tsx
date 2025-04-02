import { 
  IonButton,
  IonContent, 
  IonHeader, 
  IonPage,  
  IonTitle,  
  IonToolbar,  
  IonInput, 
  IonAvatar,
  IonIcon,
  useIonRouter
} from '@ionic/react';
import { logoIonic } from 'ionicons/icons';
import { useState } from 'react';

const Login: React.FC = () => {
  const navigation = useIonRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Navigate after login (this can be further implemented with actual logic)
  const doLogin = () => {
    if (email && password) {
      navigation.push('/it35-lab/app', 'forward', 'replace');
    } else {
      alert('Please enter both email and password.');
    }
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '25%',
          }}
        >
          <IonAvatar
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '150px',
              height: '150px',
              borderRadius: '50%',
              overflow: 'hidden',
            }}
          >
            <IonIcon
              icon={logoIonic}
              color="primary"
              style={{ fontSize: '120px', color: '#6c757d' }}
            />
          </IonAvatar>
          <h1 style={{ textAlign: 'center' }}>USER LOGIN</h1>

          <IonInput
            label="Email"
            labelPlacement="floating"
            fill="outline"
            type="email"
            placeholder="Enter Email"
            value={email}
            onIonChange={(e) => setEmail(e.detail.value!)}
            style={{ marginTop: '15px' }}
          />
          <IonInput
            label="Password"
            labelPlacement="floating"
            fill="outline"
            type="password"
            placeholder="Enter Password"
            value={password}
            onIonChange={(e) => setPassword(e.detail.value!)}
            style={{ marginTop: '15px' }}
          />
        </div>

        <IonButton onClick={doLogin} expand="full" shape="round" style={{ marginTop: '15px' }}>
          Login
        </IonButton>

        <IonButton routerLink="/it35-lab/register" expand="full" fill="clear" shape="round" style={{ marginTop: '10px' }}>
          Don't have an account? Register here
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Login;
