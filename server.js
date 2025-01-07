import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();
const PORT = 5000;

app.use(cors());
const deezerBaseUrl = 'https://api.deezer.com';

app.get('/deezer-chart', async (req, res) => {
  try {
    const response = await fetch(`${deezerBaseUrl}/chart/0/artists`);
    
    if (!response.ok) {
      throw new Error(`Deezer API error: ${response.statusText}`);
    }

    const data = await response.json();
    res.json(data); 
  } catch (error) {
    console.error("Error fetching Deezer data:", error); 
    res.status(500).json({ error: 'Failed to fetch data from Deezer API' }); 
  }
});


app.get('/deezer-top-artists', async (req, res) => {
  try {
    const response = await fetch(`${deezerBaseUrl}/artist/0/top`);

    if (!response.ok) {
      throw new Error(`Deezer API error: ${response.statusText}`);
    }

    const data = await response.json();
    res.json(data); 
  } catch (error) {
    console.error("Error fetching Deezer data:", error); 
    res.status(500).json({ error: 'Failed to fetch data from Deezer API' }); 
  }
});



app.get('/search-artist', async (req, res) => {
  const artistName = req.query.q || 'eminem'; 
  try {
      const response = await fetch(`${deezerBaseUrl}/search?q=${artistName}`);
      const data = await response.json();
      res.json(data); 
  } catch (error) {
      res.status(500).json({ error: 'Error fetching data from Deezer' });
  }
});


app.get('/fetch-playlists', async (req, res) => {
  try {
    // Example playlist IDs you want to fetch
    const playlistIds = ['908622995', '908622981', '987654321']; // Replace with real playlist IDs
    const playlists = [];

    for (const id of playlistIds) {
      const playlistUrl = `https://api.deezer.com/playlist/${id}`;
      const response = await fetch(playlistUrl);
      
      if (!response.ok) {
        throw new Error(`Failed to fetch data for playlist ID: ${id}`);
      }

      const data = await response.json();
      playlists.push(data);
    }

    res.json(playlists); // Send the list of playlists to the client
  } catch (error) {
    console.error('Error fetching playlists:', error.message);
    res.status(500).json({ error: 'Unable to fetch playlist data' });
  }
});


// Search endpoint to fetch data from Deezer API based on the search query
// Search endpoint to fetch data from Deezer API based on the search query
app.get('/api/search/track', async (req, res) => {
  const query = req.query.q;
  try {
    const response = await fetch(`https://api.deezer.com/search/track?q=${query}`);
    const data = await response.json();
    res.json(data); // Return the data to the client
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

// Similarly, you can add other routes for albums, artists, playlists, etc.
app.get('/api/search/album', async (req, res) => {
  const query = req.query.q;
  try {
    const response = await fetch(`https://api.deezer.com/search/album?q=${query}`);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

app.get('/api/search/playlist', async (req, res) => {
  const query = req.query.q;
  try {
    const response = await fetch(`https://api.deezer.com/search/playlist?q=${query}`);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});
app.get('/api/search/user', async (req, res) => {
  const query = req.query.q;
  try {
    const response = await fetch(`https://api.deezer.com/search/user?q=${query}`);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});
app.get('/api/search/artist', async (req, res) => {
  const query = req.query.q;
  try {
    const response = await fetch(`https://api.deezer.com/search/artist?q=${query}`);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});
app.get('/api/album/:id', async (req, res) => {
  const albumId = req.params.id;
  try {
    const response = await fetch(`https://api.deezer.com/album/${albumId}`);
    const data = await response.json();
    res.json(data); // Send back tracks for the album
  } catch (error) {
    console.error('Error fetching album tracks:', error);
    res.status(500).json({ error: 'Failed to fetch album tracks' });
  }
});

app.get('/fetch-chart', async (req, res) => {
  try {
    const chartUrl = 'https://api.deezer.com/artist/27/playlists';
    const response = await fetch(chartUrl);

    if (!response.ok) {
      throw new Error('Failed to fetch chart data');
    }

    const data = await response.json();
    res.json(data); // Send chart data to the client
  } catch (error) {
    console.error('Error fetching chart data:', error.message);
    res.status(500).json({ error: 'Unable to fetch chart data' });
  }
});

// Route to fetch albums for a given artist
app.get("/api/artist/:artistId/albums", async (req, res) => {
  const { artistId } = req.params;

  try {
    const response = await fetch(`https://api.deezer.com/artist/${artistId}/albums`);
    const data = await response.json();

    if (data && data.data) {
      // Filter and sort the albums by release date (recent first)
      const sortedAlbums = data.data.sort(
        (a, b) => new Date(b.release_date) - new Date(a.release_date)
      );

      res.json({
        success: true,
        albums: sortedAlbums,
      });
    } else {
      res.status(404).json({ success: false, message: "No albums found" });
    }
  } catch (error) {
    console.error("Error fetching albums:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

// Endpoint to fetch Deezer chart data
// Route to fetch Deezer chart data
app.get('/api/chart', async (req, res) => {
  try {
    const fetch = await import('node-fetch'); // Use dynamic import for `fetch`
    const response = await fetch.default('https://api.deezer.com/chart'); // Fetch Deezer API
    if (!response.ok) {
      throw new Error(`Error fetching Deezer chart: ${response.statusText}`);
    }
    const data = await response.json();
    res.json(data); // Send Deezer's response to the client
  } catch (error) {
    console.error('Error fetching Deezer chart:', error.message);
    res.status(500).json({ error: 'Failed to fetch Deezer chart data' });
  }
});

app.get('/api/fetchTracks/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const response = await fetch(`https://api.deezer.com/album/${id}`);
    const data = await response.json();

    if (data && data.tracks && data.tracks.data) {
      res.json(data.tracks.data); // Send the tracks data back to the client
    } else {
      res.status(404).json({ message: 'Tracks not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching tracks', error: error.message });
  }
});
// Route to fetch playlist tracks
app.get('/api/fetchTracks/playlist/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const response = await fetch(`https://api.deezer.com/playlist/${id}`);
    const data = await response.json();

    if (data && data.tracks && data.tracks.data) {
      res.json(data.tracks.data); // Send the tracks data back to the client
    } else {
      res.status(404).json({ message: 'Tracks not found for this playlist' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching playlist tracks', error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
