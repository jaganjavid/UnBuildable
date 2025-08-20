import {
    RunawayButton,
    SelfDeletingTodo,
    ReverseInput,
    ExplodingCheckbox,
    InfiniteModal,
    RageSlider,
    TeleportButton,
    LieDetectorField,
    ConfirmationLoop
  } from '../components/chaos';
  
  import ChaosCard from '../components/shared/ChaosCard';
  import { motion } from 'framer-motion';
  import { Link } from 'react-router-dom';
  
  const ChaosGallery = () => {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0D0D0D] to-[#1c1c1c] text-white px-6 py-12">
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-12">
  
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold tracking-wide">
              🧪 The Chaos Lab
            </h1>
            <p className="text-gray-400 mt-3 max-w-xl mx-auto">
              These components were not meant to be used. But we built them anyway.
            </p>
          </motion.div>
  
          {/* Chaos Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
          >
            <ChaosCard title="🟥 Runaway Button"><RunawayButton /></ChaosCard>
            <ChaosCard title="🗑 Self-Deleting Todo"><SelfDeletingTodo /></ChaosCard>
            <ChaosCard title="🔁 Reverse Input"><ReverseInput /></ChaosCard>
            <ChaosCard title="💥 Exploding Checkbox"><ExplodingCheckbox /></ChaosCard>
            <ChaosCard title="🌀 Infinite Modal"><InfiniteModal /></ChaosCard>
            <ChaosCard title="😡 Rage Slider"><RageSlider /></ChaosCard>
            <ChaosCard title="🟣 Teleport Button"><TeleportButton /></ChaosCard>
            <ChaosCard title="🧪 Lie Detector Field"><LieDetectorField /></ChaosCard>
            <ChaosCard title="🔁 Confirmation Loop"><ConfirmationLoop /></ChaosCard>
          </motion.div>
  
          {/* Back Home */}
          <Link
            to="/"
            className="text-chaos font-semibold hover:underline mt-8"
          >
            ← Back to Safety
          </Link>
        </div>
      </div>
    );
  };
  
  export default ChaosGallery;
  