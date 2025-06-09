import type { UseMutationResult } from "@tanstack/react-query";
import { createPortal } from "react-dom"

type DeleteAccountModalProps = {
    setConfirmationModal: React.Dispatch<React.SetStateAction<boolean>>,
    deleteAccountMutation: UseMutationResult<string | undefined, Error, void, unknown>
}

export default function DeleteAccountModal({setConfirmationModal, deleteAccountMutation} : DeleteAccountModalProps) {

    const modalRoot = document.getElementById("accountContainer");
    if (!modalRoot) return null;

    return createPortal(
        <div className="w-full h-full bg-slate-300 absolute top-0 left-0 flex flex-col items-center justify-center space-y-4 p-10">
            <p className="text-dark text-xl text-center text-balance">Estás a punto de eliminar tu cuenta, esta acción no se puede deshacer</p>
            <p className="text-dark text-xl text-center text-balance">¿Estás seguro de que quieres continuar?</p>
            <div className="flex gap-4 flex-col sm:flex-row">
                <button 
                    onClick={() => setConfirmationModal(false)}
                    className="bg-orange hover:bg-orange-light px-6 py-3 rounded-lg text-dark font-bold"
                >
                    CANCELAR
                </button>
                <button 
                    onClick={() => deleteAccountMutation.mutate()}
                    className="bg-red-600 hover:bg-red-500 px-6 py-3 rounded-lg text-dark font-bold"
                    id="confirmDeletion"
                >
                    CONFIRMAR
                </button>
            </div>
        </div>,
        modalRoot
    )
}
