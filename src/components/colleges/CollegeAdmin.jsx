/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import React, { useState, useEffect, useCallback } from 'react';
import { Button, TextField, Modal, Box, Typography, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import axios from 'axios';
import { Input } from 'antd';

const CollegeAdmin = () => {
  const handleSectionAdded = useCallback((newSection) => {
    // Refresh UI or perform any action after a new section is added.
    console.log('New section added:', newSection);
  }, []);

  return <AddSectionModal onSectionAdded={handleSectionAdded} />;
};

export default CollegeAdmin;

const AddSectionModal = ({ onSectionAdded }) => {
  const [sections, setSections] = useState([]);
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [contentType, setContentType] = useState('paragraph');
  const [description, setDescription] = useState([]);
  const [imageFiles, setImageFiles] = useState([]);
  const [collegeId, setCollegeId] = useState('');

  useEffect(() => {
    // On next load, it shoudld get the data from the API, that saved before
    // const fetchData = async () => {
    //   try {
    //     const response = await axios.get('/api/sections');
    //     setSections(response.data);
    //   } catch (error) {
    //     console.error('Error fetching data:', error);
    //   }
    // };
    // fetchData();
  }, []);

  const handleModalOpen = () => {
    setOpen(true);
  };

  const handleModalClose = () => {
    setOpen(false);
  };

  const handleAddContent = () => {
    if (contentType === 'paragraph') {
      setDescription([...description, content]);
    } else {
      setDescription([...description, [content]]);
    }
    setContent('');
  };

  const handleOK = async () => {
    const newSection = {
      title,
      description,
      imageFiles,
      collegeId,
    };
    console.log(newSection);
    // Saving the data to the db logic goes here making network calls and all
    try {
      // Save section data to database
      // const response = await axios.post('/api/sections', newSection);

      // Upload images
      //   const formData = new FormData();
      //   imageFiles.forEach((file) => formData.append('images', file));
      //   await axios.post('/api/upload', formData, {
      //     headers: {
      //       'Content-Type': 'multipart/form-data',
      //     },
      //   });

      // Update state and trigger callback to refresh the parent component
      setSections([...sections, newSection]);
      if (onSectionAdded) {
        onSectionAdded(newSection);
      }
    } catch (error) {
      console.error('Error saving section data:', error);
    }
    setOpen(false);
  };

  return (
    <Box sx={{ height: '60vh' }}>
      <Button variant="contained" onClick={handleModalOpen} sx={{ mb: 2 }}>
        Add a College
      </Button>
      <Modal open={open} onClose={handleModalClose}>
        <Box sx={{ p: 2, mt: '10%', margin: 'auto', width: '50%', bgcolor: 'white' }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Add College
          </Typography>
          <TextField label="College ID" fullWidth sx={{ mb: 2 }} value={collegeId} onChange={(e) => setCollegeId(e.target.value)} />
          <TextField label="Title" fullWidth sx={{ mb: 2 }} value={title} onChange={(e) => setTitle(e.target.value)} />
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel id="content-type-label">Content Type</InputLabel>
            <Select labelId="content-type-label" value={contentType} onChange={(e) => setContentType(e.target.value)}>
              <MenuItem value="paragraph">Paragraph</MenuItem>
              <MenuItem value="bullet">Bullet</MenuItem>
            </Select>
          </FormControl>
          <TextField label="Content" fullWidth multiline rows={contentType === 'bullet' ? 1 : 4} sx={{ mb: 2 }} value={content} onChange={(e) => setContent(e.target.value)} />
          <Button onClick={handleAddContent} variant="contained" sx={{ mb: 2 }}>
            Add Content
          </Button>
          <Input type="file" fullWidth multiple sx={{ mb: 4 }} onChange={(e) => setImageFiles([...imageFiles, ...e.target.files])} />
          <Button onClick={handleOK} variant="contained" sx={{ mr: 2, my: 2 }}>
            OK
          </Button>
          <Button onClick={handleModalClose} variant="contained">
            Cancel
          </Button>
          {description.map((desc, index) => (
            <Box key={index} sx={{ p: 2, my: 2, border: '1px solid #ccc', borderRadius: '4px' }}>
              <Typography key={index}>{Array.isArray(desc) ? `- ${desc}` : desc}</Typography>
            </Box>
          ))}
        </Box>
      </Modal>
      {sections.map((section, index) => (
        <Box key={index} sx={{ p: 2, my: 2, border: '1px solid #ccc', borderRadius: '4px' }}>
          <Typography gutterBottom variant="h6">
            {section?.title}
          </Typography>
          {section.description.map((desc, descIndex) => (
            <Typography gutterBottom key={descIndex}>
              {Array.isArray(desc) ? `- ${desc}` : desc}
            </Typography>
          ))}
        </Box>
      ))}
    </Box>
  );
};

AddSectionModal.propTypes = {
  onSectionAdded: PropTypes.func,
};