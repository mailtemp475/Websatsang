import React, { useState } from 'react';
import { Send, X, MessageCircle, User, Mail } from 'lucide-react';

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
  language: 'hi' | 'en';
}

const ContactForm: React.FC<ContactFormProps> = ({ isOpen, onClose, language }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    question: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const content = {
    hi: {
      title: 'आध्यात्मिक प्रश्न पूछें',
      subtitle: 'अपने सवाल साझा करें और दिव्य मार्गदर्शन पाएं',
      namePlaceholder: 'आपका नाम',
      emailPlaceholder: 'आपका ईमेल (वैकल्पिक)',
      questionPlaceholder: 'अपना आध्यात्मिक प्रश्न यहाँ लिखें...',
      submitButton: 'प्रश्न भेजें',
      submittingButton: 'भेजा जा रहा है...',
      successTitle: 'धन्यवाद!',
      successMessage: 'आपका प्रश्न सफलतापूर्वक भेजा गया है। जल्द ही उत्तर मिलेगा।',
      closeButton: 'बंद करें',
      nameRequired: 'कृपया अपना नाम दर्ज करें',
      questionRequired: 'कृपया अपना प्रश्न लिखें'
    },
    en: {
      title: 'Ask Spiritual Question',
      subtitle: 'Share your questions and receive divine guidance',
      namePlaceholder: 'Your Name',
      emailPlaceholder: 'Your Email (Optional)',
      questionPlaceholder: 'Write your spiritual question here...',
      submitButton: 'Send Question',
      submittingButton: 'Sending...',
      successTitle: 'Thank You!',
      successMessage: 'Your question has been sent successfully. You will receive an answer soon.',
      closeButton: 'Close',
      nameRequired: 'Please enter your name',
      questionRequired: 'Please write your question'
    }
  };

  const currentContent = content[language];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim()) {
      alert(currentContent.nameRequired);
      return;
    }
    
    if (!formData.question.trim()) {
      alert(currentContent.questionRequired);
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Send data to Google Sheets
      const submitData = new FormData();
      submitData.append('name', formData.name);
      submitData.append('email', formData.email);
      submitData.append('question', formData.question);
      submitData.append('language', language);
      submitData.append('timestamp', new Date().toISOString());

      const response = await fetch('https://script.google.com/macros/s/AKfycbzhB-SZ6m065v1D-LOrUaytaHr348IuHCG8Lm5fojjoaj9ZoE5dGt_Ntj07lxRD8Ewk/exec', {
        method: 'POST',
        mode: 'no-cors',
        body: submitData
      });

      // Since we're using no-cors mode, we can't read the response
      // We'll assume success if no error is thrown
      console.log('Form submitted successfully');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert(language === 'hi' ? 'फॉर्म भेजने में समस्या हुई। कृपया दोबारा कोशिश करें।' : 'Error submitting form. Please try again.');
      setIsSubmitting(false);
      return;
    }
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', question: '' });
      onClose();
    }, 3000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <MessageCircle className="h-6 w-6" />
              <div>
                <h2 className="text-2xl font-bold">{currentContent.title}</h2>
                <p className="text-blue-100 mt-1">{currentContent.subtitle}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-white hover:text-blue-200 transition-colors p-1"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder={currentContent.namePlaceholder}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-900 placeholder-gray-500"
                    required
                  />
                </div>
              </div>

              {/* Email Field */}
              <div>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder={currentContent.emailPlaceholder}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-900 placeholder-gray-500"
                  />
                </div>
              </div>

              {/* Question Field */}
              <div>
                <textarea
                  name="question"
                  value={formData.question}
                  onChange={handleInputChange}
                  placeholder={currentContent.questionPlaceholder}
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none text-gray-900 placeholder-gray-500"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
              >
                <Send className="h-5 w-5" />
                <span>{isSubmitting ? currentContent.submittingButton : currentContent.submitButton}</span>
              </button>
            </form>
          ) : (
            <div className="text-center py-8">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{currentContent.successTitle}</h3>
              <p className="text-gray-600 mb-6">{currentContent.successMessage}</p>
              <button
                onClick={onClose}
                className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300"
              >
                {currentContent.closeButton}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactForm;