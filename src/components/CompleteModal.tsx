import { IonButton, IonCol, IonContent, IonGrid, IonImg, IonRow, IonText } from '@ionic/react';
import React, {useContext} from 'react';
import ActivitiesContext, { Activity } from '../data/activities-context';

interface CompleteModalProps{
    activity: Activity;
    dismissModal: () => void;
}

const CompleteModal: React.FC<CompleteModalProps> = (props) => {

    const activityCtxt = useContext(ActivitiesContext);

    const confirmCompletion = (activityId: string) => {
        activityCtxt.completeActivity(activityId);
        props.dismissModal();
    };

    return(
        <IonContent>
            <IonGrid className="ion-no-padding">
                <IonRow>
                    <IonCol className="ion-no-padding">
                        {/*<IonImg src={props.activity.imageUrl}/>*/}
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol className="ion-text-center">
                        <IonText>
                            {/*<h2>{props.activity.title}</h2>*/}
                        </IonText>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol className="ion-text-center ion-no-padding">
                        <IonText color="medium">
                            <h2>Seguro que quieres marcar esta tarea como completada?</h2>
                        </IonText>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol className="ion-text-center">
                        <IonButton color="danger" fill="clear" onClick={props.dismissModal}>Cancelar</IonButton>
                    </IonCol>
                    <IonCol className="ion-text-center">
                        <IonButton color="primary" fill="clear" onClick={() => confirmCompletion(props.activity.id)}>Completar</IonButton>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonContent>
    );
};

export default CompleteModal;