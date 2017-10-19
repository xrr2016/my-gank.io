import { h, Component } from 'preact'

const PlaceHolder = ({ img }) => {
  return !!img ? (
    <div class="mocka-container">
      <span class="mocka-media" />
      <span class="mocka-heading" />
      <span class="mocka-text" />
    </div>
  ) : (
    <div class="mocka-container">
      <span class="mocka-heading" />
      <span class="mocka-heading" />
      <span class="mocka-heading" />
    </div>
  )
}

export default PlaceHolder
