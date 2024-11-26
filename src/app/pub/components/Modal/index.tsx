import React, { ReactElement } from "react";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import Button from "@pub/components/Button";
import IcXmark from "@/assets/icons/ico_xmark_modal.svg";

export interface ModalButton {
    type: string;
    label: string;
    onClick?: () => void;
}

export interface ModalProps {
    open: boolean;
    title: string;
    desc?: string;
    handleClose: () => void;
    size: "s" | "m" | "l";
    children: ReactElement;
    btns?: ModalButton[];
}

export default function ModalBasic({
    open,
    handleClose,
    size,
    title,
    desc,
    btns = [],
    children,
}: ModalProps) {
    return (
        <>
            <Dialog open={open} onClose={handleClose} className="modal-basic">
                <DialogBackdrop transition className="modal-overlay" />
                <div className="modal-container">
                    <DialogPanel
                        transition
                        className={`modal-panel size-${size}`}
                    >
                        <div className="drawer-header flex align-center">
                            <div className="title">
                                {title}
                                {desc && <span>{desc}</span>}
                            </div>
                            <div className="flex items-center gap-3 ml-auto">
                                {btns.map((b) => (
                                    <Button
                                        key={b.label}
                                        type={b.type}
                                        size="m"
                                    >
                                        {b.label}
                                    </Button>
                                ))}
                            </div>
                        </div>

                        <button className="modal-close" onClick={handleClose}>
                            <IcXmark />
                        </button>
                        <div className="grow flex flex-col w-full">
                            {children}
                        </div>
                    </DialogPanel>
                </div>
            </Dialog>
        </>
    );
}
