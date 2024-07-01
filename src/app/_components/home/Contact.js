import React from "react";

export default function Contact() {
  return (
    <>
      <div className="container mx-auto flex  items-center flex-col md:flex-row bg-gray-100 p-10 min-h-screen">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <div className="text-4xl font-bold text-primaryBlue mb-4">Contact Us</div>
          <p className="text-gray mb-8">
            Email us, call or fill the form to let us know how we can solve your
            problem.
          </p>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Customer Support
          </h3>
          <p className="text-gray mb-6">
            Our Customer Support Team is available around the clock to address
            any concerns you may have.
          </p>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Feedback and Suggestions
          </h3>
          <p className="text-gray">
            We value your feedback and we are continuously working to improve
            VBC. Leave your complaints and suggestions in the form.
          </p>
        </div>
        <div className="md:w-1/2 bg-white p-6 rounded-xl shadow-md">
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="p-3 border border-stone-400 rounded-3xl focus:outline-none"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="p-3 border border-stone-400 rounded-3xl focus:outline-none"
              />
            </div>
            <div className="mt-4">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border border-stone-400 rounded-3xl focus:outline-none"
              />
            </div>
            <div className="mt-4">
              <div className="flex">
                <select className="p-3 border  border-stone-400 rounded-l-3xl focus:outline-none">
                  <option>+92</option>
                </select>
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="w-full p-3 border  border-stone-400  rounded-r-3xl focus:outline-none"
                />
              </div>
            </div>
            <div className="mt-4">
              <textarea
                placeholder="How can we help?"
                className="w-full p-3 border border-stone-400  rounded-lg h-32 focus:outline-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full mt-6 p-3 bg-blue-600 text-white rounded-3xl hover:bg-blue-700"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
