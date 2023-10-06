export default function TabsContainer() {
  return (
    <div className="border-b-2 bg-dark_bg border-dark_border sticky top-0 z-20">
      <Tab>Tab1</Tab>
    </div>
  );
}

const Tab = ({ children }: { children: React.ReactNode }) => {
  return <div className=" after:bg-[#3D59A1] after:absolute after:bottom-0 after:translate-y-[2px] after:left-0 after:right-0 after:h-[2px] w-max relative">{children}</div>;
};
