import {
  IonAlert,
  IonAvatar,
  IonButton,
  IonContent,
  IonInput,
  IonInputPasswordToggle,
  IonPage,
  IonToast,
  useIonRouter,
} from '@ionic/react';
import { useState } from 'react';
import { supabase } from '../utils/supabaseClient';

const AlertBox: React.FC<{ message: string; isOpen: boolean; onClose: () => void }> = ({
  message,
  isOpen,
  onClose,
}) => (
  <IonAlert
    isOpen={isOpen}
    onDidDismiss={onClose}
    header="Login Failed"
    message={message}
    buttons={['OK']}
  />
);

const Login: React.FC = () => {
  const navigation = useIonRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [isPasswordClicked, setIsPasswordClicked] = useState(false); // Flag for tracking password field click

  const doLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setAlertMessage(error.message);
      setShowAlert(true);
      return;
    }

    setShowToast(true);
    setTimeout(() => {
      navigation.push('/it35-lab/app', 'forward', 'replace');
    }, 300);
  };

  return (
    <IonPage>
      <IonContent
        fullscreen
        style={{
          backgroundImage: 'url("/it35-lab/gif2.webp")', // Set gif1.webp as background
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            backdropFilter: 'blur(6px)',
            padding: '16px',
          }}
        >
          <div
            style={{
              width: '100%',
              maxWidth: '400px',
              padding: '30px',
              borderRadius: '20px',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)',
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              color: 'white',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginBottom: '20px',
              }}
            >
              <IonAvatar style={{ width: '100px', height: '100px', marginBottom: '10px' }}>
                <img
                  src="/it35-lab/gif1.webp"
                  alt="Logo"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </IonAvatar>
              <h2 style={{ margin: 0, fontWeight: '600', fontSize: '24px', color: '#fff' }}>
                GEORGE COMPANY
              </h2>
              <p style={{ fontSize: '14px', color: '#ddd' }}>Login to your account</p>
            </div>

            {/* Email Input */}
            <IonInput
              label="Email"
              labelPlacement="floating"
              fill="outline"
              type="email"
              placeholder="you@nbsc.edu.ph"
              value={email}
              onIonChange={(e) => setEmail(e.detail.value!)}
              style={{
                '--color': 'white',
                '--placeholder-color': '#ccc',
                '--highlight-color-focused': 'white',
                '--border-color': 'white',
                '--box-shadow': '0 0 5px rgba(0, 0, 255, 0.5)',
              }}
            />

            {/* Password Input */}
            <IonInput
              label="Password"
              labelPlacement="floating"
              style={{
                marginTop: '15px',
                '--color': 'white',
                '--placeholder-color': '#ccc',
                '--highlight-color-focused': 'white',
                '--border-color': 'white',
                '--box-shadow': '0 0 5px rgba(0, 0, 255, 0.5)',
              }}
              fill="outline"
              type="password"
              placeholder="Enter your password"
              value={password}
              onIonChange={(e) => setPassword(e.detail.value!)}
              onClick={() => {
                if (!isPasswordClicked && !password && email) {
                  setPassword(email); // Auto-fill password with email if empty
                  setIsPasswordClicked(true); // Set the flag to true after password field is clicked
                }
              }}
            >
              <IonInputPasswordToggle slot="end" />
            </IonInput>

            {/* Login Button */}
            <IonButton
              onClick={doLogin}
              expand="block"
              shape="round"
              style={{ marginTop: '25px', fontWeight: 'bold' }}
            >
              Login
            </IonButton>

            {/* Register Button */}
            <IonButton
              routerLink="/it35-lab/register"
              expand="block"
              fill="clear"
              shape="round"
              style={{ marginTop: '10px', fontSize: '14px', color: 'white' }}
            >
              Don’t have an account? <strong>&nbsp;Register here</strong>
            </IonButton>
          </div>
        </div>

        {/* Alert Box for Errors */}
        <AlertBox message={alertMessage} isOpen={showAlert} onClose={() => setShowAlert(false)} />

        {/* Toast for Successful Login */}
        <IonToast
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          message="Login successful! Redirecting..."
          duration={1500}
          position="top"
          color="primary"
        />
      </IonContent>
    </IonPage>
  );
};

export default Login;
