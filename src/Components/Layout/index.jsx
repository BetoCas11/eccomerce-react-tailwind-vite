
function Layout ({children}) {
    return (
        <div className="w-full max-w-screen-lg h-auto grid  grid-cols-[repeat(auto-fit,minmax(225px,270px))] justify-items-center justify-center mt-48 gap-y-[50px]">{children}</div>
    );
};
export default Layout