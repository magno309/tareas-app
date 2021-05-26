import React from 'react';

import { IonCol, IonContent, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';


const AddActivities: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>
                        Agregar actividad
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonRow>
                    <IonCol>
                        <h1>Agregar Actividad</h1>
                    </IonCol>
                </IonRow>
            </IonContent>
        </IonPage>
    );
};

export default AddActivities;