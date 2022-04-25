const Detail = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4 md:items-start md:flex-row gap-x-10 gap-y-4">
      <div className="flex flex-col items-center w-full space-y-3 md:w-auto">
        <div className="mt-2 border rounded shadow-xl bg-slate-400 w-[200px] md:w-[300px] md:h-[450px] h-[300px] animate-pulse" />
        <div className="flex w-full h-8 justify-betwee gap-x-3">
          <div className="w-1/2 rounded-md bg-slate-400 animate-pulse" />
          <div className="w-1/2 rounded-md bg-slate-400 animate-pulse" />
        </div>
      </div>
      <div className="flex-col w-full max-w-lg space-y-4 text-gelap-700">
        <div className="w-32 h-4 rounded-md bg-slate-400 animate-pulse" />
        <div className="text-base">
          <div className="w-32 h-3 rounded-md bg-slate-400 animate-pulse" />
          <ul className="mt-2 list-disc list-inside marker:text-slate-400">
            <li>
              <div className="inline-flex w-32 h-3 rounded-md bg-slate-400 animate-pulse" />
            </li>
          </ul>
        </div>
        <div className="inline-flex w-full py-2 space-x-5 text-sm border-y">
          <div className="inline-flex w-16 h-3 rounded-md bg-slate-400 animate-pulse" />
          <div className="inline-flex w-16 h-3 rounded-md bg-slate-400 animate-pulse" />
        </div>
        <div className="space-y-1">
          <h5 className="text-lg font-semibold">
            <div className="inline-flex w-32 h-3 rounded-md bg-slate-400 animate-pulse" />
          </h5>
          <div className="flex flex-col space-y-2">
            <div className="inline-flex h-3 rounded-md w-72 bg-slate-400 animate-pulse" />
            <div className="inline-flex h-3 rounded-md w-72 bg-slate-400 animate-pulse" />
          </div>
        </div>
        <div className="space-y-1">
          <h5 className="text-lg font-semibold">
            <div className="inline-flex w-32 h-3 rounded-md bg-slate-400 animate-pulse" />
          </h5>
          <div className="space-y-3">
            <ol className="ml-4 list-disc divide-y text-gelap-500 marker:font-semibold marker:text-slate-400">
              <li className="py-2">
                <h5 className="inline-flex ml-2 text-base font-semibold">
                  <div className="inline-flex w-32 h-3 rounded-md bg-slate-400 animate-pulse" />
                </h5>
              </li>
              <li className="py-2">
                <h5 className="inline-flex ml-2 text-base font-semibold">
                  <div className="inline-flex w-32 h-3 rounded-md bg-slate-400 animate-pulse" />
                </h5>
              </li>
              <li className="py-2">
                <h5 className="inline-flex ml-2 text-base font-semibold">
                  <div className="inline-flex w-32 h-3 rounded-md bg-slate-400 animate-pulse" />
                </h5>
              </li>
              <li className="py-2">
                <h5 className="inline-flex ml-2 text-base font-semibold">
                  <div className="inline-flex w-32 h-3 rounded-md bg-slate-400 animate-pulse" />
                </h5>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
