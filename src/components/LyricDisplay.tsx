
import BlurImage from "./BlurImage";

const LyricDisplay = () => {
  return (
    <div className="min-h-screen bg-soft-bg px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl animate-fade-up">
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 md:items-start">
          <div className="w-full">
            <BlurImage
              src="https://images.unsplash.com/photo-1500673922987-e212871fec22"
              alt="Atmospheric image"
              className="aspect-square w-full rounded-2xl object-cover shadow-xl"
            />
            <div className="mt-4 text-center">
              <span className="inline-block rounded-full bg-soft-title px-3 py-1 text-sm font-medium text-soft-text animate-fade-in">
                Song Title
              </span>
              <h1 className="mt-2 text-2xl font-bold tracking-tight text-soft-text">
                Example Song Title
              </h1>
              <p className="mt-1 text-sm text-soft-text/80">Artist Name</p>
            </div>
          </div>

          <div className="space-y-8 text-lg leading-8 text-soft-text">
            <p className="font-medium">
              [Please add your own non-copyrighted lyrics here]
            </p>
            <p className="italic text-soft-text/70">
              This is a sample lyrics display.
              <br />
              Replace with your own content.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LyricDisplay;
