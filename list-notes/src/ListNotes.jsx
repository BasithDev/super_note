import { motion } from "framer-motion";

const ListNotes = ({ notes, onSelect }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="p-4 border rounded-lg bg-gray-200 h-full overflow-auto shadow-lg"
    >
      <h2 className="text-xl font-bold text-gray-700 mb-3">Notes</h2>
      <ul className="space-y-3">
        {notes.map((note, index) => (
          <motion.li
            key={index}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 bg-white rounded-lg cursor-pointer hover:bg-gray-200 shadow-md transition"
            onClick={() => onSelect(note)}
          >
            {note.title}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default ListNotes;