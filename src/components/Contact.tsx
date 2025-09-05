import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const Contact: React.FC = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('フォーム送信:', formData);
    // ここに実際の送信処理を実装
    try {
      const res = await fetch('https://script.google.com/macros/s/AKfycbz1OsVATBozZnN0Yix3nMZFhXqmKoUMDW21QByl-6qRkgN9axnGIHV8R3Wh1DSZ5qsiLw/exec', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
        // body: JSON.stringify({ name: "Buddy", company: "CTN", email: "nightfurry2345@gmil.com", phone: "090-1234-5678", message: "Hello World" })
      });

      const data = await res.json();
      console.log('サーバー応答:', data);

      if (data.status === "success") {
        setStatus("Form submitted successfully!");

        // 🔽 Trigger PDF download
        const link = document.createElement("a");
        link.href = "/example.pdf"; // must be inside public/
        link.download = "Newdocument.pdf";
        link.click();
      } else {
        setStatus("Error submitting form.");
      }
      // setStatus(data.status === "success" ? "Form submitted successfully!" : "Error submitting form.");
    } catch (err) {
      console.error(err);
      // setStatus("Error submitting form.");
    }
  };

  return (
    <div key={location.pathname + location.search} className="min-h-screen flex items-center justify-center py-32" style={{ backgroundColor: '#eef3f9' }}>
      <div className="max-w-2xl w-full mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            CONTACT
          </h1>
          <p className="text-lg text-gray-600">
            お問い合わせ
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
          <p className="text-gray-700 mb-8 leading-relaxed">
            資料に関するお問い合わせ・ビジネスのご相談・採用についてお気軽にお問い合わせください。
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* 会社名 */}
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                会社名
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                required
              />
            </div>

            {/* 氏名 */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                氏名
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                required
              />
            </div>

            {/* メールアドレス */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                メールアドレス
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                required
              />
            </div>

            {/* 携帯電話 */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                携帯電話
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              />
            </div>

            {/* お問い合わせ内容 */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                お問い合わせ内容
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                required
              />
            </div>

            {/* プライバシーポリシー */}
            <div className="text-center">
              <a
                href="#"
                className="text-blue-600 hover:text-blue-800 underline text-sm"
              >
                プライバシーポリシー
              </a>
              <span className="text-gray-600 text-sm ml-1">に同意する</span>
            </div>

            {/* 送信ボタン */}
            <div className="text-center pt-4">
              <button
                // onClick={handleSubmit}
                type="submit"
                className="bg-slate-700 text-white px-12 py-4 rounded-lg font-medium hover:bg-slate-800 transition-colors duration-200 text-lg"
              >
                {/* <a href="/example.pdf" download="MyDocument.pdf"> */}
                送信
                {/* </a> */}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;