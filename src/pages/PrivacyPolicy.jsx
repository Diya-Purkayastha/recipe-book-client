import React from "react";
import { Slide } from "react-awesome-reveal";

const PrivacyPolicy = () => {
  return (
      <Slide delay={300} direction='up' triggerOnce>
    <div className=" card max-w-4xl mx-auto px-4 py-10 text-gray-800 shadow-lg my-5 mt-30">
      <h1 className="text-3xl text-primary font-bold mb-6 text-center">Legal Conditions</h1>

      <ul className=" card-body space-y-5 text-base text-secondary leading-relaxed">
        <li>
          <strong className="text-primary">1. Data We Collect:</strong> Basic info like name, email, address, and recipe details.
        </li>
        <li>
          <strong className="text-primary">2. Why We Collect It:</strong> To process orders, personalize your experience, and improve our services.
        </li>
        <li>
          <strong className="text-primary">3. How It's Used:</strong> For delivery, account management, support, and optional marketing emails.
        </li>
        <li>
          <strong className="text-primary">4. Third-Party Services:</strong> We use secure tools like Firebase (authentication) and Google Analytics.
        </li>
        <li>
          <strong className="text-primary">5. Data Security:</strong> Your information is protected and encrypted. We <u className="font-bold">do not sell</u> your data.
        </li>
        <li>
          <strong className="text-primary">6. Your Control:</strong> You can update or delete your data or unsubscribe from emails anytime.
        </li>
        <li>
          <strong className="text-primary">7. Cookies:</strong> Used for login sessions and analytics. You can disable them via browser settings.
        </li>
        <li>
          <strong className="text-primary">8. Contact Us:</strong> Questions? Contact us at <a href="/" className="text-blue-600 underline">privacy@Recipe@booK.com</a>
        </li>
      </ul>
    </div>
    </Slide>
  );
};

export default PrivacyPolicy;