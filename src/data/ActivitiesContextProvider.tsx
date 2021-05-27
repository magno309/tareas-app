import React, { useState } from 'react';
import ActivitiesContext, { Activity, ActivitiesContextModel, ActivityType } from './activities-context';

const ActivitiesContextProvider: React.FC = (props) => {

    const [activities, setActivities] = useState<Activity[]>(
        [
            {
                id: Math.random().toString(),
                title: 'Terminar proyecto',
                description: 'Proyecto de Ionic + React para móviles 2',
                hour: '23:00',
                activityType: 'Trabajo',
                imageUrl: '/assets/imagenes/trabajar.jpg',
                isCompleted: false
            }
        ]
    );

    const addActivity = (title: string, description: string, hour: string, activityType: ActivityType) => {
        let imageUrl = '';
        switch (activityType) {
            case 'Descanso':
                imageUrl = '/assets/imagenes/mimir.jpg'
                break;
            case 'Hobby':
                imageUrl = '/assets/imagenes/hobby.jpg'
                break;
            case 'Trabajo':
                imageUrl = '/assets/imagenes/trabajar.jpg'
                break;
            default:
                imageUrl = '/assets/imagenes/mimir.jpg'
                break;
        };

        //const activityDate = new Date();
        //const hour = activityDate.getHours() + ':' + activityDate.getMinutes();

        const newActivity: Activity = {
            id: Math.random().toString(),
            title,
            description,
            hour,
            activityType,
            imageUrl,
            isCompleted: false
        };

        setActivities(currActivities => {
            return [...currActivities, newActivity];
        });
    };

    const completeActivity = (activityId: string) => {
        setActivities(currActivities => {
            const updatedActivities = [...currActivities];
            const selectedActivityIndex = activities.findIndex(act => act.id === activityId);
            const updatedActivity = { ...updatedActivities[selectedActivityIndex], isCompleted: true };
            updatedActivities[selectedActivityIndex] = updatedActivity;
            return updatedActivities;
        });
    };

    const activitiesContext: ActivitiesContextModel = {
        activities,
        addActivity,
        completeActivity
    };

    return (
        <ActivitiesContext.Provider value={activitiesContext}>
            {props.children}
        </ActivitiesContext.Provider>
    );
};

export default ActivitiesContextProvider;