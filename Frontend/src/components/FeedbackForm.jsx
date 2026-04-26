import { useState } from "react";

export default function FeedbackForm({ isLightMode }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [feedback, setFeedback] = useState("");
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
  const [feedbackSent, setFeedbackSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleEmailSubmit = (event) => {
    event.preventDefault();
    const emailValue = email.trim();

    if (!emailValue || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
      return;
    }

    setIsFeedbackOpen(true);
    setFeedbackSent(false);
  };

  const handleFeedbackSubmit = async (event) => {
    event.preventDefault();
    if (!name.trim() || !feedback.trim()) return;

    setIsSubmitting(true);

    try {
      const scriptURL = "https://script.google.com/macros/s/AKfycbzc2pU0EtxaGZIOZjyeHgiOMgWj2FDW6Po-RFFw7MMNLzMfI30-wob57DzV0P1Q14m_/exec";
      
      await fetch(scriptURL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          feedback,
          timestamp: new Date().toISOString()
        }),
      })
      .then(res => res.text()) // Note: This will be empty due to no-cors
      .then(data => console.log("Response:", data))
      .catch(err => console.error(err));

      setFeedbackSent(true);
      setName("");
      setFeedback("");
    } catch (error) {
      console.error("Feedback submission failed:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full">
      <form onSubmit={handleEmailSubmit} className="flex flex-col md:flex-row items-center gap-6 w-full max-w-4xl">
        <label className={`shrink-0 font-title text-[10px] font-bold uppercase tracking-[0.25em] ${isLightMode ? "text-[#8b5a3d]" : "text-secondary/90"}`}>
          Feedback
        </label>
        <div className="flex items-center gap-2 flex-1 w-full">
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Enter Gmail"
            className={`w-full rounded-full border px-4 py-2 text-sm outline-none transition-colors ${
              isLightMode
                ? "border-[#d9b8a2] bg-white text-[#2f1c12] placeholder:text-[#8f6b57] focus:border-primary-container"
                : "border-outline-variant/40 bg-surface-container text-on-surface placeholder:text-secondary/70 focus:border-primary-container"
            }`}
            required
          />
          <button
            type="submit"
            className="rounded-full bg-primary-container px-6 py-2 font-title text-xs uppercase tracking-wider text-on-primary-container transition-all hover:bg-primary hover:scale-105 active:scale-95 whitespace-nowrap"
          >
            Next
          </button>
        </div>
      </form>

      {isFeedbackOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm">
          <div className={`w-full max-w-md rounded-2xl border p-6 shadow-2xl ${
            isLightMode
              ? "border-[#debfa9] bg-[#fff9f4] text-[#2f1c12]"
              : "border-outline-variant/40 bg-surface-container-low text-on-surface"
          }`}>
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-headline text-3xl uppercase tracking-tight">Share Feedback</h3>
              <button
                type="button"
                onClick={() => setIsFeedbackOpen(false)}
                className="rounded-full border border-outline-variant/40 px-3 py-1 text-[10px] font-title uppercase tracking-widest hover:border-primary-container hover:text-primary-container transition-colors"
              >
                Close
              </button>
            </div>
            
            <p className={`mb-6 text-sm ${isLightMode ? "text-[#6b4a37]" : "text-secondary"}`}>
              Signed in as <span className="font-bold text-primary-container">{email}</span>
            </p>

            {feedbackSent ? (
              <div className="rounded-xl border border-primary-container/40 bg-primary-container/10 p-6 text-center">
                <span className="material-symbols-outlined text-4xl text-primary-container mb-2">check_circle</span>
                <p className="font-title text-sm uppercase tracking-widest">Thanks! Your feedback has been recorded.</p>
                <button 
                  onClick={() => setIsFeedbackOpen(false)}
                  className="mt-4 text-xs font-bold uppercase tracking-tighter text-primary-container underline"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <form onSubmit={handleFeedbackSubmit} className="space-y-4">
                <div>
                  <label className="mb-1 block font-title text-xs uppercase tracking-wider opacity-70">Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    className={`w-full rounded-lg border px-3 py-2 text-sm outline-none transition-colors ${
                      isLightMode
                        ? "border-[#d9b8a2] bg-white text-[#2f1c12] focus:border-primary-container"
                        : "border-outline-variant/40 bg-surface-container text-on-surface focus:border-primary-container"
                    }`}
                    required
                  />
                </div>
                <div>
                  <label className="mb-1 block font-title text-xs uppercase tracking-wider opacity-70">Feedback</label>
                  <textarea
                    value={feedback}
                    onChange={(event) => setFeedback(event.target.value)}
                    rows={4}
                    className={`w-full rounded-lg border px-3 py-2 text-sm outline-none transition-colors ${
                      isLightMode
                        ? "border-[#d9b8a2] bg-white text-[#2f1c12] focus:border-primary-container"
                        : "border-outline-variant/40 bg-surface-container text-on-surface focus:border-primary-container"
                    }`}
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full rounded-lg bg-primary-container px-4 py-3 font-title text-sm uppercase tracking-widest text-on-primary-container transition-all hover:bg-primary ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:scale-[1.02] active:scale-[0.98]'}`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </span>
                  ) : "Submit Feedback"}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
