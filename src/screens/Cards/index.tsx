import React from 'react';


import View from '../../components/ui/View';
import { Container } from './style';
// eslint-disable-next-line react/display-name
const CardsMFE = React.lazy(() => import("Cards/Cards")); 

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

const Cards = () => (
<ErrorBoundary><React.Suspense fallback="Loading..." >
    <View>
      <Container>
        <CardsMFE />    
      </Container>
    </View>
  </React.Suspense></ErrorBoundary>)

export default Cards;