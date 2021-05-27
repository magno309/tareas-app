import React, { useContext, useRef, useState } from 'react';

import { IonButton, IonButtons, IonCol, IonContent, IonDatetime, IonGrid, IonHeader, IonInput, IonItem, IonLabel, IonMenuButton, IonPage, IonRow, IonSegment, IonSegmentButton, IonTitle, IonToast, IonToolbar } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import ActivitiesContext, { ActivityType } from '../../data/activities-context';


const AddActivities: React.FC = () => {

    const history = useHistory();

    const titleInput = useRef<HTMLIonInputElement>(null);
    const descInput = useRef<HTMLIonInputElement>(null);
    const typeInput = useRef<HTMLIonSegmentElement>(null);
    const hourInput = useRef<HTMLIonDatetimeElement>(null);

    const activitiesCtxt = useContext(ActivitiesContext);

    const [toastMsg, setToastMsg] = useState<string>('');

    const addActivity = () => {
        const title = titleInput.current?.value as string;
        const description = descInput.current?.value as string;
        const type = typeInput.current?.value as ActivityType;
        const date = new Date(hourInput.current?.value as string);
        const hour = date.getHours() + ':' + date.getMinutes();

        if( title && description && type && hour){
            activitiesCtxt.addActivity(title, description, hour, type);
            setToastMsg("La actividad se ha guardado!");
            history.replace('/all-activities');
        }
    };

    return (
        <React.Fragment>
            <IonToast isOpen={!!toastMsg} message={toastMsg} duration={4000} color="medium" onDidDismiss={ () => setToastMsg('') }/>

            <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot='start'>
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>
                        Agregar actividad
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonGrid>
                    <IonRow>
                        <IonCol className="ion-text-center">
                            <IonSegment ref={typeInput}>
                                <IonSegmentButton value="Trabajo">
                                    <IonLabel>Trabajo</IonLabel>
                                </IonSegmentButton>
                                <IonSegmentButton value="Descanso">
                                    <IonLabel>Descanso</IonLabel>
                                </IonSegmentButton>
                                <IonSegmentButton value="Hobby">
                                    <IonLabel>Hobby</IonLabel>
                                </IonSegmentButton>
                            </IonSegment>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonLabel position="floating">Título:</IonLabel>
                                <IonInput ref={titleInput} type="text"></IonInput>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonLabel position="floating">Descripción:</IonLabel>
                                <IonInput ref={descInput} type="text"></IonInput>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonLabel position="floating">Hora de inicio:</IonLabel>
                                <IonDatetime ref={hourInput} display-format="h:mm A" pickerFormat="h:mm A" value={new Date().toISOString()} />
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol className="ion-text-center ion-margin-top">
                            <IonButton onClick={addActivity} expand="block" fill="outline">Agregar actividad</IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
        </React.Fragment>
    );
};

export default AddActivities;