import { h, Component } from 'preact'
import Fab from 'preact-material-components/Fab'
import Icon from 'preact-material-components/Icon'
import style from './style'

export default class ToggleTheme extends Component {
  state = {
    darkTheme: false
  }

  toggle = () => {
    this.setState({ darkTheme: !this.state.darkTheme }, () => {
      document.body.classList.toggle('mdc-theme--dark')
    })
  }

  render() {
    const { darkTheme } = this.state
    return (
      <div className={style.toggle} onClick={this.toggle}>
        {darkTheme ? (
          <Fab ripple mini className={style.fabDark}>
            <Icon>wb_sunny</Icon>
          </Fab>
        ) : (
          <Fab ripple mini className={style.fab}>
            <Icon>brightness_3</Icon>
          </Fab>
        )}
      </div>
    )
  }
}
