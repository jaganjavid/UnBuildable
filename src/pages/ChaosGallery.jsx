import {
    RunawayButton,
    SelfDeletingTodo,
    ReverseInput,
    ExplodingCheckbox,
    InfiniteModal,
    RageSlider
  } from '../components/chaos';
  
  const ChaosGallery = () => {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black to-gray-900 text-white px-6 py-10 flex flex-col items-center gap-10">
        <h1 className="text-4xl font-bold tracking-widest">🧪 Chaos Gallery</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
          <RunawayButton />
          <SelfDeletingTodo />
          <ReverseInput />
          <ExplodingCheckbox />
          <InfiniteModal />
          <RageSlider />
        </div>
      </div>
    );
  };
  
  export default ChaosGallery;
  