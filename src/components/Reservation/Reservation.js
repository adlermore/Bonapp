
import React, { useState } from 'react';
import '../../assets/scss/Reservation/_reservation.scss';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticTimePicker } from '@mui/x-date-pickers/StaticTimePicker';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';


const Reservation = ({ background, innerName, innerDescription }) => {

    const [reservationData, setReservationData] = useState({
        reserveDate: 'Date',
        reserveTime: 'Time',
        reserveGuest: 'Guest',
        reserveName: 'Name'
    });

    const [openTimePicker, setOpenTimePicker] = useState(false);
    const [openDatePicker, setOpenDatePicker] = useState(false);


    const toggleTimePicker = () => {
        setOpenDatePicker(false);
        setOpenTimePicker(!openTimePicker);
    }

    const toggleDatePicker = () => {
        setOpenTimePicker(false);
        setOpenDatePicker(!openDatePicker);
    }
    
    const handleTimeChangeTimePicker = (newTime) => {
        // setReservationData({...reservationData , reserveTime: newTime });
        // handleCloseTimePicker();
        console.log(newTime);
        setOpenTimePicker(!openTimePicker);
    };

    return (
        <div className="reservation_section" style={{ backgroundImage: `url(${background})` }}>
            <div className="custom_container">
                {innerName &&
                    <div className='reservation_info'>
                        <div className='reservation_name'>{innerName}</div>
                        <div className='reservation_description'>{innerDescription}</div>
                    </div>
                }
                <div className="reservation_container">
                    <div className="reservation_list">
                        <div className={!openDatePicker ? `btn_block datepicker_btn` : `btn_block openedPicker datepicker_btn` }>
                            <button 
                                onClick={()=>toggleDatePicker()} 
                                className='switcher_btn'
                            >
                                {reservationData.reserveDate}
                            </button >
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <StaticDatePicker 
                                    // value={new Date()}
                                    disablePast = {true}
                                    toolbar = {false}
                                    displayWeekNumber ={false}
                                    onAccept={handleTimeChangeTimePicker}
                                    // onClose={(event, reason) => {
                                    //     if(reason !== 'backdropClick' && reason !== 'escapeKeyDown') {
                                    //         handleCloseTimePicker();
                                    //     }
                                    // }}
                                    className="timePicker_block"
                                    orientation="portrait"
                                />
                            </LocalizationProvider>
                        </div>
                        <div className={!openTimePicker ? `btn_block timepicker_btn`: `btn_block openedPicker timepicker_btn`}>
                            <button  
                                className='switcher_btn' 
                                onClick={()=>toggleTimePicker}
                                disabled={true}
                            >
                                {reservationData.reserveTime}
                            </button >
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <StaticTimePicker
                                    // value={new Date()}
                                    onAccept={handleTimeChangeTimePicker}
                                    // onClose={(event, reason) => {
                                    //     if(reason !== 'backdropClick' && reason !== 'escapeKeyDown') {
                                    //         handleCloseTimePicker();
                                    //     }
                                    // }}
                                    className="timePicker_block"
                                    orientation="portrait"
                                />
                            </LocalizationProvider>
                        </div>
                        <div className='btn_block guestsCount_btn'>
                            <button 
                                className='switcher_btn'
                                disabled={true}
                            >
                                {reservationData.reserveGuest}
                            </button>
                        </div>
                        <div className='btn_block submit_btn'>
                            <button 
                                className='switcher_btn'
                                disabled={true}
                            >
                                {reservationData.reserveName}
                            </button>
                        </div>
                        <div className='btn_block submit_btn '>
                            <button 
                                className='switcher_btn reserve_btn'
                                disabled={true}
                            >
                                Reserve
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reservation;