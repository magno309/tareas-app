import React, { useContext } from 'react';
import classes from './AllActivities.module.css';

import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonItem, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import ActivitiesContext from '../../data/activities-context';


const AllActivities: React.FC = () => {

    const activitiesCtxt = useContext(ActivitiesContext);

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Todas las actividades</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonGrid>
                    {activitiesCtxt.activities.map(activity => (
                        <IonRow key={activity.id}>
                            <IonCol className="ion-text-center">
                                <IonCard>
                                    <img src={activity.imageUrl} alt="Actividad" />
                                    <IonCardHeader>
                                        <IonCardTitle>{activity.hour}</IonCardTitle>
                                        <IonCardSubtitle>{activity.title}</IonCardSubtitle>
                                    </IonCardHeader>
                                    <IonCardContent>
                                        <p>{activity.description}</p>
                                        <IonItem lines="none">
                                            <IonButton className={classes.FullWidth} fill="clear">
                                                Completar Actividad
                                        </IonButton>
                                        </IonItem>
                                    </IonCardContent>
                                </IonCard>
                            </IonCol>
                        </IonRow>
                    ))
                    }
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default AllActivities;