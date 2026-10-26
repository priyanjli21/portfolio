import './globals.css';
import Navbar from '../components/Navbar/Navbar';
import Sidebar from '../components/Sidebar/Sidebar';
import { AccessProvider } from '../context/AccessContext';

export const metadata = {
  title: 'Priyanjli Gautam — AI/ML Engineer | Generative AI & Agentic Systems',
  description: 'Portfolio of Priyanjli Gautam, AI/ML Engineer with 2+ years experience building production Generative AI, RAG architectures, Agentic workflows, and published research in reinforcement learning.',
  keywords: [
    'Priyanjli Gautam',
    'AI/ML Engineer',
    'Generative AI',
    'Agentic AI',
    'LangChain',
    'RAG',
    'Vector Search',
    'Machine Learning',
    'Deep Learning',
    'PyTorch',
    'MLOps'
  ],
  authors: [{ name: 'Priyanjli Gautam' }],
  creator: 'Priyanjli Gautam',
  openGraph: {
    title: 'Priyanjli Gautam — AI/ML Engineer Portfolio',
    description: 'Generative AI, Agentic Workflows, Production RAG Systems, and Neural Research.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Priyanjli Gautam Portfolio'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Priyanjli Gautam — AI/ML Engineer',
    description: 'Generative AI, Agentic Workflows, Production RAG Systems, and Neural Research.'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><rect width=%22100%22 height=%22100%22 fill=%22%230A0A0A%22/><text y=%22.9em%22 font-size=%2280%22 font-weight=%22900%22 fill=%22%23FF6B6B%22>P</text></svg>" />
      </head>
      <body>
        <AccessProvider>
          <Navbar />
          <Sidebar />
          <div className="page-wrapper">
            {children}
          </div>
        </AccessProvider>
      </body>
    </html>
  );
}
