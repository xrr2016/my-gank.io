import { h, Component } from 'preact'
import { Fab, Icon } from 'preact-material-components'
import { route } from 'preact-router'

const ReturnFab = ({ path }) => (
  <Fab
    ripple
    mini
    className="toolbar return-fab"
    onClick={() => route(path, true)}
  >
    <Icon>reply</Icon>
  </Fab>
)

export default ReturnFab
