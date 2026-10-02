import React, { useState } from 'react';
import { Copy, Check, Mail } from 'lucide-react';

export default function App() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('jp.lastdigit@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4 sm:px-6 lg:px-8 font-sans antialiased text-slate-800">
      <main className="max-w-3xl mx-auto bg-white rounded-xl shadow-xs border border-slate-200/80 p-6 sm:p-10 md:p-12">
        {/* Title */}
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 border-b border-slate-200 pb-4">
          Privacy Policy for LAST - Lottery Last Digit
        </h1>

        {/* Metadata Details */}
        <div className="mt-5 p-4 rounded-lg bg-slate-50 border border-slate-200/70 text-sm space-y-1.5 text-slate-700">
          <div>
            <strong className="text-slate-900">Effective Date:</strong> October 2, 2026
          </div>
          <div>
            <strong className="text-slate-900">App Name:</strong> LAST - Lottery Last Digit
          </div>
          <div>
            <strong className="text-slate-900">Package Name:</strong>{' '}
            <code className="bg-slate-200/70 text-slate-800 px-1.5 py-0.5 rounded text-xs font-mono">
              jp.lastdigit.com
            </code>
          </div>
          <div className="flex items-center flex-wrap gap-2 pt-0.5">
            <strong className="text-slate-900">Contact Email:</strong>{' '}
            <a
              href="mailto:jp.lastdigit@gmail.com"
              className="text-emerald-700 hover:text-emerald-800 font-medium underline"
            >
              jp.lastdigit@gmail.com
            </a>
            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-slate-800 bg-white px-2 py-0.5 rounded border border-slate-200 shadow-2xs cursor-pointer transition-colors"
              title="Copy email to clipboard"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-3 h-3 text-emerald-600" />
                  <span className="text-emerald-700">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3 text-slate-500" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Policy Body */}
        <div className="mt-8 space-y-7 text-sm sm:text-base leading-relaxed text-slate-700">
          {/* Section 1 */}
          <section>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
              1. Introduction
            </h2>
            <p>
              This Privacy Policy describes how the "LAST - Lottery Last Digit" ("Last Digit") mobile
              application handles user information. We are committed to protecting your privacy and
              ensuring a transparent, secure user experience.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
              2. Information Collection and Use
            </h2>
            <p className="mb-2">
              LAST - Lottery Last Digit is designed with privacy as a priority. We do NOT collect, store,
              transmit, sell, or share any personal or sensitive user information.
            </p>
            <p>
              You can use all features of the application without creating an account, registering, or
              providing personal details such as your name, email address, phone number, location, or
              payment information.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
              3. Device Permissions
            </h2>
            <p className="mb-3">
              The application operates locally on your device and does not request or require access to
              sensitive device permissions, including:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 marker:text-slate-400">
              <li>No Location access (GPS or network-based)</li>
              <li>No Camera or Microphone access</li>
              <li>No Contacts, Phone, or Call log access</li>
              <li>No Photos, Media, or External Storage access</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
              4. Third-Party Services and Analytics
            </h2>
            <p>
              The application does not integrate third-party advertising networks, profiling
              analytics tools, or tracking SDKs. Your activity within the app is never tracked,
              recorded, or analyzed.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
              5. Data Retention and Deletion
            </h2>
            <p className="mb-2">
              Because the application does not transmit or store personal data on remote servers, no
              user data is retained.
            </p>
            <p>
              Any local user preferences or temporary calculation results stored on your device can be
              removed at any time by clearing the application data/cache or uninstalling the app.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
              6. Children’s Privacy
            </h2>
            <p className="mb-2">
              The application does not collect personal information from any user, including children
              under the age of 13 (or the applicable age in your jurisdiction).
            </p>
            <p>
              The app fully complies with the Children’s Online Privacy Protection Act (COPPA) and the
              General Data Protection Regulation (GDPR).
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
              7. Security
            </h2>
            <p>
              We value your trust. Because all number calculations, patterns, and combinations run
              directly on your local device, your usage remains completely private and secure.
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
              8. Changes to This Privacy Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted on this
              page with an updated effective date.
            </p>
          </section>

          {/* Section 9 */}
          <section className="pt-2">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
              9. Contact Us
            </h2>
            <p className="mb-3">
              If you have any questions or suggestions regarding this Privacy Policy, please contact us
              at:
            </p>
            <div className="inline-flex items-center gap-2 p-3 rounded-lg bg-slate-50 border border-slate-200">
              <Mail className="w-4 h-4 text-emerald-600 shrink-0" />
              <span className="font-semibold text-slate-900">Email:</span>
              <a
                href="mailto:jp.lastdigit@gmail.com"
                className="font-mono text-emerald-700 hover:text-emerald-800 hover:underline"
              >
                jp.lastdigit@gmail.com
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
