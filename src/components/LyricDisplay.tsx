
import BlurImage from "./BlurImage";

const LyricDisplay = () => {
  return (
    <div className="min-h-screen bg-soft-bg px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl animate-fade-up">
        <div className="text-center">
          <span className="inline-block rounded-full bg-soft-title px-3 py-1 text-sm font-medium text-soft-text animate-fade-in">
            Song Title
          </span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-soft-text sm:text-5xl">
            Example Song Title
          </h1>
          <p className="mt-2 text-lg text-soft-text/80">Artist Name</p>
        </div>

        <div className="mt-12">
          <BlurImage
            src="https://images.unsplash.com/photo-1500673922987-e212871fec22"
            alt="Atmospheric image"
            className="aspect-[16/9] w-full rounded-2xl object-cover shadow-xl"
          />
        </div>

        <div className="mt-16 space-y-8 text-lg leading-8 text-soft-text">
          <p className="text-center font-medium">
            [Please add your own non-copyrighted lyrics here]
          </p>
          <p className="text-center italic text-soft-text/70">
            This is a sample lyrics display.
            <br />
            Replace with your own content.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LyricDisplay;
