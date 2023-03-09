import { useState } from "react";

export default function EmailModal() {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const isBrowser = () => typeof window !== "undefined";

  function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    setShowModal(false);
    let data = {
      email,
      subject,
      message,
    };
    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.status === 200) {
        setSubmitted(true);
        setShowToast(true);
        setEmail("");
        setSubject("");
        setMessage("");
        scrollToTop();
      }
    });
  };

  return (
    <>
      {showToast ? (
        <div
          class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md z-50 fixed inset-0 h-20"
          role="alert"
        >
          <div class="flex items-center justify-between">
            <div>
              <p class="font-bold">Your message was sent!</p>
              <p class="text-sm">
                I&apos;ll get back to you. Pa wait na lang lods :D
              </p>
            </div>
            <svg
              onClick={() => setShowToast(false)}
              class="fill-current h-6 w-6 text-gray-700"
              role="button"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <title>Close</title>
              <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
            </svg>
          </div>
        </div>
      ) : null}
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
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
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
                          onChange={(e) => {
                            setSubject(e.target.value);
                          }}
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
                          onChange={(e) => {
                            setMessage(e.target.value);
                          }}
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
                          onClick={(e) => {
                            handleSubmit(e);
                          }}
                          type="submit"
                          className="px-6 py-3 mb-1 mr-1 text-sm font-semibold text-white transition-all duration-150 ease-linear bg-teal-400 rounded shadow outline-none active:bg-teal-600 hover:shadow-lg focus:outline-none"
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
