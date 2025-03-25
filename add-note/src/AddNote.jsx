import { useState } from "react";
import { motion } from "framer-motion";

const AddNote = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content) return;
    onAdd({ title, content });
    setTitle("");
    setContent("");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 border rounded-xl bg-white shadow-lg"
    >
      <h2 className="text-2xl font-semibold text-gray-700 mb-3">Add Note</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <motion.input
          whileFocus={{ scale: 1.01 }}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <motion.textarea
          whileFocus={{ scale: 1.01 }}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none resize-none"
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={4}
        />
        <motion.button
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-blue-500 text-white p-3 rounded-lg font-semibold shadow-md hover:bg-blue-600 transition"
        >
          Add Note
        </motion.button>
      </form>
    </motion.div>
  );
};

export default AddNote;
