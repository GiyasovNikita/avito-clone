import {useEffect, useState} from "react";
import {Box, FormControl, InputLabel, Select, MenuItem} from "@mui/material";
import {TimePicker} from "@mui/x-date-pickers";
import dayjs from "dayjs";

const daysOfWeek = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

function parseWorkSchedule(scheduleString) {
    if (!scheduleString) {
        return {days: [], startTime: "09:00", endTime: "18:00"};
    }

    const [daysPart, timePart] = scheduleString.split(", ");
    if (!timePart) {
        return {days: [], startTime: "09:00", endTime: "18:00"};
    }

    const [start, end] = timePart.split("-");
    const days = [];

    daysPart.split(", ").forEach((chunk) => {
        if (chunk.includes("-")) {
            const [startDay, endDay] = chunk.split("-");
            const startIndex = daysOfWeek.indexOf(startDay);
            const endIndex = daysOfWeek.indexOf(endDay);
            if (startIndex !== -1 && endIndex !== -1 && startIndex <= endIndex) {
                for (let i = startIndex; i <= endIndex; i++) {
                    days.push(daysOfWeek[i]);
                }
            }
        } else {
            if (daysOfWeek.includes(chunk)) {
                days.push(chunk);
            }
        }
    });

    return {
        days,
        startTime: start || "09:00",
        endTime: end || "18:00",
    };
}

function formatWorkSchedule(days, startTime, endTime) {
    if (!days || days.length === 0) {
        return `, ${startTime || "09:00"}-${endTime || "18:00"}`;
    }

    const sorted = [...days].sort((a, b) => daysOfWeek.indexOf(a) - daysOfWeek.indexOf(b));

    let result = [];
    let temp = [sorted[0]];
    for (let i = 1; i < sorted.length; i++) {
        const prev = daysOfWeek.indexOf(sorted[i - 1]);
        const curr = daysOfWeek.indexOf(sorted[i]);
        if (curr === prev + 1) {
            temp.push(sorted[i]);
        } else {
            result.push(temp);
            temp = [sorted[i]];
        }
    }
    result.push(temp);

    const dayString = result
        .map((group) => (group.length > 1 ? `${group[0]}-${group[group.length - 1]}` : group[0]))
        .join(", ");

    return `${dayString}, ${startTime || "09:00"}-${endTime || "18:00"}`;
}


function WorkSchedulePicker({value, onChange}) {
    const [days, setDays] = useState([]);
    const [startTime, setStartTime] = useState(dayjs("09:00", "HH:mm"));
    const [endTime, setEndTime] = useState(dayjs("18:00", "HH:mm"));

    useEffect(() => {
        const parsed = parseWorkSchedule(value);
        setDays(parsed.days);
        setStartTime(dayjs(parsed.startTime, "HH:mm"));
        setEndTime(dayjs(parsed.endTime, "HH:mm"));
    }, [value]);

    const updateSchedule = (newDays, newStartDayjs, newEndDayjs) => {
        const startStr = newStartDayjs.format("HH:mm");
        const endStr = newEndDayjs.format("HH:mm");
        const newString = formatWorkSchedule(newDays, startStr, endStr);
        onChange(newString);
    };

    const handleDaysChange = (e) => {
        const newDays = e.target.value;
        setDays(newDays);
        updateSchedule(newDays, startTime, endTime);
    };

    const handleStartTimeChange = (newVal) => {
        setStartTime(newVal);
        updateSchedule(days, newVal, endTime);
    };

    const handleEndTimeChange = (newVal) => {
        setEndTime(newVal);
        updateSchedule(days, startTime, newVal);
    };

    return (
        <Box sx={{mt: 2, display: "flex", flexDirection: "column", gap: 2}}>
            <FormControl fullWidth>
                <InputLabel>Дни недели</InputLabel>
                <Select
                    multiple
                    label="Дни недели"
                    value={days}
                    onChange={handleDaysChange}
                    renderValue={(selected) => selected.join(", ")}
                >
                    {daysOfWeek.map((day) => (
                        <MenuItem key={day} value={day}>{day}</MenuItem>
                    ))}
                </Select>
            </FormControl>

            <TimePicker
                label="Начало"
                ampm={false}
                value={startTime}
                onChange={handleStartTimeChange}
            />
            <TimePicker
                label="Окончание"
                ampm={false}
                value={endTime}
                onChange={handleEndTimeChange}
            />
        </Box>
    );
}

export default WorkSchedulePicker;
