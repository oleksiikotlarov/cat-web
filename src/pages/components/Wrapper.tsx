import type { ReactNode } from "react";

interface WrapperProps {
    children: ReactNode;
    className?: string;
}

const Wrapper: React.FC<WrapperProps> = ({ children, className }) => {
    return (
        <div
            className={`w-full px-5 mx-auto h-full ${
                className || ""
            }`}
        >
            {children}
        </div>
    );
};

export default Wrapper;
