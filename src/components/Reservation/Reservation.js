import React, { useState, useRef } from 'react';
import '../../assets/scss/Reservation/_reservation.scss';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticTimePicker } from '@mui/x-date-pickers/StaticTimePicker';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import dayjs from 'dayjs';
import Select from 'react-select';
import SelectAsyncPaginate from './SelectAsyncPaginate';

const regionData = [
    { value: "The Crownlands" },
    { value: "Iron Islands" },
    { value: "The North" },
    { value: "The Reach" },
    { value: "The Riverlands" },
    { value: "The Vale" },
    { value: "The Westerlands" },
    { value: "The Stormlands" }
];

const Reservation = ({ background, innerName, innerDescription , isInnerPage}) => {

    const guestsRef = useRef(null);
    const [currentRestaurant, setCurrentRestaurant] = useState(null);
    const [region, setRegion] = useState(regionData[0]);

    const [reservationData, setReservationData] = useState({
        reserveDate: 'Date',
        reserveTime: 'Time',
        reserveGuest: 'Guest',
        reserveName: 'Name'
    });

    const [optionDatePicker, setOptionDatePicker] = useState({
        isOpened: false,
        disabled: false
    });

    const [optionTimePicker, setOptionTimePicker] = useState({
        isOpened: false,
        disabled: true
    });

    const [optionGuestsPicker, setOptionGuestsPicker] = useState({
        isOpened: false,
        disabled: true
    });

    const [optionNamePicker, setOptionNamePicker] = useState({
        isOpened: false,
        disabled: true
    });

    const [optionReservePicker, setOptionReservePicker] = useState({
        isOpened: false,
        disabled: true
    });

    const closeAllPickers = () => {
        closeDatePicker();
        closeTimePicker();
        closeGuestsPicker();
        closeNamePicker();
        closeReservePicker();
    }

    const closeDatePicker = () => {
        setOptionDatePicker({ ...optionDatePicker, isOpened: false });
    }

    const closeTimePicker = () => {
        setOptionTimePicker({ ...optionTimePicker, isOpened: false });
    }

    const closeGuestsPicker = () => {
        setOptionGuestsPicker({ ...optionGuestsPicker, isOpened: false });
    }

    const closeNamePicker = () => {
        setOptionNamePicker({ ...optionNamePicker, isOpened: false });
    }

    const closeReservePicker = () => {
        setOptionReservePicker({ ...optionReservePicker, isOpened: false });
    }

    const toggleDatePicker = () => {
        closeAllPickers()
        setOptionDatePicker({ ...optionDatePicker, isOpened: !optionDatePicker.isOpened });
    }

    const toggleTimePicker = () => {
        closeAllPickers();
        setOptionTimePicker({ ...optionTimePicker, isOpened: !optionTimePicker.isOpened });
    }

    const toggleGuestsPicker = () => {
        closeAllPickers();
        setOptionGuestsPicker({ ...optionGuestsPicker, isOpened: !optionGuestsPicker.isOpened });
    }

    const toggleNamePicker = () => {
        closeAllPickers();
        setOptionNamePicker({ ...optionNamePicker, isOpened: !optionNamePicker.isOpened });
    }

    const toggleReservePicker = () => {
        closeAllPickers();
        setOptionReservePicker({ ...optionReservePicker, isOpened: !optionReservePicker.isOpened });
    }

    const changeDatePicker = (newTime) => {
        let updatedDate = newTime.$D + '.' + newTime.$M + '.' + newTime.$y;
        setReservationData({ ...reservationData, reserveDate: updatedDate });
        setOptionTimePicker({ ...optionTimePicker, disabled: false });
        if (optionTimePicker.disabled) {
            setOptionTimePicker({ isOpened: true, disabled: false });
        }
    };

    const changeTimePicker = (newTime) => {
        let updatedDate = newTime.$H + ':' + newTime.$m;
        setReservationData({ ...reservationData, reserveTime: updatedDate });
        setOptionGuestsPicker({ ...optionGuestsPicker, disabled: false });
        if (optionGuestsPicker.disabled) {
            setOptionGuestsPicker({ isOpened: true, disabled: false });
        }
    };

    const guestCountChange = (guestsCount) => {
        toggleGuestsPicker()
        setReservationData({ ...reservationData, reserveGuest: guestsCount + 1 })
        setOptionNamePicker({ ...optionNamePicker, disabled: false });
        if (optionNamePicker.disabled) {
            setOptionNamePicker({ isOpened: true, disabled: false });
        }
        if(isInnerPage){
            setOptionReservePicker({ ...optionReservePicker, disabled: false });
            if (optionReservePicker.disabled) {
                setOptionReservePicker({ isOpened: true, disabled: false });
            }
        }
    }

    const openedDropinput = (e) => {
        e.preventDefault();
        if (!guestsRef.current.classList.contains('input_opened')) {
            guestsRef.current.classList.add('input_opened');
        } else {
            guestsRef.current.classList.remove('input_opened');
        }
    }

    const liElements = Array.from({ length: 15 }, (_, index) => (
        <li
            key={index}
            className={reservationData.reserveGuest - 1 === index ? 'selected' : ''}
        >
            <button onClick={() => guestCountChange(index)}>{index + 1} </button>
        </li>
    ));

    const handleMoreCountChange = (e) => {
        let guestsMoreCount = e.target.value;
        if (guestsMoreCount > 0 && guestsMoreCount < 2000) {
            setReservationData({ ...reservationData, reserveGuest: guestsMoreCount })
        }
    }

    const handleBlurGuestsCount = (e) => {
        if (e.target.value > 0) {
            toggleGuestsPicker();
            if (optionNamePicker.disabled) {
                setOptionNamePicker({ isOpened: true, disabled: false });
            }
        }
    }

    const onchangeSelect = (item) => {
        setCurrentRestaurant(null);
        setRegion(item);
    };

    const handleCurrNameChange = (currValue) => {
        setCurrentRestaurant(currValue);
        toggleNamePicker();
        setReservationData({ ...reservationData, reserveName: currValue.name });
        setOptionReservePicker({ ...optionReservePicker, disabled: false });
        if (optionReservePicker.disabled) {
            setOptionReservePicker({ isOpened: true, disabled: false });
        }
    }

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
                        <div className={!optionDatePicker.isOpened ? `btn_block datepicker_btn` : `btn_block openedPicker datepicker_btn`}>
                            <button
                                onClick={() => toggleDatePicker()}
                                className={optionTimePicker.disabled ? `switcher_btn` : `switcher_btn icon-calendar selected`}
                            >
                                {reservationData.reserveDate}
                            </button >
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <StaticDatePicker
                                    format="DD-MM-YYYY"
                                    defaultValue={dayjs(new Date())}
                                    disablePast={true}
                                    toolbar={false}
                                    displayWeekNumber={false}
                                    onAccept={changeDatePicker}
                                    onClose={(event, reason) => {
                                        if (reason !== 'backdropClick' && reason !== 'escapeKeyDown') {
                                            closeDatePicker(event);
                                        }
                                    }}
                                    className="picker_block"
                                    orientation="portrait"
                                    sx={{
                                        bgcolor: 'background.paper',
                                        boxShadow: 1,
                                        borderRadius: 20,
                                        p: 2,
                                        minWidth: 300,
                                    }}
                                />
                            </LocalizationProvider>
                        </div>
                        <div className={!optionTimePicker.isOpened ? `btn_block timepicker_btn` : `btn_block openedPicker timepicker_btn`}>
                            <button
                                className={optionGuestsPicker.disabled ? `switcher_btn` : `switcher_btn icon-time selected`}
                                onClick={() => toggleTimePicker()}
                                disabled={optionTimePicker.disabled}
                            >
                                {reservationData.reserveTime}
                            </button >
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <StaticTimePicker
                                    format="DD-MM-YYYY"
                                    defaultValue={dayjs(new Date())}
                                    onAccept={changeTimePicker}
                                    onClose={(event, reason) => {
                                        if (reason !== 'backdropClick' && reason !== 'escapeKeyDown') {
                                            closeTimePicker(event);
                                        }
                                    }}
                                    sx={{
                                        bgcolor: 'background.paper',
                                        boxShadow: 1,
                                        borderRadius: 20,
                                        p: 2,
                                        minWidth: 300,
                                    }}
                                    className="picker_block"
                                    orientation="portrait"
                                />
                            </LocalizationProvider>
                        </div>
                        <div className={!optionGuestsPicker.isOpened ? `btn_block guestsCount_btn` : `btn_block openedPicker guestsCount_btn`}>
                            <button
                                className={optionNamePicker.disabled ? `switcher_btn` : `switcher_btn icon-user selected`}
                                disabled={optionGuestsPicker.disabled}
                                onClick={() => toggleGuestsPicker()}
                            >
                                {reservationData.reserveGuest}
                            </button>
                            <div className='picker_block guests_picker'>
                                <div className='guests_inner'>
                                    <ul className='guests_list'>
                                        {liElements}
                                    </ul>
                                    <div className='more_dropdown' ref={guestsRef}>
                                        <a href="/#"
                                            className='more_btn'
                                            onClick={(e) => openedDropinput(e)}
                                        >
                                            More guests options +
                                        </a>
                                        <div className='dropInput_block'>
                                            <input placeholder='Input guests option'
                                                type='number'
                                                onChange={(e) => handleMoreCountChange(e)}
                                                onBlur={(e) => handleBlurGuestsCount(e)}
                                                className='guestsInput'
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={!optionNamePicker.isOpened ? `btn_block currResName_btn` : `btn_block openedPicker currResName_btn`}>
                            <button
                                className={optionReservePicker.disabled ? `switcher_btn name-picker-btn  ` : `switcher_btn  name-picker-btn selected`}
                                disabled={optionNamePicker.disabled}
                                onClick={() => toggleNamePicker()}
                            >
                                {reservationData.reserveName}
                            </button>
                            <div className='picker_block restaurants_picker'>
                                <div className='inner_title'>Restaurant name</div>
                                <div className='block_inner'>
                                    <Select
                                        className='select_picker'
                                        options={regionData}
                                        onChange={onchangeSelect}
                                        getOptionValue={(option) => option.value}
                                        getOptionLabel={(option) => option.value}
                                    />
                                    <SelectAsyncPaginate
                                        regionName={region.value}
                                        value={currentRestaurant}
                                        onChange={(Currrestaurant) => handleCurrNameChange(Currrestaurant)}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={!optionReservePicker.isOpened ? `btn_block submit_btn` : `btn_block openedPicker submit_btn`}>
                            <button
                                className='switcher_btn reserve_btn'
                                disabled={optionReservePicker.disabled}
                                onClick={() => toggleReservePicker()}
                            >
                                Reserve
                            </button>
                            <div className='picker_block reservation_picker'>
                                <div className='block_inner'>
                                    <div className='picker_title'>Go for offer</div>
                                    <div className='picker_desc'>Your order is ready to be processed</div>
                                    <div className='inline_links'>
                                        <a href="/#">Find a table</a>
                                        <a href="/#">Choose menu</a>
                                    </div>
                                    <div className='label_inner'>or continue to</div>
                                    <a href="#/" className='reservation_submit'>Reserve</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reservation;