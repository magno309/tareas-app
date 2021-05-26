import React from 'react';

import { IonButtons, IonCol, IonContent, IonHeader, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';


const AllActivities: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>
                        Todas las actividades
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonRow>
                    <IonCol>
                        <h1>Todas las actividades funciona</h1>
                    </IonCol>
                </IonRow>
            </IonContent>
        </IonPage>
    );
};

export default AllActivities;