import { create } from "zustand";
import MESSAGE from "@/constants/message";
import PUB from "../constants/pub";


/**
 * 팝업 store 정의
 * - alert
 * // - panel
 * // - toast 
 * 
 * @param open 열기 상태
 * @param contents 컨텐츠 컴포넌트
 * @param size 사이즈 // s | m | l
 */
const usePopupStore = create((set) => ({
    confirm: {
        open: false,
        title: '',
        type: 'alert', // alert, confirm
        desc: '',
        cancelBtnText: MESSAGE.CANCEL,
        confirmBtnText: MESSAGE.CONFIRM,
        onConfirm: () => {},
    },

    modal: {
        open: false,
        size: 's',
        contents: '',

        showBtnGroup: false,
        btnGroup: {
            showCancelBtn: true,
            cancelBtnType: PUB.BUTTON.COLOR.GRAY,
            cancelBtnText: MESSAGE.CANCEL,
            
            showConfirmBtn: true,
            confirmBtnType: PUB.BUTTON.COLOR.GREEN,
            confirmBtnText: MESSAGE.CONFIRM,
            onConfirm: () => {},
        },
    },

    loading: {
        open: false
    },

    // 알림창 열고 닫기
    openConfirm: (open, data={}) => set(() => {
        const { type, title, desc, cancelBtnText, confirmBtnText, onConfirm } = data
        return {
            confirm: {
                open: open,

                type: type || 'alert',
                title: title ?? '',
                desc: desc ?? '',
                cancelBtnText: cancelBtnText || MESSAGE.CANCEL,
                confirmBtnText: confirmBtnText || MESSAGE.CONFIRM,
                onConfirm: onConfirm || (closeConfirm => closeConfirm()),
            }
        }
    }),

    openModal: (open, data={}) => set(() => {
        const { size, contents, showBtnGroup, btnGroup={} } = data
        return {
            modal: {
                open: open,

                size: size || PUB.SIZE.S,
                contents: contents ?? '',

                showBtnGroup: showBtnGroup || false,
                btnGroup: {
                    showCancelBtn: btnGroup.showCancelBtn || true,
                    cancelBtnType: btnGroup.cancelBtnType || PUB.BUTTON.COLOR.GRAY,
                    cancelBtnText: btnGroup.cancelBtnText || MESSAGE.CANCEL,
                    
                    showConfirmBtn: btnGroup.showConfirmBtn || true,
                    confirmBtnType: btnGroup.confirmBtnType || PUB.BUTTON.COLOR.GREEN,
                    confirmBtnText: btnGroup.confirmBtnText || MESSAGE.CONFIRM,
                    onConfirm: btnGroup.onConfirm || (closeConfirm => closeConfirm()),
                },
            }
        }
    }),

    // 로딩
    openLoading: open => set(() => {
        return { loading: { open } }
    }),
}));

export default usePopupStore;