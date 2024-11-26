import React, { ReactElement } from "react";
import Button from "@pub/components/Button";
import IcXmark from "@/assets/icons/ico_xmark_drawer.svg";
import IcExcel from "@/assets/icons/ico_excel.svg";

export interface DrawerProps {
    id: string;
    open: boolean;
    handleClose: (open) => void;
    title: string;
    desc?: string;
    btns: { type: string; icon?: boolean; label: string }[];
    children: ReactElement;
}

export default function Drawer({
    id,
    open,
    handleClose,
    title,
    desc,
    btns,
    children,
}: DrawerProps) {
    return (
        <div className="drawer drawer-end drawer-basic">
            <input
                id={id}
                type="checkbox"
                className="drawer-toggle"
                checked={open}
                onChange={() => handleClose((open) => !open)}
            />
            <div className="drawer-side">
                <label
                    htmlFor={id}
                    aria-label="close sidebar"
                    className="drawer-overlay"
                ></label>
                <div className="drawer-inner">
                    <label
                        htmlFor={id}
                        aria-label="close sidebar"
                        className="drawer-close"
                    >
                        <IcXmark />
                    </label>
                    <div className="drawer-header">
                        <div className="title">
                            {title}
                            {desc && <span>{desc}</span>}
                        </div>
                        <div className="flex items-center gap-3">
                            {btns.map((b) => (
                                <Button key={b.label} type={b.type} size="m">
                                    {b.icon && <IcExcel />}
                                    {b.label}
                                </Button>
                            ))}
                        </div>
                    </div>
                    <div className="drawer-body">
                        <div className="w-[48.75rem]">{children}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
