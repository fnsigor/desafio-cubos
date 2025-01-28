import React, { InputHTMLAttributes, ReactNode } from "react";

export interface TextInputRootProps
    extends InputHTMLAttributes<HTMLInputElement> {
    children?: ReactNode;
    label?: string;
    icon?: any;
}

const Input = ({ children, label, icon, ...props }: TextInputRootProps) => {
    return (
        <div className="bg-mauve-2 flex grow rounded border border-text-secondary">
           <div className="grow">
             {label && (
                <label className="text-text-primary text-xs font-bold" htmlFor={props.id}>
                    {label}
                </label>
            )}
            <input type="text" {...props} className="outline-primary-light text-text-primary p-3 bg-transparent w-full grow" />
           </div>
            {children && <>{children}</>}
        </div>
    );
};

export { Input };
