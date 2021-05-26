import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenu, IonRouterOutlet, IonTitle, IonToolbar } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import AllActivities from './pages/AllActivities/AllActivities';
import AddActivities from './pages/AddActivities/AddActivity';
import { addOutline, homeOutline } from 'ionicons/icons';
import ActivitiesContextProvider from './data/ActivitiesContextProvider';


const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonMenu side="start" menuId="menuApp">
        <IonHeader>
          <IonToolbar color="primary">
            <IonTitle>Menú principal</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <IonItem routerLink="/all-activities" routerDirection="none" lines="none">
              <IonIcon color="medium" slot="start" icon={homeOutline}/>
              <IonLabel>Todas las actividades</IonLabel>
            </IonItem>
            <IonItem routerLink="/add-activities" routerDirection="none" lines="none">
              <IonIcon color="medium" slot="start" icon={addOutline}/>
              <IonLabel>Agregar actividad</IonLabel>
            </IonItem>
          </IonList>
        </IonContent>
      </IonMenu>
      <IonRouterOutlet id="menuApp">
        <Route path="/all-activities" component={AllActivities} exact />
        <Route path="/add-activities" component={AddActivities} exact />
        <Redirect to="/all-activities" />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
