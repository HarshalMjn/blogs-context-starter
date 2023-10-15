import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Pagination() {
  const { page, handlePageChange, totalPages } = useContext(AppContext);

  

  return (
    <div className="fixed py-1 bottom-[0] inset-x-0 bg-white  border-t-2 border-t-gray-300">
      <div className="flex items-center gap-x-3 w-11/12 max-w-2xl mx-auto mt-0">
        {page > 1 && (
          <button
            onClick={() => handlePageChange(page - 1)}
            className="border-2 border-gray-300 py-1 px-4 rounded-md bg-metal"
          >
            Previous
          </button>
        )}
        {page < totalPages && (
          <button
            onClick={() => handlePageChange(page + 1)}
            className="border-2 border-gray-300 py-1 px-4 rounded-md bg-metal"
          >
            Next
          </button>

        )}
        
        <a className="font-light mx-auto" href="https://github.com/HarshalMjn">@HarshalMjn</a>
        
        <p className="text-sm font-semibold ml-auto ">
          Page {page} of {totalPages}
        </p>

      </div>
      
    </div>
  );
}
