export default function RouteMap() {
  return (
    <section className="bg-surface-container-low py-24">
      <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
        <div className="lg:col-span-1 space-y-8">
          <h2 className="font-headline text-6xl uppercase leading-tight">
            YOUR ROAD THROUGH<br />
            <span className="text-primary-container">RAJASTHAN</span>
          </h2>
          <div className="grid grid-cols-1 gap-6">
            <div className="p-6 bg-surface-container-highest flex flex-col gap-2">
              <span className="font-title text-secondary tracking-widest text-xs">START POINT</span>
              <span className="font-headline text-2xl">JAL MAHAL PALACE</span>
            </div>
            <div className="p-6 bg-surface-container-highest flex flex-col gap-2">
              <span className="font-title text-secondary tracking-widest text-xs">SURFACE TYPE</span>
              <span className="font-headline text-2xl">COBBLESTONE & SAND</span>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-2 relative h-[500px] bg-background">
          <img 
            alt="Route Map" 
            className="w-full h-full object-cover opacity-60 grayscale" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDagZLaPZnRwo_Qp4ojERSxOmDzqxC_XGbP_ayThSxae53Z0iE8XjxIBk29a5OSGqlZhwaLFtKWoQBvrl-X6MQHQUVRCugRwESWUEYFBCDaV0cSjTS7CcjFsB1sMOMhs72rvVw2lf6NmcUp2QTRTCqwmwWaTkYAQdUCddMayKbAUpNbrZlWn6weZ91ODJuWVMOQX7ShGgon5ctMvekWK_ATnDgS-j5qOtbVoQ0ShY9BrKI7Ym87cHjOPTfr17xDsfNOJQZivycO0hgm" 
          />
          <div className="absolute inset-0 ring-1 ring-inset ring-outline-variant/20"></div>
        </div>
      </div>
    </section>
  );
}
