import React, { useEffect, useState } from 'react';
import '../../assets/scss/_notification.scss'

const NotificationMessage = ({ isSuccess }) => {

    const[notificationShow, setNotificationShow] = useState(false)

    useEffect(() => {
        if (isSuccess !== null) {
            setNotificationShow(true);
            setTimeout(() => {
                setNotificationShow(false);
            }, 3000);
        }
    }, [isSuccess])

    const closeNotification=(e)=>{
        e.preventDefault();
        setNotificationShow(false);
    }
    return (
        <div className={notificationShow ? 'notification opened' : 'notification '}>
            <div className='notification_inner'>
                <div className={isSuccess ? 'notification_container success' : 'error notification_container'}>
                    <a href="/#" className='popup_close icon-close'
                        onClick={(e)=>closeNotification(e)}
                    > </a>
                    <div className={isSuccess ? 'icon-success notification_icon' : 'notification_icon icon-error'}></div>
                    <div className='notification_title'>
                        {isSuccess ? 'Thank You!' : 'Error'}
                    </div>
                    {isSuccess ?
                        <div className='notification_description'>
                            Congratulations,
                            your login is successful
                        </div>
                        :
                        <div className='notification_description'>
                            Something went wrong
                            Your login failed, please try again
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default NotificationMessage;