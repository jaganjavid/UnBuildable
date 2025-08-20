const ChaosCard = ({ title, children }) => {
    return (
      <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-xl p-6 shadow-xl hover:shadow-chaos transition-all duration-300 hover:scale-[1.02] min-h-[240px]">
        <h3 className="text-xl font-display font-semibold text-white mb-4">{title}</h3>
        <div>{children}</div>
      </div>
    );
  };
  
export default ChaosCard;
  