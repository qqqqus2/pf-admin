import React, { ReactElement } from "react";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import Button from "@pub/components/Button";

export interface ModalProps {
  open: boolean;
  handleClose: () => void;
  btns?: { type: string; label: string }[];
  children: ReactElement;
}

export default function Alert({
  open,
  handleClose,
  btns,
  children,
}: ModalProps) {
  return (
    <>
      <Dialog open={open} onClose={handleClose} className="modal-alert">
        <DialogBackdrop transition className="modal-overlay" />
        <div className="modal-container">
          <DialogPanel transition className="modal-panel">
            <div className="grow flex flex-col gap-4 w-full">{children}</div>
            {btns && (
              <div className="modal-btns">
                {btns.map((b) => (
                  <Button
                    key={b.label}
                    type={b.type}
                    size="l"
                    onClick={handleClose}
                  >
                    {b.label}
                  </Button>
                ))}
              </div>
            )}
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
