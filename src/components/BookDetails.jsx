import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Books } from "../utils/mockdata";

function BookDetails() {
    const params = useParams();
    const booksFromRedux = useSelector((state) => state.books.books);
    const allBooks = [...Books, ...booksFromRedux]; 
    const book = allBooks.find((book) => book.id == params.id);

    if (!book) {
        return <h1 className="text-2xl text-center text-purple-500 mt-20">📚 Story not found!</h1>;
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-purple-100 text-purple-800 px-6 py-12">
            <div className="w-full max-w-4xl bg-purple-200 p-8 rounded-xl shadow-lg flex flex-col md:flex-row items-center gap-8">
                
                {/* Book Cover */}
                <div className="w-full md:w-1/3 flex justify-center">
                    <img 
                        src={book.coverImage} 
                        alt={book.title} 
                        className="w-64 h-96 object-cover rounded-lg shadow-lg"
                    />
                </div>

                {/* Book Details */}
                <div className="w-full md:w-2/3 text-center md:text-left">
                    <h1 className="text-3xl font-extrabold mb-2 text-purple-600">{book.title}</h1>
                    <h2 className="text-xl font-medium text-purple-700 mb-3">✍️ {book.author}</h2>
                    <p className="text-purple-500 text-lg mb-4">{book.description}</p>
                    
                    <div className="text-purple-700 space-y-2">
                        <p><b>📖 Pages:</b> {book.pages}</p>
                        <p><b>⭐ Rating:</b> {book.rating}</p>
                    </div>

                    {/* Back Button */}
                    <Link to="/browsebook">
                        <button className="mt-6 bg-gradient-to-r from-purple-300 to-purple-500 text-purple-800 px-6 py-2 
                            rounded-full font-semibold shadow-md hover:from-purple-500 hover:to-purple-300 hover:shadow-purple-300/50 
                            transform hover:scale-105 transition-all duration-300 ease-in-out">
                            Return to Library
                        </button>
                    </Link>
                </div>

            </div>
        </div>
    );
}

export default BookDetails;