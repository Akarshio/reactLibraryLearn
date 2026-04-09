
export default function Contact() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 md:px-12 xl:px-6">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
                    Contact Us
                </h2>
                <div className="max-w-xl mx-auto space-y-4">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />
                    <textarea
                        rows="5"
                        placeholder="Your Message"
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />
                    <button className="w-full bg-orange-700 text-white py-3 rounded-lg hover:bg-orange-800 transition">
                        Send Message
                    </button>
                </div>
            </div>
        </div>
    )
}