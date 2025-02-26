import { 
    IonButton,
    IonButtons,
    IonContent, 
    IonHeader, 
    IonIcon, 
    IonItem, 
    IonMenu, 
    IonMenuButton, 
    IonMenuToggle, 
    IonPage, 
    IonRouterOutlet, 
    IonSplitPane, 
    IonTitle, 
    IonToolbar 
    } from '@ionic/react'
    import {homeOutline, logOutOutline, rocketOutline} from 'ionicons/icons';
    import { Redirect, Route } from 'react-router';
    import Home from './Home';
    import About from './About';
    import Details from './Details';
    
    const Menu: React.FC = () => {
    const path = [
    @@ -57,15 +58,16 @@
    
    <IonRouterOutlet id="main">
    <Route exact path="/it35-lab/app/home" component={Home} />
                        <Route exact path="/it35-lab/app/home/details" component={Details} />
    <Route exact path="/it35-lab/app/about" component={About} />
    
    <Route exact path="/it35-lab/app">
    <Redirect to="/it35-lab/app/home"/>
    </Route>
    </IonRouterOutlet>
    
    </IonSplitPane>
    </IonPage>
    );
    };
    