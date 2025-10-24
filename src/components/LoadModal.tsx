import { X, Clock, Code2, Trash2 } from 'lucide-react';
import { SavedSnippet } from '../types';

interface LoadModalProps {
  isOpen: boolean;
  onClose: () => void;
  snippets: SavedSnippet[];
  onLoad: (snippet: SavedSnippet) => void;
  onDelete: (id: string) => void;
}

export default function LoadModal({ isOpen, onClose, snippets, onLoad, onDelete }: LoadModalProps) {
  if (!isOpen) return null;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-slate-800 rounded-xl shadow-2xl w-full max-w-3xl max-h-[80vh] border border-slate-700 flex flex-col">
        <div className="flex items-center justify-between p-6 border-b border-slate-700">
          <h2 className="text-xl font-bold text-white">Saved Snippets</h2>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="flex-1 overflow-auto p-6">
          {snippets.length === 0 ? (
            <div className="text-center py-12">
              <Code2 className="w-16 h-16 text-slate-600 mx-auto mb-4" />
              <p className="text-slate-400">No saved snippets yet</p>
              <p className="text-slate-500 text-sm mt-2">
                Save your code to access it later
              </p>
            </div>
          ) : (
            <div className="grid gap-3">
              {snippets.map((snippet) => (
                <div
                  key={snippet.id}
                  className="bg-slate-900 rounded-lg border border-slate-700 hover:border-slate-600 transition-all group"
                >
                  <div className="p-4">
                    <div className="flex items-start justify-between gap-4">
                      <button
                        onClick={() => onLoad(snippet)}
                        className="flex-1 text-left"
                      >
                        <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-blue-400 transition-colors">
                          {snippet.title}
                        </h3>
                        <div className="flex items-center gap-4 text-sm text-slate-400">
                          <span className="px-2 py-1 bg-slate-800 rounded font-mono">
                            {snippet.language}
                          </span>
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            <span>{formatDate(snippet.created_at)}</span>
                          </div>
                        </div>
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onDelete(snippet.id);
                        }}
                        className="p-2 text-slate-400 hover:text-red-400 hover:bg-slate-800 rounded transition-colors"
                        title="Delete snippet"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
