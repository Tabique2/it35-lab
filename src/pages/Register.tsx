import React, { useState } from 'react';
import {
  IonButton,
  IonContent,
  IonInput,
  IonInputPasswordToggle,
  IonPage,
  IonTitle,
  IonToolbar,
  IonModal,
  IonText,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonLabel
} from '@ionic/react';

const Register: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showVerificationModal, setShowVerificationModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // Simple validation for email and password match
  const handleOpenVerificationModal = () => {
    if (!email.endsWith("@nbsc.edu.ph")) {
      alert("Only @nbsc.edu.ph emails are allowed to register.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    setShowVerificationModal(true);
  };

  // Handle registration (without Supabase)
  const doRegister = () => {
    setShowVerificationModal(false);

    // Simulate success (no real registration logic)
    setShowSuccessModal(true);
  };

  return (
    <IonPage>
      <IonContent className='ion-padding'>
        <h1>Create your account</h1>
        
        {/* Username input */}
        <IonInput
          style={{ marginTop: '20px' }}
          label="Username"
          labelPlacement="stacked"
          fill="outline"
          type="text"
          placeholder="Enter a unique username"
          value={username}
          onIonChange={e => setUsername(e.detail.value!)}
        />
        
        {/* Email input */}
        <IonInput
          style={{ marginTop: '15px' }}
          label="Email"
          labelPlacement="stacked"
          fill="outline"
          type="email"
          placeholder="youremail@nbsc.edu.ph"
          value={email}
          onIonChange={e => setEmail(e.detail.value!)}
        />
        
        {/* Password input */}
        <IonInput
          style={{ marginTop: '15px' }}
          label="Password"
          labelPlacement="stacked"
          fill="outline"
          type="password"
          placeholder="Password"
          value={password}
          onIonChange={e => setPassword(e.detail.value!)}
        >
          <IonInputPasswordToggle slot="end"></IonInputPasswordToggle>
        </IonInput>
        
        {/* Confirm Password input */}
        <IonInput
          style={{ marginTop: '15px' }}
          label="Confirm Password"
          labelPlacement="stacked"
          fill="outline"
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onIonChange={e => setConfirmPassword(e.detail.value!)}
        >
          <IonInputPasswordToggle slot="end"></IonInputPasswordToggle>
        </IonInput>
        
        {/* Register Button */}
        <IonButton
          style={{ marginTop: '15px' }}
          onClick={handleOpenVerificationModal}
          expand="full"
          shape="round"
        >
          Register
        </IonButton>
        
        {/* Redirect to login button */}
        <IonButton routerLink="/it35-lab" expand="full" fill="clear" shape="round">
          Already have an account? Signin
        </IonButton>

        {/* Verification Modal */}
        <IonModal isOpen={showVerificationModal} onDidDismiss={() => setShowVerificationModal(false)}>
          <IonToolbar className="ion-text-center" color="primary">
            <IonTitle>Confirm Registration</IonTitle>
          </IonToolbar>
          <IonContent className="ion-padding">
            <IonCard style={{ marginTop: '25%' }} className="ion-padding">
              <IonCardHeader>
                <IonCardTitle><h3>User Registration Details</h3></IonCardTitle>
                <hr />
                <IonCardSubtitle>Username</IonCardSubtitle>
                <IonCardTitle>{username}</IonCardTitle>
                <IonCardSubtitle>Email</IonCardSubtitle>
                <IonCardTitle>{email}</IonCardTitle>
              </IonCardHeader>
              <div style={{ display: 'flex', justifyContent: 'flex-end', marginRight: '5px' }}>
                <IonButton fill="clear" onClick={() => setShowVerificationModal(false)}>Cancel</IonButton>
                <IonButton className="ion-text-white" color="primary" onClick={doRegister}>Confirm</IonButton>
              </div>
            </IonCard>
          </IonContent>
        </IonModal>

        {/* Success Modal */}
        <IonModal isOpen={showSuccessModal} onDidDismiss={() => setShowSuccessModal(false)} color="primary">
          <IonContent className="ion-padding" style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            textAlign: 'center',
            marginTop: '35%'
          }}>
            <IonTitle style={{ marginTop: '35%' }}>Registration Successful 🎉</IonTitle>
            <IonText>
              <p>Your account has been created successfully.</p>
              <p>Please check your email address.</p>
            </IonText>
            <IonButton routerLink="/it35-lab" routerDirection="back" color="primary">
              Go to Login
            </IonButton>
          </IonContent>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default Register;
