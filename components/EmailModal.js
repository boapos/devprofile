import React from "react";

export default function EmailModal() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        className="px-6 py-3 mb-1 mr-1 text-lg font-semibold text-white transition-all duration-150 ease-linear bg-teal-400 rounded shadow outline-none active:bg-teal-600 hover:shadow-lg focus:outline-none"
        type="button"
        onClick={() => setShowModal(true)}
      >
        send an email :D
      </button>
      {showModal ? (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
            <div className="relative max-w-3xl mx-auto my-6 w-96">
              {/*content*/}
              <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                <section className="">
                  <div className="max-w-screen-md mx-auto px-7 py-7 ">
                    <form action="#" className="space-y-8">
                      <div>
                        <label
                          for="email"
                          class="block mb-2 text-sm font-medium text-gray-900 "
                        >
                          Your email
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
                          placeholder="bobsilog@gmail.com"
                          required
                        />
                      </div>
                      <div>
                        <label
                          for="subject"
                          className="block mb-2 text-sm font-medium text-gray-900 "
                        >
                          Subject
                        </label>
                        <input
                          type="text"
                          id="subject"
                          className="block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg shadow-sm bg-gray-50 focus:ring-primary-500 focus:border-primary-500 "
                          placeholder="Let me know how I can help you"
                          required
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <label
                          for="message"
                          className="block mb-2 text-sm font-medium text-gray-900"
                        >
                          Your message
                        </label>
                        <textarea
                          id="message"
                          rows="6"
                          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                          placeholder="Leave a message..."
                        ></textarea>
                      </div>
                      <div className="flex items-center justify-end rounded-b border-slate-200">
                        <button
                          className="px-6 py-2 mb-1 mr-1 text-sm font-semibold text-gray-600 transition-all duration-150 ease-linear outline-none background-transparent focus:outline-none"
                          type="button"
                          onClick={() => setShowModal(false)}
                        >
                          cancel
                        </button>
                        <button
                          type="submit"
                          className="px-6 py-3 mb-1 mr-1 text-sm font-semibold text-white transition-all duration-150 ease-linear bg-teal-400 rounded shadow outline-none active:bg-teal-600 hover:shadow-lg focus:outline-none"
                          onClick={() => setShowModal(false)}
                        >
                          send!
                        </button>
                      </div>
                    </form>
                  </div>
                </section>
                {/*footer*/}
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
        </>
      ) : null}
    </>
  );
}
