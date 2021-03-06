import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Menu from '../components/Menu';
import routes from './routes';
import { Container, PageSlider } from './style';

const TransitionFrom = ({
  className,
  children
}: {
  className?: string;
  children?: JSX.Element;
}) => <div className={className}>{children}</div>;

const MainRouter = () => {
  const renderRoutes = ({ location }) => {
    const direction = location.pathname !== '/' ? 'right' : 'left';
    return (
      <PageSlider className={direction}>
        <TransitionGroup component={null}>
          <CSSTransition
            timeout={{ enter: 300, exit: 300 }}
            classNames="page"
            key={location.key}
            mountOnEnter={false}
            unmountOnExit={true}
          >
            <TransitionFrom>
              <Switch location={location}>
                {routes.map(({ path, Component }) => (
                  <Route key={path} exact path={path} component={Component} />
                ))}
              </Switch>
            </TransitionFrom>
          </CSSTransition>
        </TransitionGroup>
      </PageSlider>
    );
  };

  return (
    <Router>
      <Container>
        <Menu current={0} />
        <Route render={renderRoutes} />
      </Container>
    </Router>
  );
};

export default MainRouter;
