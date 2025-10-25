export const Video = () => {
  return (
    <div className="mt-8 mb-8">
      <video
        className="w-full h-auto rounded-lg shadow-lg"
        controls
        preload="metadata"
        poster="/jhon-pic.jpg"
      >
        <source src="/videos/about-me-dev.mov" type="video/mp4" />
        <source src="/videos/about-me-dev.mov" type="video/quicktime" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};
