import React, { ReactElement } from "react";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import IcXmark from "@/assets/icons/ico_xmark_modal.svg";

export interface ModalProps {
  open: boolean;
  handleClose: () => void;
  size: "s" | "m" | "l";
  children: ReactElement;
}

export default function ModalBasic({
  open,
  handleClose,
  size,
  children,
}: ModalProps) {
  return (
    <>
      <Dialog open={open} onClose={handleClose} className="modal-basic">
        <DialogBackdrop transition className="modal-overlay" />
        <div className="modal-container">
          <DialogPanel transition className={`modal-panel size-${size}`}>
            <button className="modal-close" onClick={handleClose}>
              <IcXmark />
            </button>
            <div className="grow flex flex-col w-full">{children}</div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
