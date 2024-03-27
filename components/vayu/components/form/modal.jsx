import { CrossIcon } from "../../../../assets/svg/CrossCircle";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useRef } from "react";
// import { FiCrosshair } from "react-icons/fi";

export const Modal = (props) => {
  const cancelButtonRef = useRef(null);
  return (
    <Transition.Root show={props.open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={props.setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"

        >
          <div className="fixed inset-0 bg-[#000000] bg-opacity-40 backdrop-blur-[2px]" />
        </Transition.Child>
        

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        
          <div className="flex min-h-full justify-center p-4 text-center items-center sm:p-0">
          
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform w-full rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div className="mx-auto absolute right-[-10px] top-[-10px] flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full  cursor-pointer" onClick={() => props.setOpen(false)}>
                      <CrossIcon />
                    </div>
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 w-full rounded-lg">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center ">
                      <Dialog.Title
                        as="h3"
                        className="text-xl font-fredoka te leading-6 text-[#414042]"
                      >
                        Why we ask?
                      </Dialog.Title>
                      <div className="mt-6">
                        <p className="text-sm text-gray-500">{props.text}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex justify-center sm:px-6 rounded-lg">
                  <button
                    type="button"
                    className="flex w-full h-[48px] items-center bg-[#9BB96F] justify-center rounded-lg text-[20px] font-bold px-3 py-2 text-sm text-[#414042] shadow-sm ring-1 ring-inset ring-gray-300"
                    onClick={() => props.setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Okay
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
