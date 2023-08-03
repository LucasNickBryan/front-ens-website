import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const notify = (fn, pmsg, smsg, emsg) => {
  // type : info | error | success | warn | update
  toast.promise(
    fn,
    {
      pending: pmsg ?? 'en cours ...',
      success: smsg ?? "Opération effectuée",
      error: emsg ?? "Une erreur s'est produite",
    },
    {
      theme: "colored"
    }
  )
};

export default function Notification() {
  return (
    <ToastContainer />
  )
}
