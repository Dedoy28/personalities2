import { useState } from 'react';
import { sculptureList } from './Data.tsx';
import { Button, Card, CardContent, Typography, IconButton, Collapse } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const hasNext = index < sculptureList.length - 1;
  const hasPrev = index > 0;

  function handleNextClick() {
    if (hasNext) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  function handlePrevClick() {
    if (hasPrev) {
      setIndex(index - 1);
    } else {
      setIndex(sculptureList.length - 1);
    }
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];
  return (
    <Card sx={{ maxWidth: 600, padding: 2 }}>
      <CardContent>
        <Typography variant="h5">Laurence Andre' Malana</Typography>
        <Button variant="contained" onClick={handlePrevClick} sx={{ margin: 1 }}>
          Back
        </Button>
        <Button variant="contained" onClick={handleNextClick} sx={{ margin: 1 }}>
          Next
        </Button>
        <Typography variant="h6" sx={{ marginTop: 2 }}>
          <i>{sculpture.name}</i> by {sculpture.artist}
        </Typography>
        <Typography variant="body2">
          ({index + 1} of {sculptureList.length})
        </Typography>
        <IconButton onClick={handleMoreClick} sx={{ margin: 2 }}>
          {showMore ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </IconButton>
        <Collapse in={showMore}>
          <Typography variant="body1">{sculpture.description}</Typography>
        </Collapse>
        <img
          className="sculpture-image"
          src={sculpture.url}
          alt={sculpture.alt}
          style={{ width: '50%', height: 'auto', maxHeight: 300, objectFit: 'cover' }}
        />
      </CardContent>
    </Card>
  );
}