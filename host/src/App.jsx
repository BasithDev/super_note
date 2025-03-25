import React, { useState, Suspense } from "react";
import { AnimatePresence } from "framer-motion";
import ErrorBoundary from "./ErrorBoundary";

const safeImport = (importFn,ErrMsg) =>
  new Promise((resolve) =>
    importFn()
      .then(resolve)
      .catch((err) => {
        console.error("Microfrontend failed to load:", err);
        resolve({ default: () => <h2>{ErrMsg}</h2> });
      })
  );

// Dynamically import micro frontend components
const AddNote = React.lazy(() => safeImport(() => import("addNote/AddNote"),"Add Note Feature Unavailable"));
const ListNotes = React.lazy(() => safeImport(() => import("listNotes/ListNotes"),"List Notes Feature Unavailable"));
const ViewNote = React.lazy(() => safeImport(() => import("viewNote/ViewNote"),"View Note Feature Unavailable"));

const App = () => { 
  
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);

  const addNote = (note) => {
    setNotes((prevNotes) => [...prevNotes, note]);
  };

  const closeModal = () => {
    setSelectedNote(null);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen p-4 gap-4">
      
      <div className="md:w-1/3 w-full">
      <ErrorBoundary>
        <Suspense fallback={<div>Loading...</div>}>
          <ListNotes notes={notes} onSelect={setSelectedNote} />
        </Suspense>
      </ErrorBoundary>
      </div>

      <div className="md:w-2/3 w-full">
      <ErrorBoundary>
        <Suspense fallback={<div>Loading...</div>}>
          <AddNote onAdd={addNote} />
        </Suspense>
      </ErrorBoundary>
      </div>

      {/* AnimatePresence for handling enter/exit animations */}
      <AnimatePresence>
      <ErrorBoundary>
        {selectedNote && (
          <ViewNote key={selectedNote.title} note={selectedNote} onClose={closeModal} />
        )}
      </ErrorBoundary>
      </AnimatePresence>
      
    </div>
  );
};

export default App;
