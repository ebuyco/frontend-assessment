import React, {Component} from 'react';
import css from '../components/styles/index.scss';
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
        return <a onClick={this.select(i)} className={`${active} tab`}>{item}</a>;
      }
    });
  }

  renderContent() {
    return React.Children.map(this.props.children, (item, i) => {
      if (i-1 === this.state.active) {
        return <div className={css.content}>{item}</div>;
      } else {
        return;
      }
    });
  }

  render() {
    return (
      <div className={css.tabs}>
        {this.renderTabs()}
        {this.renderContent()}
      </div>
    );
  }
}


class Content extends Component {

  render() {
     return (
     <React.Fragment>
        <div className={css.wrapper}>
        <main>
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
        </main>
        </div>
     </React.Fragment>
    );
  }
}


export default Content;
