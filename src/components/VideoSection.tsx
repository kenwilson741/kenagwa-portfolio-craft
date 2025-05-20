
import { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Play, Pause } from "lucide-react";
import { toast } from "@/components/ui/sonner";

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isGoogleDriveVideo, setIsGoogleDriveVideo] = useState(true);
  
  // Google Drive video URL
  const googleDriveUrl = "https://drive.google.com/file/d/1-mzDrNZiDTvrVvrlR2K5LeDL_XHoCy_l/view?usp=drivesdk";
  
  // Function to convert Google Drive URL to embed format
  const getGoogleDriveEmbedUrl = (url: string): string => {
    try {
      // Extract the file ID from the URL
      const regex = /\/file\/d\/([^/]+)/;
      const match = url.match(regex);
      
      if (match && match[1]) {
        const fileId = match[1];
        return `https://drive.google.com/file/d/${fileId}/preview`;
      }
      
      throw new Error("Invalid Google Drive URL format");
    } catch (error) {
      console.error("Error processing Google Drive URL:", error);
      toast.error("Could not embed the video. Please try a different link.");
      return "";
    }
  };
  
  const embedUrl = getGoogleDriveEmbedUrl(googleDriveUrl);
  
  const togglePlayPause = () => {
    if (isGoogleDriveVideo && iframeRef.current) {
      // Google Drive videos in iframes cannot be directly controlled with JavaScript
      // due to cross-origin restrictions, so we'll just show a message
      toast.info("Control playback using the embedded player controls.");
      return;
    }
    
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  
  // Handle errors for the iframe embed
  useEffect(() => {
    const handleIframeError = () => {
      setIsGoogleDriveVideo(false);
      toast.error("Could not load the embedded video. Falling back to direct link.");
    };
    
    const iframe = iframeRef.current;
    if (iframe) {
      iframe.addEventListener('error', handleIframeError);
      return () => {
        iframe.removeEventListener('error', handleIframeError);
      };
    }
  }, []);
  
  return (
    <section id="video-pitch" className="py-16 sm:py-20 bg-gradient-to-br from-blue-50 to-white reveal" data-animation="fade-bottom">
      <div className="section-container px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 reveal" data-animation="fade-bottom">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">My Video Pitch</h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Watch my pitch to learn more about my approach to data analytics and how I can add value to your organization.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto reveal" data-animation="fade-bottom">
          <div className="relative rounded-xl overflow-hidden bg-black shadow-xl transform transition-all duration-500 hover:scale-[1.01] hover:shadow-2xl">
            {isGoogleDriveVideo ? (
              <div className="w-full aspect-video">
                <iframe
                  ref={iframeRef}
                  src={embedUrl}
                  className="w-full h-full border-0"
                  allowFullScreen
                  allow="autoplay"
                  title="Video Pitch"
                  onError={() => setIsGoogleDriveVideo(false)}
                />
              </div>
            ) : (
              // Fallback video player
              <video 
                ref={videoRef}
                className="w-full aspect-video"
                poster="/lovable-uploads/da62318d-7fb1-466d-965b-e804646b610b.png"
                onEnded={() => setIsPlaying(false)}
                playsInline
                controls={!isPlaying}
              >
                <source src="/your-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
            
            {/* Play/Pause overlay - only shown for the non-Google Drive video */}
            {!isGoogleDriveVideo && (
              <div 
                className="absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity duration-300"
                style={{ opacity: isPlaying ? 0 : 1 }}
                onClick={togglePlayPause}
              >
                <Button
                  onClick={(e) => {
                    e.stopPropagation();
                    togglePlayPause();
                  }}
                  variant="outline"
                  size="icon"
                  className="rounded-full bg-white/80 hover:bg-white text-brand-600 hover:text-brand-700 w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center hover:scale-110 transition-transform"
                >
                  {isPlaying ? <Pause className="h-6 w-6 sm:h-8 sm:w-8" /> : <Play className="h-6 w-6 sm:h-8 sm:w-8" />}
                </Button>
              </div>
            )}
          </div>
          
          <div className="mt-4 sm:mt-6 text-center">
            <p className="text-xs sm:text-sm text-gray-500">
              {isGoogleDriveVideo ? 
                "Video embedded from Google Drive. Use the player controls to watch." :
                "Upload your video to replace this placeholder. Recommended format: MP4, 16:9 aspect ratio, 1080p or higher."
              }
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
