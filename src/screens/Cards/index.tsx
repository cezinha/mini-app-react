import React, { useEffect, useRef } from 'react';


import View from '../../components/ui/View';
import { Container } from './style';
// eslint-disable-next-line react/display-name

class ErrorBoundary extends React.Component<any, { hasError: boolean}> {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Algo deu errado.</h1>;
    }

    return this.props.children; 
  }
}

const Cards = () => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    import('Cards/Cards')
      .then(_ => console.debug('element cards loaded!'))
      .catch(err => console.error('error loading cards:', err));
    const element = document.createElement('mfe1-element');
    if (ref.current !== null) {
      ref.current.append(element);
    }
  }, []);

  return (
    <ErrorBoundary>
      <React.Suspense fallback="Loading..." >
        <View>
          <Container>
            <div ref={ref}></div>
          </Container>
        </View>
      </React.Suspense>
    </ErrorBoundary>)
}
export default Cards;
