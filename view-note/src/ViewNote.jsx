import { motion, AnimatePresence } from "framer-motion";

const ViewNote = ({ note, onClose }) => {
  return (
    <AnimatePresence>
      {note && (
        <motion.div
          key={note.title} // Ensure Framer Motion tracks this component
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black/50 flex justify-center items-center"
          onClick={onClose} // Close when clicking on backdrop
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="bg-white p-6 rounded-lg shadow-lg w-96"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            <h2 className="text-2xl font-semibold">{note.title}</h2>
            <p className="mt-3 text-gray-700">{note.content}</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600 transition"
              onClick={onClose}
            >
              Close
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ViewNote;