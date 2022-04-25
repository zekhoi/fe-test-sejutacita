const Card = () => {
  return (
    <div className="max-w-[200px] w-full mx-auto rounded-lg space-y-3">
      <div className="w-full rounded-lg bg-slate-400 h-[300px] animate-pulse"></div>
      <div className="space-y-1">
        <div className="w-3/4 h-2.5 rounded bg-slate-400 animate-pulse" />
        <div className="w-1/3 h-2.5 rounded bg-slate-400 animate-pulse" />
      </div>
    </div>
  );
};

export default Card;
