import { Mail, Copy, ExternalLink } from "lucide-react";
import { useState } from "react";
import { WindowCard } from "./WindowCard";

export const ContactsCard = (props) => {
  const email = "patrickevan071@gmail.com"; 
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <WindowCard {...props}>
      <div className="flex flex-col items-center justify-center h-full max-h-[70vh] md:max-h-[500px] space-y-8">
        
        {/* Header Section */}
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Get in touch with me!</h2>
        </div>

        {/* Email Display Box */}
        <div className="w-full max-w-md p-6 rounded-xl border-2 border-window-outline flex flex-col items-center gap-4">
          <div className="p-3 bg-[#98baefff]/20 rounded-full text-[#98baefff]">
            <Mail size={32} />
          </div>
          
          <span className="text-xl font-mono font-bold break-all">
            {email}
          </span>

          <div className="flex w-full justify-center">
            {/* Copy Button */}
            <button 
              onClick={copyToClipboard}
              className="px-4 py-2 rounded-lg border-2 border-window-outline font-bold hover:bg-window-outline/20 transition-colors flex items-center gap-2"
            >
              {copied ? "Copied!" : <><Copy size={18} /> Copy</>}
            </button>
          </div>
        </div>

        <p className="text-xs">
          Hello!
        </p>
      </div>
    </WindowCard>
  );
};