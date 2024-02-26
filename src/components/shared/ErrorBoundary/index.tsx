import React from 'react';

interface Props {
  children: React.ReactNode;
  fallback: React.ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.log('에러가 발생했습니다.', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback ?? <h1>에러가 발생했습니다.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
