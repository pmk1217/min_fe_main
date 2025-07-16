import React, { useState, useEffect } from "react";
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import { Card, CardContent, Typography, Box, Button, LinearProgress } from "@mui/material";

const Timer = () => {
  dayjs.locale('ko');
  const today = dayjs().format('YYYY년 M월 D일 dddd');
  const [ isHour, setIsHour] = useState(true);

  const getWorkProgress = (hourSetting = isHour) => {
    const startHour = hourSetting ? 9 : 8;
    const endHour = hourSetting ? 18 : 17;

    const nowTime = dayjs();
    const endTime = nowTime.hour(endHour).minute(0).second(0);

    const currentHour = nowTime.hour() + nowTime.minute() / 60 + nowTime.second() / 3600;

    let progress = ((currentHour - startHour) / (endHour - startHour)) * 100;
    progress = Math.max(0, Math.min(progress, 100));  // 범위 제한

    const remainingSeconds = endTime.diff(nowTime, 'second');

    let timeLabel = '';
    let hours = 0, minutes = 0, seconds = 0; 

    if(remainingSeconds >= 0) {
    hours = Math.floor(remainingSeconds / 3600);
    minutes = Math.floor((remainingSeconds % 3600) / 60);
    seconds = remainingSeconds % 60;
    timeLabel = `${hours}h ${minutes}m ${seconds}s`;
    } else {
      const overtimSeconds = Math.abs(remainingSeconds);
          hours = Math.floor(overtimSeconds / 3600);
    minutes = Math.floor((overtimSeconds % 3600) / 60);
    seconds = overtimSeconds % 60;
    timeLabel = `야근...  + ${hours}h ${minutes}m ${seconds}s`;
    }

    return { progress, timeLabel, startHour, endHour };
  };

const [progressData, setProgressData] = useState(getWorkProgress());

useEffect(() => {
    const timer = setInterval(() => {
      setProgressData(getWorkProgress());
    }, 1000);

    return () => clearInterval(timer);
  }, [isHour]);    


  const formatTime = (hour:number): string => {
    return dayjs().hour(hour).minute(0).format('HH:mm');
  };

   const toggleHour = () => {
    setIsHour((prev) => {
        const newIsHour = !prev;
        setProgressData(getWorkProgress(newIsHour));
        return newIsHour;
    });
   };

  return (
    <Card elevation={0}>
      <CardContent>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {today}
        </Typography>
        <Typography variant="h3" component="div" sx={{ fontWeight: "bold" }}>
          {progressData.timeLabel}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", margin: "10px 0" }}>
          <Box sx={{ width: "100%" }}>
            <LinearProgress
              variant="determinate"
              color="info"
              value={progressData.progress}
              sx={{ height: 15, borderRadius: 3, backgroundColor:'#a7d7fb' }}
            />
            <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: 0.5 }}>
              <Typography variant="body2" color="text.secondary">
                출근
              </Typography>
              <Typography variant="body2" color="text.secondary">
                퇴근
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{ display: "flex", justifyContent: "space-between", marginTop: 4, marginBottom: 2 }}
        >
          <Typography sx={{ fontWeight: "bold" }}>
            출근시간
          </Typography>
          <Typography >{formatTime(Number(progressData.startHour))}</Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
          <Typography  sx={{ fontWeight: "bold" }}>
            퇴근시간
          </Typography>
          <Typography >{formatTime(Number(progressData.endHour))}</Typography>
        </Box>
        <Box>
          <Button
           sx={{ width:'100%', margin: '0 auto', backgroundColor: isHour ? '#a7d7fb' : 'gray', padding: '5px', fontWeight:'500'}}
          onClick={toggleHour}
          >
            {isHour ? '8출 5퇴' : '9출 6퇴'}
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Timer;
