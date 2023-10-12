declare module 'react-read-more-read-less' {
    interface ReadMoreReadLessProps {
      charLimit: number;
      readMoreText?: string;
      readLessText?: string;
      children : React.ReactNode
      // Add other props here if necessary
    }
  
    const ReactReadMoreReadLess: React.ComponentType<ReadMoreReadLessProps>;
  
    export default ReactReadMoreReadLess;
  }
  