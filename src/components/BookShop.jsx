import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, BookOpen, Calendar, FileText, Hash, X, ExternalLink, Store, DollarSign } from 'lucide-react';

// Books data array with prices
const booksData = [
  {
    id: 1,
    title: "Unique Bible Quizzes",
    subtitle: "75 Thought Provoking Bible Stumpers",
    image: "/images/book.png",
    asin: "B079486R22",
    publicationDate: "July 30, 2016",
    printLength: "223 pages",
    isbn13: "978-1532003516",
    price: 14.99,
    description: "Pastor Schwichtenberg (known as Pastor Switz) challenges the average reader and Bible student with quizzes matching many holidays and events during the year, including unique presentations for each month.",
    bookstores: [
      {
        name: "Amazon",
        url: "https://www.amazon.com/Unique-Bible-Quizzes-Provoking-Stumpers-ebook/dp/B079486R22/ref=sr_1_1?crid=3KMHXD32RILI5&dib=eyJ2IjoiMSJ9.QGLGuOD99B7Ddb8Z8t-VKCVU5gJYYmwlPbhSgOplKZU.4QNa76wOXrsrPfzLGD_Pfp9JMAPWvWIyxNzXJADoga0&dib_tag=se&keywords=Willis+Schwichtenberg&qid=1774892052&s=books&sprefix=willis+schwichtenberg%2Cstripbooks-intl-ship%2C348&sr=1-1",
        icon: "store"
      },
      {
        name: "Barnes & Noble",
        url: "https://www.barnesandnoble.com/w/unique-bible-quizzes-pastor-willis-schwichtenberg/1124234995",
        icon: "store"
      },
      {
        name: "Walmart",
        url: "https://www.walmart.com/ip/Unique-Bible-Quizzes-75-Thought-Provoking-Bible-Stumpers-9781532003523/395263577",
        icon: "store"
      },
      {
        name: "Kobo",
        url: "https://www.kobo.com/ww/en/ebook/unique-bible-quizzes-1?srsltid=AfmBOoprqYFP_kPKUZdqap1tAkZyVUBi9wiZLgW3ZVY6kp-vtzAtCbJb",
        icon: "store"
      }
    ]
  },
  // Add more books here as needed
];

const BookShop = () => {
  const navigate = useNavigate();
  const [selectedBook, setSelectedBook] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (book) => {
    setSelectedBook(book);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedBook(null);
    document.body.style.overflow = 'auto';
  };

  const handleStoreClick = (url) => {
    window.open(url, '_blank');
  };

  const getStoreIcon = (iconName) => {
    return <Store className="h-5 w-5" />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 pt-8">
        <button 
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 transition-colors group"
        >
          <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Back to Home</span>
        </button>
      </div>

      {/* Header with Shop Elements */}
      <div className="text-center py-12">
        <div className="flex items-center justify-center gap-3 mb-4">
          <ShoppingCart className="h-10 w-10 text-amber-600" />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">Book Shop</h1>
        </div>
        <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Discover inspiring books by Pastor Willis Schwichtenberg
        </p>
      </div>

      {/* Books Grid - Shop Style */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {booksData.map((book) => (
            <div 
                key={book.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group flex flex-col"
            >
                {/* Image Container - Smaller aspect ratio */}
                <div className="relative w-full pt-[70%] bg-gradient-to-br from-amber-50 to-amber-100 overflow-hidden">
                <img 
                    src={book.image} 
                    alt={book.title}
                    className="absolute top-0 left-0 w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                />
                {/* Price Badge - Smaller */}
                {/* <div className="absolute top-3 right-3 bg-amber-600 text-white px-2 py-0.5 rounded-full font-semibold text-xs shadow-lg">
                    ${book.price}
                </div> */}
                </div>
                
                {/* Content - Smaller padding */}
                <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-gray-800 mb-1 line-clamp-2">{book.title}</h3>
                <p className="text-amber-600 font-medium mb-2 text-xs">{book.subtitle}</p>
                
                <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                    <BookOpen className="h-3 w-3" />
                    {book.printLength}
                    </span>
                    <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {book.publicationDate.split(',')[0]}
                    </span>
                </div>
                
                <p className="text-gray-600 text-xs mb-3 line-clamp-2">
                    {book.description}
                </p>
                
                {/* Shop Button - Smaller */}
                <button
                    onClick={() => openModal(book)}
                    className="mt-auto w-full bg-amber-600 text-white py-2 rounded-lg font-semibold text-sm hover:bg-amber-700 transition-colors flex items-center justify-center gap-2"
                >
                    <ShoppingCart className="h-4 w-4" />
                    Shop Now
                </button>
                </div>
            </div>
            ))}
        </div>
    </div>

      {/* Modal */}
      {isModalOpen && selectedBook && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            {/* Background overlay */}
            <div 
              className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity"
              onClick={closeModal}
            ></div>

            {/* Modal panel */}
            <div className="relative bg-white rounded-2xl shadow-xl max-w-7xl w-full max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 right-0 pt-4 pr-4 z-10">
                <button
                  onClick={closeModal}
                  className="ml-auto bg-white rounded-full p-2 hover:bg-gray-100 transition-colors shadow-lg"
                >
                  <X className="h-6 w-6 text-gray-600" />
                </button>
              </div>

              <div className="flex flex-col md:flex-row">
                {/* Book Image Section */}
                <div className="md:w-2/5 bg-gradient-to-br from-amber-50 to-amber-100 p-8 flex items-center justify-center">
                  <div className="w-full max-w-[280px]">
                    <img 
                      src={selectedBook.image} 
                      alt={selectedBook.title}
                      className="w-full h-auto object-contain rounded-xl shadow-2xl"
                    />
                  </div>
                </div>

                {/* Book Details Section */}
                <div className="md:w-3/5 p-8">
                  {/* <div className="mb-4">
                    <span className="inline-flex items-center gap-1 bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-semibold">
                      <DollarSign className="h-4 w-4" />
                      ${selectedBook.price}
                    </span>
                  </div> */}
                  
                  <h2 className="text-3xl font-bold text-gray-800 mb-2">{selectedBook.title}</h2>
                  <p className="text-amber-600 font-semibold text-lg mb-4">{selectedBook.subtitle}</p>
                  <div className="w-16 h-1 bg-amber-600 mb-6"></div>
                  
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {selectedBook.description}
                  </p>

                  <div className="space-y-3 mb-8">
                    <div className="flex items-start gap-3">
                      <Hash className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-gray-800">ASIN:</span>
                        <span className="text-gray-700 ml-2">{selectedBook.asin}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Calendar className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-gray-800">Publication Date:</span>
                        <span className="text-gray-700 ml-2">{selectedBook.publicationDate}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <FileText className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-gray-800">Print Length:</span>
                        <span className="text-gray-700 ml-2">{selectedBook.printLength}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <BookOpen className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-gray-800">ISBN-13:</span>
                        <span className="text-gray-700 ml-2">{selectedBook.isbn13}</span>
                      </div>
                    </div>
                  </div>

                  {/* Bookstores Section */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-3">Available at:</h3>
                    <div className="space-y-2">
                      {selectedBook.bookstores.map((store, index) => (
                        <button
                          key={index}
                          onClick={() => handleStoreClick(store.url)}
                          className="w-full flex items-center justify-between p-3 bg-gray-50 hover:bg-amber-50 rounded-lg transition-colors group"
                        >
                          <div className="flex items-center gap-3">
                            {getStoreIcon(store.icon)}
                            <span className="font-medium text-gray-700 group-hover:text-amber-600">
                              {store.name}
                            </span>
                          </div>
                          <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-amber-600" />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookShop;