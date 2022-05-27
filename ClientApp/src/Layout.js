import Navbar from "./ui/Navbar";

function Layout({ children }) {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    );
}

export default Layout;
