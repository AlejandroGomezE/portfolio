export default function AppSolution({ image, children }: { image: string; children: React.ReactNode }) {
  return (
    <div className="@container">
      <div className="grid grid-cols-1 gap-x-4 @4xl:mx-0 @4xl:grid-cols-2 @4xl:items-start">
        <div className="py-4 @4xl:sticky @4xl:top-1 @4xl:col-start-2 @4xl:row-start-1">
          <img className="w-[48rem] rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]" src={`/projects/diagrams/${image}`} alt="" />
          <p className="flex text-gray-500 mt-1 gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>

            <span className="text-sm">The high level design of the application is shown in the image.</span>
          </p>
        </div>
        <div className="w-full @4xl:col-span-1 @4xl:col-start-1">{children}</div>
      </div>
    </div>
  );
}
