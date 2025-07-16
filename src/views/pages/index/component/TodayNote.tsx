import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { Box, Button, Card, CardContent, TextField, Typography, IconButton, Divider, Checkbox } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeIcon from '@mui/icons-material/Mode';
import { useCustomSnackbar } from '../../../components/snackbar/useCustomSnackbar';
import { SnackbarTypes } from '../../../../models/common/CommonModel';

const TodayNote = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const { showSnackbar } = useCustomSnackbar();
  const [selectedIndexes, setSelectedIndexes] = useState<number[]>(() => {
    const stored = localStorage.getItem('selectedIndexes');
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    const savedMessages = Cookies.get('chatMessages');
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    }
  }, []);

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSend = () => {
    if (message.trim() !== '') {
      if (message.length > 30) {
        showSnackbar('메모는 30자 이하로 입력해주세요.', SnackbarTypes.WARNING);
        return;
      }

      const newMessages = [...messages, message];
      setMessages(newMessages);
      Cookies.set('chatMessages', JSON.stringify(newMessages), { expires: 1 });
      setMessage('');
    }
  };

  const handleDelete = (index) => {
    const newMessages = messages.filter((_, i) => i !== index);
    setMessages(newMessages);
    Cookies.set('chatMessages', JSON.stringify(newMessages), { expires: 1 });
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleCheckboxToggle = (index: number) => {
    setSelectedIndexes((prev) => {
      const newSelected = prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index];

      localStorage.setItem('selectedIndexes', JSON.stringify(newSelected));
      return newSelected;
    });
  };

  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '310px',
          p: 0.5,
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
            overflow: 'auto',
            mb: 1.5,
            p: 1,
            position: 'relative',
            backgroundColor: '#FFF8DC',
          }}
        >
          <CardContent>
            {Array.from({ length: 15 }).map((_, index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  position: 'relative',
                  height: '40px',
                  lineHeight: '40px',
                  width: '100%',
                }}
              >
                <Divider sx={{ position: 'absolute', width: '100%' }} />
                {messages[index] && (
                  <Typography
                    variant="body1"
                    sx={{
                      textAlign: 'left',
                      left: 0,
                      zIndex: 1,
                      mb: 3.5,
                      width: '100%',
                      fontWeight: '600',
                      fontSize: '15px',
                    }}
                  >
                    <Checkbox
                      checked={selectedIndexes.includes(index)}
                      onChange={() => handleCheckboxToggle(index)}
                      sx={{ mr: 0.5, mb: 0.5 }}
                    />
                    {messages[index]}
                    <IconButton onClick={() => handleDelete(index)} sx={{ ml: 0.2, mb: 0.2 }}>
                      <DeleteIcon />
                    </IconButton>
                  </Typography>
                )}
              </Box>
            ))}
          </CardContent>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <TextField
            value={message}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            onKeyPress={handleKeyPress}
            placeholder="메모를 입력하세요"
            size="small"
          />
          <Button onClick={handleSend} sx={{ padding: '8px 18px 8px 18px', ml: 1, backgroundColor: '#ddd' }}>
            <ModeIcon />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default TodayNote;
