import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const VideoGallery = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  // Mock function to simulate fetching video details from YouTube API
  const fetchVideoDetails = async (videoUrl) => {
    // In a real implementation, you would extract the video ID and use YouTube Data API
    // For this example, we'll return mock data based on the URL
    return new Promise((resolve) => {
      setTimeout(() => {
        // Mock data based on video URLs
        const mockData = {
          'SB_hbvyFWZs': { views: '24K', channel: 'SAM Workshops' },
          'Y8JLI8xu22g': { views: '18K', channel: 'BW Disrupt' },
          'Yk8eHs3U8e4': { views: '56K', channel: 'New India Channel' },
          'QIQTNQypRsg': { views: '12K', channel: 'Rural Development Talks' },
          'd2NX83vb27g': { views: '42K', channel: 'Vyomini Foundation' },
          'XlAE822D0Pk': { views: '89K', channel: 'TEDx Talks' },
          'yBZo3cA2LzM': { views: '15K', channel: 'Women Entrepreneurship' },
          'NjhBa8ZIJPY': { views: '8K', channel: 'Rex Conclave' },
          'XlqVyY1pQUA': { views: '23K', channel: 'Entrepreneurship Panel' },
          'Ur0xcQQVcis': { views: '10K', channel: 'BW Disney WEBS' },
          'bnXCGSzPsfc': { views: '37K', channel: 'Social Impact Docs' },
          'ox8AagmEmPQ': { views: '31K', channel: 'Crazy Careers Podcast' },
          'RICpryHCKkM': { views: '14K', channel: 'Social Entrepreneurship Awards' },
          '12CMY0_EZl8': { views: '27K', channel: 'Community Development Channel' },
          'WXW75wDGfSg': { views: '19K', channel: 'Health & Social Enterprise' }
        };
        
        // Extract video ID from URL
        const videoId = videoUrl.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/))([^&?#]+)/)?.[1] || '';
        resolve(mockData[videoId] || { views: '10K', channel: 'Unknown Channel' });
      }, 200);
    });
  };

  useEffect(() => {
    const loadVideoData = async () => {
      const videoData = [
    {
      id: 1,
      title: "Women Transformation India Winner | Prachi Kaushik | SAM Workshops",
      description: "Prachi Kaushik shares her journey as a Women Transforming India award winner and her work with SAM workshops.",
      date: "2023-10-22",
      type: "interview",
      platform: "YouTube",
      duration: "15:30",
      url: "https://youtu.be/SB_hbvyFWZs?si=vwJbYe90-m7nY1dw",
      thumbnail: "https://img.youtube.com/vi/SB_hbvyFWZs/maxresdefault.jpg"
    },
    {
      id: 2,
      title: "Prachi Kaushik, Vyomini Social Enterprise | BW Disrupt WEBS 2024",
      description: "Interview with Prachi Kaushik at BW Disrupt Women Entrepreneurship and Business Summit 2024.",
      date: "2024-03-08",
      type: "interview",
      platform: "YouTube",
      duration: "12:45",
      url: "https://youtu.be/Y8JLI8xu22g?si=SIZ_EUYK85KuiaCA",
      thumbnail: "https://img.youtube.com/vi/Y8JLI8xu22g/maxresdefault.jpg"
    },
    {
      id: 3,
      title: "Episode 2: Prachi Kaushik - Pad Woman of New India",
      description: "In-depth episode featuring Prachi Kaushik as the Pad Woman of New India and her revolutionary work.",
      date: "2023-07-12",
      type: "interview",
      platform: "YouTube",
      duration: "25:40",
      url: "https://youtu.be/Yk8eHs3U8e4?si=miT6hpz5wMq651f_",
      thumbnail: "https://img.youtube.com/vi/Yk8eHs3U8e4/maxresdefault.jpg"
    },
    {
      id: 4,
      title: "Social Entrepreneurship in Rural Development | Prachi Kaushik",
      description: "Discussion on social entrepreneurship approaches to rural development and women empowerment.",
      date: "2023-09-15",
      type: "talk",
      platform: "YouTube",
      duration: "18:17",
      url: "https://youtu.be/QIQTNQypRsg?si=srXr5hrCqt0rkUXf",
      thumbnail: "https://img.youtube.com/vi/QIQTNQypRsg/maxresdefault.jpg"
    },
    {
      id: 5,
      title: "Menstrual Health Awareness Workshop | Vyomini Foundation",
      description: "Complete workshop on menstrual health awareness conducted by Vyomini Foundation in rural communities.",
      date: "2023-08-20",
      type: "workshop",
      platform: "YouTube",
      duration: "32:15",
      url: "https://youtu.be/d2NX83vb27g?si=JbZmuXhmGp2sW8OR",
      thumbnail: "https://img.youtube.com/vi/d2NX83vb27g/maxresdefault.jpg"
    },
    {
      id: 6,
      title: "Begusarai Women Reform | TEDx Talk",
      description: "TEDx talk featuring women's reform initiatives in Begusarai, including Prachi Kaushik's work.",
      date: "2023-09-15",
      type: "talk",
      platform: "YouTube",
      duration: "18:17",
      url: "https://youtu.be/XlAE822D0Pk?si=54IL8LbXipZm5tC3",
      thumbnail: "https://img.youtube.com/vi/XlAE822D0Pk/maxresdefault.jpg"
    },
    {
      id: 7,
      title: "Women Entrepreneurship Development Program | Complete Session",
      description: "Full session from the Women Entrepreneurship Development Program featuring Prachi Kaushik.",
      date: "2024-01-20",
      type: "webinar",
      platform: "YouTube",
      duration: "58:12",
      url: "https://youtu.be/yBZo3cA2LzM?si=aVxJUmueGEAbMXSt",
      thumbnail: "https://img.youtube.com/vi/yBZo3cA2LzM/maxresdefault.jpg"
    },
    {
      id: 8,
      title: "Rex Karamveer Global Fellowship | Prachi Kaushik Acceptance Speech",
      description: "Prachi Kaushik receiving the Rex Karamveer Global Fellowship award and sharing her vision.",
      date: "2023-08-20",
      type: "award",
      platform: "YouTube",
      duration: "7:35",
      url: "https://youtu.be/NjhBa8ZIJPY?si=WjrjTTczKhZVCvx5",
      thumbnail: "https://img.youtube.com/vi/NjhBa8ZIJPY/maxresdefault.jpg"
    },
    {
      id: 9,
      title: "Breaking Barriers in Rural Women Entrepreneurship | Panel Discussion",
      description: "Prachi Kaushik discussing challenges and solutions in rural women entrepreneurship development.",
      date: "2023-12-10",
      type: "panel",
      platform: "YouTube",
      duration: "42:30",
      url: "https://youtu.be/XlqVyY1pQUA?si=hcHnpnRh_-0Pr6Xi",
      thumbnail: "https://img.youtube.com/vi/XlqVyY1pQUA/maxresdefault.jpg"
    },
    {
      id: 10,
      title: "Prachi Kaushik, Vyomini Social Enterprise | BW Disney WEBS 2024",
      description: "Prachi Kaushik speaking at BW Disrupt Women Entrepreneurship and Business Summit 2024.",
      date: "2024-03-08",
      type: "talk",
      platform: "YouTube",
      duration: "10:22",
      url: "https://youtu.be/Ur0xcQQVcis?si=-eJmHsBXI2SoVLAY",
      thumbnail: "https://img.youtube.com/vi/Ur0xcQQVcis/maxresdefault.jpg"
    },
    {
      id: 11,
      title: "Vyomini Social Enterprise: Impact Documentary",
      description: "Comprehensive documentary on Vyomini Social Enterprise's impact and women empowerment initiatives.",
      date: "2024-02-15",
      type: "documentary",
      platform: "YouTube",
      duration: "22:30",
      url: "https://youtu.be/bnXCGSzPsfc?si=tvFaK6z7NirBZjUP",
      thumbnail: "https://img.youtube.com/vi/bnXCGSzPsfc/maxresdefault.jpg"
    },
    {
      id: 12,
      title: "Are Women Safe at Workplaces in India | The Crazy Careers Podcast",
      description: "Prachi Kaushik discusses women's safety in Indian workplaces and shares insights from her work.",
      date: "2023-11-15",
      type: "podcast",
      platform: "YouTube",
      duration: "8:42",
      url: "https://www.youtube.com/watch?v=ox8AagmEmPQ",
      thumbnail: "https://img.youtube.com/vi/ox8AagmEmPQ/maxresdefault.jpg"
    },
    {
      id: 13,
      title: "Social Entrepreneurship Awards 2023 | Prachi Kaushik",
      description: "Prachi Kaushik receiving recognition at the Social Entrepreneurship Awards 2023.",
      date: "2023-12-05",
      type: "award",
      platform: "YouTube",
      duration: "5:18",
      url: "https://www.youtube.com/watch?v=RICpryHCKkM",
      thumbnail: "https://img.youtube.com/vi/RICpryHCKkM/maxresdefault.jpg"
    },
    {
      id: 14,
      title: "Community Development Initiatives | Rural Transformation",
      description: "Documenting community development initiatives and rural transformation projects led by Vyomini.",
      date: "2024-01-10",
      type: "documentary",
      platform: "YouTube",
      duration: "28:45",
      url: "https://www.youtube.com/watch?v=12CMY0_EZl8",
      thumbnail: "https://img.youtube.com/vi/12CMY0_EZl8/maxresdefault.jpg"
    },
    {
      id: 15,
      title: "Social Entrepreneurship in Menstrual Health | Prachi Kaushik",
      description: "Discussion on social entrepreneurship approaches to menstrual health and hygiene in India.",
      date: "2023-06-28",
      type: "webinar",
      platform: "YouTube",
      duration: "42:15",
      url: "https://www.youtube.com/watch?v=WXW75wDGfSg",
      thumbnail: "https://img.youtube.com/vi/WXW75wDGfSg/maxresdefault.jpg"
    }
  ];

      // Fetch additional details for each video
      const videosWithDetails = await Promise.all(
        videoData.map(async (video) => {
          const details = await fetchVideoDetails(video.url);
          return { ...video, ...details };
        })
      );

      setVideos(videosWithDetails);
      setLoading(false);
    };

    loadVideoData();
  }, []);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {videos.map((video, index) => (
        <motion.div
          key={video.id}
          className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ y: -5 }}
        >
          <div className="relative aspect-video bg-gray-200 overflow-hidden">
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <a
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 bg-primary/80 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300 cursor-pointer"
              >
                <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </a>
            </div>
            <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
              {video.duration}
            </div>
          </div>
          
          <div className="p-5">
            <div className="flex items-center text-sm text-gray-600 mb-2">
              <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">
                {video.type}
              </span>
              <span className="mx-2">•</span>
              <span>{formatDate(video.date)}</span>
            </div>
            
            <h3 className="satoshi-bold text-lg text-gray-900 mb-2 line-clamp-2">
              {video.title}
            </h3>
            
            <p className="satoshi-regular text-gray-600 text-sm mb-3 line-clamp-2">
              {video.description}
            </p>
            
            <div className="flex items-center justify-between text-sm text-gray-600">
              <span className="satoshi-medium">{video.channel}</span>
              <span>{video.views} views</span>
            </div>
            
            <a
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 w-full bg-gray-100 hover:bg-gray-200 text-gray-800 satoshi-medium py-2 rounded-lg text-center block transition-colors duration-300"
            >
              Watch on YouTube
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default VideoGallery;