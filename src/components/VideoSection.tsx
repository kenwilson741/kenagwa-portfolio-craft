
import { useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Play, Pause } from "lucide-react";

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  
  return (
    <section id="video-pitch" className="py-20 bg-gradient-to-br from-blue-50 to-white reveal" data-animation="fade-bottom">
      <div className="section-container">
        <div className="text-center mb-12 reveal" data-animation="fade-bottom">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">My Video Pitch</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Watch my pitch to learn more about my approach to data analytics and how I can add value to your organization.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto reveal" data-animation="fade-bottom">
          <div className="relative rounded-xl overflow-hidden bg-black shadow-xl transform transition-all duration-500 hover:scale-[1.01] hover:shadow-2xl">
            {/* Video placeholder - replace 'your-video.mp4' with your actual video */}
            <video 
              ref={videoRef}
              className="w-full aspect-video"
              poster="/lovable-uploads/da62318d-7fb1-466d-965b-e804646b610b.png"
              onEnded={() => setIsPlaying(false)}
            >
              <source src="/your-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {/* Play/Pause overlay */}
            <div 
              className="absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity duration-300"
              style={{ opacity: isPlaying ? 0 : 1 }}
            >
              <Button
                onClick={togglePlayPause}
                variant="outline"
                size="lg"
                className="rounded-full bg-white/80 hover:bg-white text-brand-600 hover:text-brand-700 w-16 h-16 flex items-center justify-center hover:scale-110 transition-transform"
              >
                {isPlaying ? <Pause className="h-8 w-8" /> : <Play className="h-8 w-8" />}
              </Button>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">
              Upload your video to replace this placeholder.
              <br />
              Recommended format: MP4, 16:9 aspect ratio, 1080p or higher.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
