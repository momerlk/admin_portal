import React, { useState } from 'react';
import { Card, TextInput, Textarea, Button, Avatar, Paper } from '@mantine/core';

const CoCurricularUpdates = () => {
  const [event, setEvent] = useState({
    title: '',
    date: '',
    description: '',
    thumbnail: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEvent((prevEvent) => ({
      ...prevEvent,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    // Handle file upload here
  };

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        <h2 style={{ marginRight: '20px' }}>Co Curricular Updates</h2>
        
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Card shadow="xs" padding="md" style={{ width: '38%', height: '520px' }}>
          <form>
            <TextInput
              placeholder="Event Title"
              value={event.title}
              name="title"
              onChange={handleInputChange}
              required
              style={{ marginBottom: '50px' }} // Added margin bottom
            />
            <TextInput
              type="date"
              placeholder="Event Date"
              value={event.date}
              name="date"
              onChange={handleInputChange}
              required
              style={{ marginBottom: '50px' }} // Added margin bottom
            />
            <Textarea
              placeholder="Event Description"
              value={event.description}
              name="description"
              onChange={handleInputChange}
              required
              style={{ marginBottom: '50px', height: '200px' }} // Added margin bottom and increased height
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              style={{ marginBottom: '10px' }}
            />
            <Button type="submit" variant="outline">Submit</Button>
          </form>
        </Card>

        <Paper padding="md" style={{ width: '600px', height: '500px' }}>
            <h2>Preview</h2>
          <Card shadow="xs">
            <Avatar src={event.thumbnail} style={{ marginBottom: '10px' }} />
            <h3>{event.title}</h3>
            <p>Date: {event.date}</p>
            <p>{event.description}</p>
            <Button variant="link">Read More</Button>
          </Card>
        </Paper>
      </div>
    </div>
  );
};

export default CoCurricularUpdates;
