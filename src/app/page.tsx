import { VideoBackground } from "@/components/VideoBackground/VideoBackground";

export default function HomePage() {
  return (
    <div>
      <VideoBackground
        src="videos/placeholder.mp4"
        isAutoPlay
        isLoop
        isMuted
      />
    </div>
  );
}
