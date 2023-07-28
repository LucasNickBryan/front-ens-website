import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const notify = (fn) => {
  // type : info | error | success | warn | update
  toast.promise(
    fn,
    {
      pending: 'en cours ...',
      success: "Opération effectuée",
      error: "Une erreur s'est produite",
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
