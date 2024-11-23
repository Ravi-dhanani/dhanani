import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";

interface ModalDialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  title: string;
  buttonText?: string;
  children: React.ReactNode;
}

const ModalDialog: React.FC<ModalDialogProps> = ({
  open,
  setOpen,
  title,
  buttonText = "Confirm",
  children,
}) => {
  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        {/* Background overlay */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        {/* Modal container */}
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative  w-full  transform overflow-scroll rounded-lg bg-white px-6 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <Dialog.Title
                  as="h3"
                  className="mb-4 text-lg font-semibold leading-6 text-gray-900"
                >
                  <div className="flex flex-row justify-between py-3">
                    <span className="text-2xl">{title}</span>
                    <button
                      type="button"
                      onClick={() => setOpen(!open)}
                      className="inline-flex h-8 w-5 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      <svg
                        className="h-3 w-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7l-6 6"
                        />
                      </svg>
                    </button>
                  </div>
                </Dialog.Title>
                {children}

                <div className="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                    onClick={() => setOpen(false)}
                  >
                    {buttonText}
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Cancel
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

export default ModalDialog;
