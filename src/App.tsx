import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenu, IonMenuToggle, IonRouterOutlet, IonTitle, IonToolbar } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Device } from '@capacitor/device';
import { Dialog } from '@capacitor/dialog';
import { Clipboard } from '@capacitor/clipboard';
import { Toast } from '@capacitor/toast';

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
import { addOutline, homeOutline, informationCircleOutline} from 'ionicons/icons';
import ActivitiesContextProvider from './data/ActivitiesContextProvider';

const toastClipboard = async () => {
  await Toast.show({
    text: 'Información copiada en portapapeles',
    duration: 'short'
  });
};

const writeToClipboard = async (str: string) => {
  await Clipboard.write({
    string: str
  });
  toastClipboard();
};

const showConfirm = async (info: string) => {
  const { value } = await Dialog.confirm({
    title: 'Información del dispositivo',
    message: info,
    cancelButtonTitle: 'COPIAR'
  });
  console.log('Dialog:', value);
  if(!value){
    writeToClipboard(info)
  }
};

const deviceInfo = async () => {
  const info = await Device.getInfo();  
  console.log('Device info:', info);
  var strInfo: string = "Nombre: "+info.name+
    "\nModelo: "+info.model+
    "\nSistema Operativo: "+info.operatingSystem+
    "\nVersión: "+info.osVersion;
  showConfirm(strInfo);
};

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonMenu contentId="appTareas" side="start" menuId="appTareas">
        <IonHeader>
          <IonToolbar color="primary">
            <IonTitle>Menú principal</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <IonMenuToggle>
              <IonItem routerLink="/all-activities" routerDirection="none" lines="none">
                <IonIcon color="medium" slot="start" icon={homeOutline} />
                <IonLabel>Todas las actividades</IonLabel>
              </IonItem>
            </IonMenuToggle>
            <IonMenuToggle>
              <IonItem routerLink="/add-activities" routerDirection="none" lines="none">
                <IonIcon color="medium" slot="start" icon={addOutline} />
                <IonLabel>Agregar actividad</IonLabel>
              </IonItem>
            </IonMenuToggle>
            <IonMenuToggle>
              <IonItem routerDirection="none" lines="none" onClick={deviceInfo}>
                <IonIcon color="medium" slot="start" icon={informationCircleOutline} />
                <IonLabel>Información del dispositivo</IonLabel>
              </IonItem>
            </IonMenuToggle>
          </IonList>
        </IonContent>
      </IonMenu>
      <ActivitiesContextProvider>
        <IonRouterOutlet id="appTareas">
          <Route path="/all-activities" component={AllActivities} exact />
          <Route path="/add-activities" component={AddActivities} exact />
          <Redirect to="/all-activities" />
        </IonRouterOutlet>
      </ActivitiesContextProvider>
    </IonReactRouter>
  </IonApp>
);

export default App;
