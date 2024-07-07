import React, { useState } from 'react';
import { Box, Paper, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import '../styling/Plugin.css'; // Import the CSS file for Plugins

const Plugins = () => {
  const [draggingIndex, setDraggingIndex] = useState(null);
  const [tiles, setTiles] = useState([
    { id: 'tile1', label: 'Tile 1' },
    { id: 'tile2', label: 'Tile 2' },
    { id: 'tile3', label: 'Tile 3' },
    { id: 'tile4', label: 'Tile 4' },
  ]);

  const handleDragStart = (index) => {
    setDraggingIndex(index);
  };

  const handleDragOver = (index) => {
    if (draggingIndex === null || draggingIndex === index) return;

    const updatedTiles = [...tiles];
    const draggedTile = updatedTiles[draggingIndex];
    updatedTiles.splice(draggingIndex, 1);
    updatedTiles.splice(index, 0, draggedTile);

    setTiles(updatedTiles);
    setDraggingIndex(index);
  };

  const handleDragEnd = () => {
    setDraggingIndex(null);
  };

  const handleAddTileClick = () => {
    // Handle click for adding a new tile
    console.log('Add Tile clicked');
    // Add logic to add a new tile
  };

  return (
    <Box
      ml={8} // Margin left for spacing
      p={4} // Padding for the Plugins content
      display="flex"
      flexDirection="column"
      alignItems="flex-start" // Left-align content
    >
      <Typography variant="h4" gutterBottom>
        Plugins
      </Typography>
      <Box
        display="flex"
        flexWrap="wrap"
        gap={4} // Gap between tiles
      >
        {tiles.map((tile, index) => (
          <Paper
            key={tile.id}
            className="plugin-tile"
            onDragStart={() => handleDragStart(index)}
            onDragOver={() => handleDragOver(index)}
            onDragEnd={handleDragEnd}
            draggable
            sx={{
              width: 200,
              height: 200,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              cursor: 'pointer',
              transition: 'background 0.3s ease',
              '&:hover': {
                background: 'linear-gradient(45deg, #1e90ff, #00bfff)',
                color: '#ffffff',
              },
            }}
          >
            <Typography variant="h3" align="center">
              {tile.label}
            </Typography>
          </Paper>
        ))}
        {/* Add Tile */}
        <Paper
          className="plugin-tile add-tile"
          onClick={handleAddTileClick}
          sx={{
            width: 200,
            height: 200,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            background: '#f0f0f0',
            color: '#666',
            cursor: 'pointer',
            transition: 'background 0.3s ease',
            '&:hover': {
              background: 'linear-gradient(45deg, #1e90ff, #00bfff)',
              color: '#ffffff',
            },
          }}
        >
          <AddIcon style={{ fontSize: 60 }} />
          <Typography variant="subtitle1" align="center">
            Add Tile
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
};

export default Plugins;
