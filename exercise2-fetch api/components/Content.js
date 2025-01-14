import React, {Component} from 'react';
import css from '../components/styles/index.scss';
import Accordion from '../components/Accordion';
import Disk from '../components/Disk';
class Tabs extends Component {
  constructor(props) {
    super();
    this.state = {
      active: 0
    }
  }

  select = (i) => {
    let _this = this;
    return function() {
      _this.setState({
        active: i
      });
    }
  }


  renderTabs = () => {
    return React.Children.map(this.props.children, (item, i) => {
      if (i%2 === 0) {
        let active = this.state.active === i ? 'active' : '';
        return (
          <a onClick={this.select(i)} className={`tab__element ${active}`}>{item}</a>
        );
      }
    });
  }

  renderContent() {
    return React.Children.map(this.props.children, (item, i) => {
      if (i-1 === this.state.active) {
        let attachedClasses= [this.state.active ? 'Open' : ''];
        if (this.state.closed) {
          attachedClasses = [this.state.Open ? 'Closed' : ''];
        }
        return <div className={css.content}>
          <div className={attachedClasses.join(' ')}>
               {item}
          </div>

        </div>;
      } else {
        return;
      }
    });
  }

  render() {
    return (
      <div className={css.tabs}>
        <div className={css.tab__wrapper}>
        {this.renderTabs()}
        </div>
        {this.renderContent()}
      </div>
    );
  }
}


class Content extends Component {

  render() {
     return (
     <React.Fragment>
        <div className={css.wrapper__desktop}>
        <Tabs>
              One
              <span>
                <Disk/>
               </span>
              Two
            <span><Disk/></span>
              Three
             <span><Disk/></span>
              Four
             <span><Disk/></span>
          </Tabs>
       </div>
       <div className={css.wrapper__mobile}>
           <Accordion/>
       </div>
     </React.Fragment>
    );
  }
}


export default Content;
