import React, { useContext, useState } from 'react';
import classes from './AllActivities.module.css';

import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonMenuButton, IonModal, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import ActivitiesContext, { Activity } from '../../data/activities-context';
import CompleteModal from '../../components/CompleteModal';
import {checkmarkCircleOutline} from 'ionicons/icons';
import { Haptics, ImpactStyle } from '@capacitor/haptics';

const AllActivities: React.FC = () => {

    const [activityToComplete, setActivityToComplete] = useState<Activity>();

    const activitiesCtxt = useContext(ActivitiesContext);

    const hapticsVibrate = async () => {
        await Haptics.vibrate();
    };
      
    const openCompleteModal = (activity: Activity) => {
        setActivityToComplete(activity);
        hapticsVibrate();
    };

    const closeModal = () => {
        setActivityToComplete(undefined);
    };

    return (
        <React.Fragment>
            <IonModal isOpen={!!activityToComplete} swipeToClose={true}>
                <CompleteModal activity={activityToComplete as Activity} dismissModal={closeModal} />
            </IonModal>
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
                                                { !activity.isCompleted ?
                                                    <IonButton className={classes.FullWidth} fill="clear" onClick={() => openCompleteModal(activity)}>
                                                        Completar Actividad
                                                    </IonButton>
                                                    :
                                                    <IonIcon color="success" className={classes.FullWidth} icon={checkmarkCircleOutline}/>
                                                }
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
        </React.Fragment>
    );
};

export default AllActivities;