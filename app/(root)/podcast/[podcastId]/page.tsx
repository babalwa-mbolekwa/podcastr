import React from 'react';

interface PodcastDetailsProps {
    params: Promise<{
        podcastId: string;
    }>;
}

const PodcastDetails: React.FC<PodcastDetailsProps> = async ({ params }) => {
  const { podcastId } = await params;

  return (
    <p className='text-white-1'>PodcastDetails for {podcastId}</p>
  )
}

export default PodcastDetails