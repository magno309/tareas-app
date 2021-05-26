import React, { useState } from 'react';
import ActivitiesContext, { Activity, ActivitiesContextModel, ActivityType } from './activities-context';

const ActivitiesContextProvider: React.FC = (props) => {

    const [activities, setActivities] = useState<Activity[]>([
        {
            id: Math.random().toString(),
            title: 'My daily sleep',
            description: 'Sleep through the night after a day of quarantine',
            hour: '23:00',
            activityType: 'Descanso',
            imageUrl: '/assets/images/rest.jpg',
            isCompleted: false
        }
    ]);

    const addActivity = (title: string, description: string, activityType: ActivityType) => {
        let imageUrl = '';
        switch(activityType) {
            case 'Descanso':
                imageUrl = '/assets/images/mimir.jpg'
                break;
            case 'Hobby':
                imageUrl = '/assets/images/hobby.jpg'
                break;
            case 'Trabajo':
                imageUrl = '/assets/images/trabajar.jpg'
                break;
            default:
                imageUrl = '/assets/images/work.jpg'
                break;
        };

        const activityDate = new Date();
        const hour = activityDate.getHours() + ':' + activityDate.getMinutes();

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
            return [...currActivities, newActivity]
        })
    };

    const completeActivity = (activityId: string) => {
        setActivities(currActivities => {
            const updatedActivities = [...currActivities];
            const selectedActivityIndex = activities.findIndex(act => act.id === activityId);
            const updatedActivity = {...updatedActivities[selectedActivityIndex], isCompleted: true};
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