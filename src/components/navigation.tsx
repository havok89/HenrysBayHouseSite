import React from 'react'
import { Link } from 'gatsby'

interface propTypes {
    items?: any; 
}

interface stateTypes {
  navIsOpen: boolean; 
}


export class Navigation extends React.Component<propTypes, stateTypes> {
    constructor(props) {
      super(props)

      this.state = {
        navIsOpen: false
      }

    }

    toggleNav(bool) {
      this.setState({
        navIsOpen: bool
      })
    }

    render(){
      return (
          <>
            <nav className="header__navigation">
            <div className={`navigation__list ${this.state.navIsOpen && "isOpen"}`}>
              {this.props.items.map((item, i) => ( 
                <div>
                  <Link to={item.slug==="wordpress" ? `/` : `/${item.slug}`}>
                    {item.title}
                  </Link>
                </div>
              ))}
              </div>
              <div className={`main-nav-toggle hidden-desktop ${this.state.navIsOpen && "isOpen"}`} onClick={() => ((this.state.navIsOpen) ? this.toggleNav(false) : this.toggleNav(true))}></div>
            </nav>
          </>
      );
    }
}
