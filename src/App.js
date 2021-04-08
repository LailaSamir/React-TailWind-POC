import  React  from 'react';
import {Switch, Route} from 'react-router-dom';
import LandingPageLayout from './layouts/LandingPage';
import HomePage from './pages/HomePage';
import About from './About';
import Contact from './Contact';
import Services from './Services';


const App = () => {
  return (
    <Switch>
      <Route path='/'>
          <LandingPageLayout heading='HAPPY FAMILY' className='bg-gray-100'>
            <HomePage />
          </LandingPageLayout>
      </Route>
      <Route path='/About' component={About}></Route>
      <Route path='/Contact' component={Contact}></Route>
      <Route path='/Services' component={Services}></Route>
    </Switch>
  );
};

export default App;
