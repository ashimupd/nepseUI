import PropTypes from "prop-types"
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Chip from '@mui/material/Chip';

const NotesSection = ({ data }) => {
  const [note, setNote] = useState('');

  const handleAddNote = () => {
    // Make API call to save note
    // After saving, add the note to the data list (assuming it's in state and gets passed to this component)
  };

  const handleDeleteNote = (noteId) => {
    console.log(noteId);
    // Make API call to delete note
    // After deletion, remove the note from the data list (assuming it's in state and gets passed to this component)
  };

  return (
    <Box sx={{ p: 2, my: 2, border: '1px solid #ccc', borderRadius: '4px' }}>
      <Typography variant="h6">Notes</Typography>
      <TextField value={note} onChange={(e) => setNote(e.target.value)} multiline rows={3} fullWidth />
      <Button onClick={handleAddNote}>Add Note</Button>
      {data.map((note, index) => (
        <Chip key={index} label={note.content} onDelete={() => handleDeleteNote(note.id)} sx={{ mt: 1, mr: 1 }} />
      ))}
    </Box>
  );
};

NotesSection.propTypes = {
  data: PropTypes.shape({
    map: PropTypes.func
  })
}

export default NotesSection;
