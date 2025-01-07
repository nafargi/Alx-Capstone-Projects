import React from 'react'

function TrendingPodcasts({ podcasts}) {
  return (
    <div className="trending-podcasts">
    <h2 className="text-xl font-bold mb-4">Top Podcasts</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {podcasts.map((podcast) => (
        <div key={podcast.id} className="podcast-card">
          <img
            src={podcast.picture_medium}
            alt={podcast.title}
            className="rounded-lg"
          />
          <h3 className="mt-2">{podcast.title}</h3>
          <p>Fans: {podcast.fans}</p>
        </div>
      ))}
    </div>
  </div>
  )
}

export default TrendingPodcasts
